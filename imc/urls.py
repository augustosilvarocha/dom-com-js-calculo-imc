from django.urls import path, include
from imc import views

urlpatterns = [
    path("", views.index, name="index"),
    path("calcular/imc", views.calcularImc, name="calculo-imc"),
]
