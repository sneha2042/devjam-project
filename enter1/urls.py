from django.urls import path,include
from enter1 import views
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import LoginView,LogoutView


urlpatterns = [
	path("", views.index1,name="index"),
	path("login/dashboard/",views.index1,name="dashboard"),
	#path("register/",views.register,name="register"),
	path("shimla.html",views.shimla,name="shimla_url"),
    path("shillong.html/",views.shillong,name="shillong_url"),
	path("new.html",views.rajasthan,name="rajasthan_url"),
    path("project.html",views.kerala,name="kerala_url"),
	#path("register/",views.register,name="register"),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name="login_url"),
    path('logout/', auth_views.LogoutView.as_view(), name="logout"),

]