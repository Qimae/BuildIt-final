from rest_framework import serializers
from builder.models import Pages, Templetes, Catagories

class PagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pages
        fields = ['id','author','img_url', 'name', 'description', 'Page_pic', 'html', 'css']
class TempletesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Templetes
        fields = ['id', 'catagory', 'img_url','name', 'description', 'Template_pic', 'html', 'css']
class CatagoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catagories
        fields ='__all__'