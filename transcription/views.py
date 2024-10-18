from django.shortcuts import render

# Create your views here.
def transcription(request):
    context = {
        'title': 'Transcription Record'
    }
    return render(request, 'transcription/transcription.html', context)