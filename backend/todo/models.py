from django.db import models


# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=120)
    id = models.AutoField(primary_key=True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
