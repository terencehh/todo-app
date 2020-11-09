# Generated by Django 3.1.3 on 2020-11-09 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('title', models.CharField(max_length=120)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
    ]
