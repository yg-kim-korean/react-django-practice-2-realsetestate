# Generated by Django 3.1.4 on 2020-12-09 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20201209_2258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
