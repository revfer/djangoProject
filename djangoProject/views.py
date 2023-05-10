from django.http import HttpResponse
from django.template import loader


def user(request):
    template = loader.get_template('user.html')
    context = {}
    render_page = template.render(context, request)
    return HttpResponse(render_page)


def administrator(request):
    template = loader.get_template('admin.html')
    context = {}
    render_page = template.render(context, request)
    return HttpResponse(render_page)


def user_verif(request):
    template = loader.get_template('user-verif.html')
    context = {}
    render_page = template.render(context, request)
    return HttpResponse(render_page)


def admin_verif(request):
    template = loader.get_template('../pages/../templates/admin-verif.html')
    context = {}
    render_page = template.render(context, request)
    return HttpResponse(render_page)


def index(request):
    template = loader.get_template('index.html')
    context = {}
    render_page = template.render(context, request)
    return HttpResponse(render_page)