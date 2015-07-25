# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profil', '0002_auto_20150725_1326'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profil',
            name='description',
            field=models.OneToOneField(to='profil.Description'),
        ),
    ]
