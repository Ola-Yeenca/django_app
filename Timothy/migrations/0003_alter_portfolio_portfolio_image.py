# Generated by Django 4.1.7 on 2023-03-12 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Timothy', '0002_portfolio_delete_languages_skills_skill_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='portfolio_image',
            field=models.ImageField(upload_to='portfolio/'),
        ),
    ]