# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profil', '0003_auto_20150725_1329'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profil',
            name='description',
        ),
        migrations.DeleteModel(
            name='Description',
        ),
    ]
