from django.db.models import fields
from rest_framework import serializers
from .models import Listing

class ListingSerializers(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title','address','city','state','price','sale_type','home_type','bedrooms','bathrooms','sqft','photo_main','slug')


class ListingDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field  = 'slug'