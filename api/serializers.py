from rest_framework import serializers
from .models import Todo, Reporter, Article, Executions

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
        fields = ('id', 'first_name', 'last_name', 'email')


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'pub_date ', 'headline ', 'reporter ')
