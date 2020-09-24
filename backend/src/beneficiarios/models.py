from django.db import models

# Create your models here.
class Beneficiarios(models.Model):
    nombre = models.CharField(max_length=120)
    edad = models.IntegerField()

    def __str__(self):
        return self.nombre