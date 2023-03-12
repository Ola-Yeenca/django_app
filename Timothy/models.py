from django.db import models
from django.db import migrations


# Create your models here.

#HOMEPAGE SECTION

class Home(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    button = models.CharField(max_length=100)

    #save time when modified

    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


#ABOUT ME SECTION

class About(models.Model):
    heading = models.CharField(max_length=100)
    career = models.CharField(max_length=20)
    description = models.TextField()
    profile_img = models.ImageField(upload_to='images/')
    button = models.CharField(max_length=100)

    #save time when modified

    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.career


class Profile(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    social_name = models.CharField(max_length=30)
    social_link = models.URLField(max_length=200)



#SKILLS SECTION

class Category(models.Model):
    name = models.CharField(max_length=30)

    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.name


def add_default_skill_image(apps, schema_editor):
    Skill = apps.get_model('yourappname', 'Skills')
    Skill.objects.filter(skill_image=None).update(skill_image='images/default_skill_image.jp')

class Migration(migrations.Migration):
    dependencies = [('Timothy', '0001_initial'),]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='skill_image',
            field=models.ImageField(
                upload_to='skill_images/', default='images/default_skill_image.jp'),
                preserve_default=False,
                ),
                migrations.RunPython(add_default_skill_image),
                ]
class Skills(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    percentage = models.IntegerField()
    skill_image = models.ImageField(upload_to='images/', null=True, blank=True)

    updated = models.DateTimeField(auto_now=True)


#PORTFOLIO SECTION

class Portfolio(models.Model):
    name = models.CharField(max_length=30)
    portfolio_image = models.ImageField(upload_to='portfolio/')
    percentage = models.IntegerField()

    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Portfolio {self.id}'
