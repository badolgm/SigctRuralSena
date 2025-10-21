from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import os
from datetime import datetime

@csrf_exempt
@require_http_methods(["GET", "HEAD"])
def health_check(request):
    """
    Health check endpoint para Render
    Devuelve 200 si el servicio está funcionando
    """
    try:
        # Verificar que Django está funcionando
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
        
        response_data = {
            "status": "healthy",
            "service": "sigct-backend",
            "timestamp": datetime.now().isoformat(),
            "environment": "production" if os.getenv('RENDER') else "development",
            "database": "connected"
        }
        
        return JsonResponse(response_data, status=200)
        
    except Exception as e:
        return JsonResponse({
            "status": "unhealthy",
            "error": str(e),
            "timestamp": datetime.now().isoformat()
        }, status=503)