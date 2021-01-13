# Generated by Django 3.1.4 on 2021-01-10 14:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hospital', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='doctor',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='to_doctor', to='auth.user'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='record',
            name='hospital',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='from_hospital', to='auth.user'),
            preserve_default=False,
        ),
    ]
