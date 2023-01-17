from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=70)
    
    def __str__(self):
        return self.title
''' 
symbol length { BANKNIFTY 19JAN 42500 CE}
order type  {NRML/MKT} {MIS/LIMIT} {NRML/LIMIT}
Buy 
'''


class Executions(models.Model):
    time=models.DateTimeField()
    trans_type=models.CharField(max_length=4)
    symbol=models.CharField(max_length=30)
    order_type=models.CharField(max_length=12)
    quantity=models.IntegerField()
    filled_qnty=models.IntegerField()
    price=models.DecimalField(max_digits=19,decimal_places=6)
    trade_pk=
    def __str__(self):
        return "execution was {self.trans_type} in{self.symbol} with {self.quantity} qnty at {self.time} and rem_qnty is {self.rem_quantity} at price {self.price}"
    def Meta(self):
        ordering=['time']
class Trades(models.Model):
    opentime=models.DateTimeField()
    closetime=models.DateTimeField()
    symbol=models.CharField(max_length=30)
    avg_buy_price=models.DecimalField(max_digits=19,decimal_places=6)
    avg_sell_price = models.DecimalField(max_digits=19, decimal_places=6)
    net_buy_qnty = models.IntegerField()


class Reporter(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)


class Article(models.Model):
    headline = models.CharField(max_length=100)
    pub_date = models.DateField()
    reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)

    def __str__(self):
        return self.headline

    class Meta:
        ordering = ['headline']

