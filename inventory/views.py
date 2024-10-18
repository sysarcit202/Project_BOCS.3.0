from django.shortcuts import render

# Create your views here.
def inventory(request):
    context = {
        'title': 'Inventory'
    }
    return render(request, 'inventory/inventory.html', context)

def donor(request):
    context = {
        'title': 'Donor'
    }
    return render(request, 'inventory/donor.html', context)

def instock(request):
    context = {
        'title': 'In-Stock'
    }
    return render(request, 'inventory/instock.html', context)

def used(request):
    context = {
        'title': 'Used'
    }
    return render(request, 'inventory/used.html', context)