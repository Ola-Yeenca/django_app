from django.shortcuts import render
from .models import Home, About, Profile, Skills


# Create your views here.

def index(request):

    #home
    home = Home.objects.latest('updated')

    context = {'home': home, }




    return render(request, 'index.html', context)
