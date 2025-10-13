#!/usr/bin/env python3
"""
Lectura sensor DHT22 - BBB3
Temperatura y Humedad
"""
import time
import Adafruit_DHT
import paho.mqtt.client as mqtt
from datetime import datetime

SENSOR = Adafruit_DHT.DHT22
GPIO_PIN = 4  # P9_12
MQTT_BROKER = "192.168.10.1"  # BBB1
MQTT_TOPIC = "sigct/sensores/bbb3/dht22"

def read_sensor():
    """Lee temperatura y humedad"""
    humidity, temperature = Adafruit_DHT.read_retry(SENSOR, GPIO_PIN)
    if humidity is not None and temperature is not None:
        return {
            'temperatura': round(temperature, 2),
            'humedad': round(humidity, 2),
            'timestamp': datetime.now().isoformat()
        }
    return None

def main():
    client = mqtt.Client()
    client.connect(MQTT_BROKER, 1883, 60)
    
    print("📡 Iniciando lectura DHT22...")
    while True:
        try:
            data = read_sensor()
            if data:
                client.publish(MQTT_TOPIC, str(data))
                print(f"✅ {data['timestamp']}: {data['temperatura']}°C, {data['humedad']}%")
            time.sleep(300)  # Cada 5 minutos
        except KeyboardInterrupt:
            break
        except Exception as e:
            print(f"❌ Error: {e}")
            time.sleep(60)

if __name__ == '__main__':
    main()
