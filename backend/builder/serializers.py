from rest_framework import serializers
from .models import Pages

class PagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pages
        fields = ('id' ,'name', 'description', 'html', 'css')