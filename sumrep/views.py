from django.shortcuts import render

# Create your views here.
def sumrep(request):
    context = {
        'title': 'Summary Report'
    }
    return render(request, 'sumrep/sumrep.html', context)

def summary(request):
    context = {
        'title': 'Summary Report'
    }
    return render(request, 'sumrep/summary.html', context)