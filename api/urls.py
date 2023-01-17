from django.urls import path
from .views import TradeList,genericview
urlpatterns = [
    path('trades/', TradeList.as_view())
    path('reporter/',genericview())
]
