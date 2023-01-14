from django.shortcuts import render
from rest_framework import generics,status
from .serializers import TodoSerializers
from .models import Todo
# Create your views here.

class TodoListview(generics.ListApiView):
    model=Todo
    serializer_class=TodoSerializers