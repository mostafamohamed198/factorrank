import os
from .settings import *

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = 'ead3590fd095ac79de5bc320eb17f74562f089ff162d4e67d80191bb240da28a'

DEBUG = False

ALLOWED_HOSTS = ['factorrank.com']

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'frontend', 'static')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend', 'static', 'build'),
]
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'frontend', 'static', 'media')

""" DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db',
        'USER': 'db',
        'PASSWORD': 'AVNS_lS3MUX4hhLotDtVlfDa',
        'HOST': 'app-f5805088-3920-4a81-be5c-ce9f8b6ec2ce-do-user-13628971-0.b.db.ondigitalocean.com',
        'PORT': '25060',
        'OPTIONS': {
            'sslmode': 'require',
        },
    }
} """

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'
DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'