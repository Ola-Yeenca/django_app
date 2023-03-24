from django.shortcuts import render
from .models import Home, About, Profile, Category, Portfolio
from .forms import ContactForm
from django.core.mail import send_mail
from django.http import HttpResponseRedirect


def index(request):
    # Home
    home = Home.objects.latest('updated')

    # About
    about = About.objects.latest('updated')
    profiles = Profile.objects.filter(about=about)

    # Skills
    categories = Category.objects.all()

    # portfolio
    portfolio = Portfolio.objects.all()

    context = {
        'home': home,
        'about': about,
        'categories': categories,
        'profiles': profiles,
        'portfolio': portfolio,
    }

    return render(request, 'index.html', context)


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            send_mail(
                subject,
                message,
                email,
                ['olayinkatimothy102@gmail.com'],
                fail_silently=False,
            )
            return render(request, 'thanks.html')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})
