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
		'List':'/pages-list/',
		'Detail View':'/pages-detail/<str:pk>/',
		'Create':'/pages-create/',
		'Update':'/pages-update/<str:pk>/',
		'Delete':'/pages-delete/<str:pk>/',
		}
	return Response(api_urls)

@api_view(['GET'])
def pageList(request):
	pages = Pages.objects.all().order_by('-id')
	serializer = PagesSerializer(pages, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def pageDetail(request, pk):
	pages = Pages.objects.get(id=pk)
	serializer = PagesSerializer(pages, many=False)
	return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def pageCreate(request):
	# serializer = PagesSerializer(data=request.data)

	
    if request.method == 'POST':
        serializer = PagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def pageUpdate(request, pk):
	page = Pages.objects.get(id=pk)
	serializer = PagesSerializer(instance=page, data=request.data)

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
	serializer = TempletesSerializer(templetes, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def templeteDetail(request, pk):
	templetes = Templetes.objects.get(id=pk)
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