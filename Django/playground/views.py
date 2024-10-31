from django.shortcuts import render
from django.http import HttpResponse

def view_say_hello(request):
    return render(request, 'hello.html')