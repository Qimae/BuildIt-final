from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('page-list/', views.pageList, name="page-list"),
	path('page-detail/<str:pk>/', views.pageDetail, name="page-detail"),
	path('page-create/', views.pageCreate, name="page-create"),

	path('page-update/<str:pk>/', views.pageUpdate, name="page-update"),
	path('page-delete/<str:pk>/', views.pageDelete, name="page-delete"),
	path('template-list/', views.templateList, name="template-list"),
	path('templete-detail/<str:pk>/', views.templeteDetail, name="templete-detail"),
	path('templete-create/', views.templeteCreate, name="templete-create"),

	path('templete-update/<str:pk>/', views.templateUpdate, name="templete-update"),
	path('templete-delete/<str:pk>/', views.templeteDelete, name="templete-delete"),

	path('catagory-list/', views.catagoriesList, name="template-list"),
	path('catagory-detail/<str:pk>/', views.catagoriesDetail, name="catagory-detail"),
	path('catagory-create/', views.catagoriesCreate, name="catagory-create"),

	path('catagory-update/<str:pk>/', views.catagoriesUpdate, name="catagory-update"),
	path('catagory-delete/<str:pk>/', views.catagoriesDelete, name="catagory-delete"),
]