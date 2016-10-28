from commons_app_web.settings import LANGUAGES
from subprocess import call

for lang in LANGUAGES:
    cmnd = 'python3 manage.py makemessages -l {} -e js,dtl,py'.format(lang[0])
    call(cmnd, shell=True)
