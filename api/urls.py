from django.urls import path
from .views import Executionview,Reporterview,Articleview,Trade_Starterview,Tradesview
urlpatterns = [
    path('executions/', Executionview.as_view()),
    path('reporter/', Reporterview.as_view()),
    path('article/',Articleview.as_view()),
    path('trades/', Tradesview.as_view()),
    path('tradeprocess/',Trade_Starterview.as_view())
]
