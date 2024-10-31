from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def view_home(request):
    name = 'scuba steve'
    return render(request, 'home.html', {'name': name})