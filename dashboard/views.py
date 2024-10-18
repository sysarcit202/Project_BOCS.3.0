from django.shortcuts import render

# Create your views here.
def dashboard(request):
    context = {
        'title': 'Dashboard'
    }
    return render(request, 'dashboard/dashboard.html', context)

def update(request):
    context = {
        'title': 'Update'
    }
    return render(request, 'dashboard/update.html', context)
