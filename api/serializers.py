from rest_framework import serializers
from .models import Todo, Reporter, Article, Executions,Trade_Starter,Trades
import datetime

class TodoSerializers(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=('id','title')


class ExecutionsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Executions
        fields=('id','time','price','trans_type','symbol','order_type','quantity','filled_qnty')

class ReporterSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reporter
        fields = ('id','first_name','last_name','email')


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
class Trade_StarterSerializers(serializers.ModelSerializer):
    class Meta:
        model=Trade_Starter
        fields = '__all__'


class TradeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Trades
        fields = '__all__'
