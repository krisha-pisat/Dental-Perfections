from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Welcome to the Dental Perfections API 🎉",
        "endpoints": {
            "blog": "/api/blog/posts/",
            "faq": "/api/faq/categories/",
            "reviews": "/api/reviews/"
        }
    })

urlpatterns = [
    path('admin/', admin.site.urls),

    # 👇 include each app under a clean API namespace
    path('api/blog/', include('blog.urls')),
    path('api/faq/', include('faq.urls')),
    path('api/reviews/', include('reviews.urls')),

    # 👇 root route (optional)
    path('', home),
]
