from django.db import models

# Create your models here.

class Catagories(models.Model):
    name= models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    def __str__(self):
        return str(self.name)


class Pages(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    Page_pic = models.ImageField(null=True, blank=True, upload_to = 'profiles/', default='page.png')
    html = models.TextField()
    css = models.TextField()
    def __str__(self):
        return str(self.name)


    
class Templetes(models.Model):
    catagory = models.ForeignKey(
        Catagories, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=50)
    Template_pic = models.ImageField(null=True, blank=True, upload_to = 'profiles/', default='template.png')
    description = models.CharField(max_length=100)
    html = models.TextField()
    css = models.TextField()
    def __str__(self):
        return str(self.name)
