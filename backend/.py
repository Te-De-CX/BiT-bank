import os

# Security Headers
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
X_FRAME_OPTIONS = "DENY"

# CORS (Only allow your Next.js domain)
CORS_ALLOWED_ORIGINS = ["https://yourbank.com"]
CSRF_TRUSTED_ORIGINS = ["https://yourbank.com"]

# Database Encryption
FIELD_ENCRYPTION_KEY = os.getenv("ENCRYPTION_KEY")  # 32-char key

# JWT Configuration (DRF)
from datetime import timedelta
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": True,
}