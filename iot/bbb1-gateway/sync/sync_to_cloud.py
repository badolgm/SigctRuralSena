#!/usr/bin/env python3
"""
Script de sincronización BBB1 -> Cloud
Autor: Bernardo Adolfo Gómez Montoya
"""
import os
import time
import requests
import psycopg2
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

class CloudSync:
    def __init__(self):
        self.api_url = os.getenv('API_URL', 'http://localhost:8000')
        self.sync_interval = 300  # 5 minutos
        
    def get_pending_records(self):
        """Obtiene registros no sincronizados de BD local"""
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            host='localhost'
        )
        cur = conn.cursor()
        cur.execute("SELECT * FROM lectura WHERE synced = FALSE LIMIT 500")
        records = cur.fetchall()
        conn.close()
        return records
    
    def sync_batch(self, records):
        """Sincroniza lote de registros"""
        try:
            response = requests.post(
                f"{self.api_url}/api/sensores/lectura/batch/",
                json={'records': records},
                timeout=30
            )
            if response.status_code == 200:
                print(f"[{datetime.now()}] ✅ Sincronizados {len(records)} registros")
                return True
            else:
                print(f"[{datetime.now()}] ❌ Error: {response.status_code}")
                return False
        except Exception as e:
            print(f"[{datetime.now()}] ❌ Exception: {e}")
            return False
    
    def run(self):
        """Loop principal de sincronización"""
        print(f"[{datetime.now()}] 🚀 Iniciando servicio de sincronización...")
        while True:
            try:
                records = self.get_pending_records()
                if records:
                    self.sync_batch(records)
                time.sleep(self.sync_interval)
            except KeyboardInterrupt:
                print("\n[{datetime.now()}] 🛑 Deteniendo servicio...")
                break
            except Exception as e:
                print(f"[{datetime.now()}] ❌ Error: {e}")
                time.sleep(60)

if __name__ == '__main__':
    sync = CloudSync()
    sync.run()
