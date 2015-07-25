# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Localisation',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('adresseIP', models.GenericIPAddressField()),
                ('ville', models.CharField(max_length=30)),
                ('pays', models.CharField(max_length=30)),
                ('langue_site', models.CharField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Profil',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('avatar', models.ImageField(upload_to='avatars/', blank=True, null=True)),
                ('date_naissance', models.DateField()),
                ('sexe', models.CharField(max_length=1, choices=[('H', 'Homme'), ('F', 'Femme')])),
                ('genre', models.CharField(max_length=3, choices=[('H', 'Homme'), ('F', 'Femme'), ('MTF', 'Trans MtF'), ('FTM', 'Trans FtM'), ('I', 'Indéfini')])),
                ('orientation', models.CharField(max_length=1, choices=[('G', 'Gay'), ('L', 'Lesbienne'), ('B', 'Bisexuel'), ('A', 'Asexuel'), ('P', 'Pansexuel'), ('H', 'Hétérosexuel'), ('D', 'Demisexuel'), ('I', 'Indéfini')])),
                ('est_premium', models.BooleanField(default=False)),
                ('est_certifie', models.BooleanField(default=False)),
                ('localisation', models.ForeignKey(to='profil.Localisation')),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
