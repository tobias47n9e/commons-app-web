from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.utils import translation
from django.conf import settings

def index(request):
    current_lang = translation.get_language()
    lang_list = []

    for l in settings.LANGUAGES:
    	lang_list.append(l[0])

    context = {'current_lang': current_lang, 'lang_list': lang_list}

    return render(request, 'main_site/index.dtl', context)

