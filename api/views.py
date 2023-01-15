from django.shortcuts import render
from rest_framework import generics
from .serializers import TodoSerializers
from .models import Todo
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class TodoListview(generics.ListAPIView):
    queryset=Todo.objects.all()
    serializer_class=TodoSerializers