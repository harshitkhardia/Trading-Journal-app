from django.shortcuts import render
from rest_framework import generics, status
from .serializers import TodoSerializers,ReporterSerializers,ArticleSerializers,ExecutionsSerializers,Trade_StarterSerializers,TradeSerializers
from .models import Todo, Article, Reporter, Executions, Trade_Starter, Trades
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser;
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class TodoListView (generics.ListAPIView):
    queryset=Todo.objects.all()
    serializer_class=TodoSerializers
@csrf_exempt
def Trade_list(request):
     if request.method == 'GET':
        trades = Executions.objects.all()
        serializer = ExecutionsSerializers(trades, many=True)
        return JsonResponse(serializer.data,safe=False)
     elif request.method == 'POST':
        data=JSONParser().parse(request)
        serializer = ExecutionsSerializers(data=data)
        if serializer.is_valid():
           serializer.save()
           return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors,status=400)
class Executionview(APIView):
    def get(self,request,format=None):
        trades = Executions.objects.all()
        serializer = ExecutionsSerializers(trades, many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        print(request.data)
        serializer = ExecutionsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class Reporterview(APIView):
    def get(self,request,format=None):
        Reporters = Reporter.objects.all()
        serializer = ReporterSerializers(Reporters, many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        print(request.data)
        serializer = ReporterSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class Articleview(APIView):
    def get(self,request,format=None):
        Articles=Article.objects.all()
        serializer = ArticleSerializers(Articles, many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        print(request.data)
        serializer = ArticleSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
class Trade_Starterview(APIView):
    def get(self,request,format=None):
        Trader_Starter_list=Trade_Starter.objects.all()
        serializer = Trade_StarterSerializers(Trader_Starter_list, many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        print(request.data)
        serializer = Trade_StarterSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class Tradesview(APIView):
    def get(self,request,format=None):
        Trades_list=Trades.objects.all()
        serializer = TradeSerializers(Trades_list, many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        print(request.data)
        serializer = TradeSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)