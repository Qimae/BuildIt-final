from unicodedata import name
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status


from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.serializers import serialize
from .serializers import PagesSerializer, TempletesSerializer, CatagoriesSerializer

from builder.models import Pages, Templetes, Catagories


# 1. Import the csrf_exempt decorator
from django.views.decorators.csrf import csrf_exempt

# 2. Exempt the view from CSRF checks

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/page-list/',
		'Detail View':'/page-detail/<str:pk>/',
		'Create':'/page-create/',
		'Update':'/page-update/<str:pk>/',
		'Delete':'/page-delete/<str:pk>/',
		}
	return Response(api_urls)

@api_view(['GET'])
def pageList(request):
	print(request.user.id)
	pages = Pages.objects.filter(author=request.user.id).order_by('-id')
	print(pages)

	serializer = PagesSerializer(pages, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def pageDetail(request, pk):
	pages = Pages.objects.get(id=pk)
	serializer = PagesSerializer(pages, many=False)
	user = request.user
    # return Pages.objects.filter(purchaser=user)
	return Response(serializer.data)

# @csrf_exempt
@api_view(['POST'])
def pageCreate(request):
	# serializer = PagesSerializer(data=request.data)
	# print(request.getjson())
	if request.method == 'POST':
		html = request.data.get('html')
		css = request.data.get('css')
		name = request.data.get('name')
		description = request.data.get('description')
		img_url = request.data.get('img_url')
		author = request.user.id

		page1 = {"html":html, "css":css, "name":name, "img_url": img_url,"description":description, "author":author}
		print(page1)
		# css : request.data.css
		# name = request.data.name
		# description = request.data.description
		# user = request.user.id
		
		serializer = PagesSerializer(data=page1)
		
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def pageUpdate(request, pk):
	page = Pages.objects.get(id=pk)
	html = request.data.get('html')
	css = request.data.get('css')
	name = request.data.get('name')
	description = request.data.get('description')
	img_url = request.data.get('img_url')
	author = request.user.id

	page1 = {"html":html, "css":css, "name":name, "img_url": img_url,"description":description, "author":author}
	print(page1)
	serializer = PagesSerializer(instance=page, data=page1)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def pageDelete(request, pk):
	page = Pages.objects.get(id=pk)
	page.delete()

	return Response('Item succsesfully delete!')

#below is where Catagories api is rendered 

@api_view(['GET'])
def catagoriesList(request):
	catagories = Catagories.objects.all().order_by('-id')
	serializer = CatagoriesSerializer(catagories, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def catagoriesDetail(request, pk):
	catagories = Catagories.objects.get(id=pk)
	serializer = CatagoriesSerializer(catagories, many=True)
	return Response(serializer.data)


@api_view(['POST'])
def catagoriesCreate(request):
	serializer = CatagoriesSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def catagoriesUpdate(request, pk):
	catagories = Catagories.objects.get(id=pk)
	serializer = CatagoriesSerializer(instance=page, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def catagoriesDelete(request, pk):
	catagory = Catagories.objects.get(id=pk)
	catagory.delete()

	return Response('Item succsesfully delete!')

#below is where Templates api is rendered 

@api_view(['GET'])
def templateList(request):
	templetes = Templetes.objects.all().order_by('-id')
	print(templetes)
	serializer = TempletesSerializer(templetes, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def templeteDetail(request, pk):
	templetes = Templetes.objects.filter(id=pk)
	print(templetes)
	serializer = TempletesSerializer(templetes, many=True)
	return Response(serializer.data)


@api_view(['POST'])
def templeteCreate(request):
	serializer = TempletesSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def templateUpdate(request, pk):
	page = Pages.objects.get(id=pk)
	serializer = TempletesSerializer(instance=page, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def templeteDelete(request, pk):
	page = Templetes.objects.get(id=pk)
	page.delete()

	return Response('Item succsesfully delete!')