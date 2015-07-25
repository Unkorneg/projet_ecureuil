# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profil', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Description',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('titre', models.CharField(max_length=30)),
                ('description', models.TextField(default='')),
            ],
        ),
        migrations.AddField(
            model_name='profil',
            name='description',
            field=models.ForeignKey(to='profil.Description', default=''),
            preserve_default=False,
        ),
    ]
