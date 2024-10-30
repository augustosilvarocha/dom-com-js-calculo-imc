from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "imc/index.html")

def calcularImc(request):
    return render(request, "imc/imc.html")