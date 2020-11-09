from rest_framework import serializers
from .models import Todo


# converts model instances to JSON to make it easy to send data to front-end
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'completed')
