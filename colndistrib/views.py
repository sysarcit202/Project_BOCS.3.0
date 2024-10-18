from django.shortcuts import render

# Create your views here.
def colndistrib(request):
    context = {
        'title': 'Collection & Distribution'
    }
    return render(request, 'colndistrib/colndistrib.html', context)

def collection(request):
    context = {
        'title': 'Collection'
    }
    return render(request, 'colndistrib/collection.html', context)

def distribution(request):
    context = {
        'title': 'Distribution'
    }
    return render(request, 'colndistrib/distribution.html', context)