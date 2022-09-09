from django.db import models
from django.conf import settings

# Create your models here.

class Catagories(models.Model):
    name= models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    def __str__(self):
        return str(self.name)


class Pages(models.Model):
    name = models.CharField(max_length=50)
    img_url=models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=100)
    Page_pic = models.ImageField(null=True, blank=True, upload_to = 'profiles/', default='page.png')
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_pages')
    html = models.TextField()
    css = models.TextField()
    def __str__(self):
        return str(self.name)


    
class Templetes(models.Model):
    catagory = models.ForeignKey(
        Catagories, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=50)
    Template_pic = models.ImageField(null=True, blank=True, upload_to = 'profiles/', default='template.png')
    img_url=models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    html = models.TextField()
    css = models.TextField()
    def __str__(self):
        return str(self.name)
