# En INSTALLED_APPS, agrega al final:
INSTALLED_APPS = [
    'daphne',  # Para WebSocket
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    
    # Nuestras apps
    'backend.apps.usuarios',
    'backend.apps.sensores',
    'backend.apps.cursos',
    'backend.apps.laboratorios',
    'backend.apps.alertas',
]

# Agrega al final del archivo:
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 100,
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
]

ASGI_APPLICATION = "backend.core.asgi.application"
# ============================================================================
# RENDER PRODUCTION SETTINGS
# ============================================================================
import dj_database_url

# Detectar si estamos en Render (producción)
if os.getenv('DATABASE_URL'):
    # Database configuration
    DATABASES = {
        'default': dj_database_url.config(
            default=os.getenv('DATABASE_URL'),
            conn_max_age=600,
            conn_health_checks=True,
            ssl_require=True
        )
    }
    
    # Security settings
    DEBUG = False
    ALLOWED_HOSTS = ['.onrender.com', 'sigct-backend.onrender.com', 'localhost', '127.0.0.1']
    
    # Static files
    STATIC_ROOT = BASE_DIR / 'staticfiles'
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
    
    # Security headers
    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    
    # CORS for frontend
    CORS_ALLOWED_ORIGINS = [
        "https://sigct-frontend.onrender.com",
    ]
    CORS_ALLOW_CREDENTIALS = True
