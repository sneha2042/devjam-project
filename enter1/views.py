from django.contrib import auth
from django.http import HttpResponseRedirect, HttpResponse
from django import forms
from django.contrib.auth.models import User
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from enter1.forms import UserRegisterForm

def signup(request):
    return render(request,"signup.html")

def register(request):
    print("Hello1")
    if request.method == "POST":
        print("Hello2")
        form =UserRegisterForm(request.POST)
        if form.is_valid():
            form.save();
            username=form.cleaned_data.get('username')
            return redirect("login_url")
    else:
        form=UserRegisterForm()
        print("Hello3")
    return render(request,"signup.html",{'form':form,'title':'register here'})

# Create your views here.
def index1(request):
    return render(request,"index.html")

#@login_required()
def dashboard(request):
    return render(request,"dashboard.html")

def shimla(request):
    print("Hello")
    return render(request,"shimla.html")

def shillong(request):
    return render(request,"shillong.html")

def kerala(request):
    return render(request,"project.html")

def rajasthan(request):
    return render(request,"new.html")