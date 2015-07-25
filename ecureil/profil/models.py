from django.db import models
from django.contrib.auth.models import User

class Localisation(models.Model):
	adresseIP = models.GenericIPAddressField()
	ville = models.CharField(max_length=30)
	pays = models.CharField(max_length=30)
	langue_site = models.CharField(max_length=2)

	def __str__(self):
		return format(self.ville)

class Profil(models.Model):
	CHOIX_SEXE = (
		('H', 'Homme'),
		('F', 'Femme'),
	)
	CHOIX_GENRE = (
		('H', 'Homme'),
		('F', 'Femme'),
		('MTF', 'Trans MtF'),
		('FTM', 'Trans FtM'),
		('I', 'Indéfini'),
	)
	CHOIX_ORIENTATION = (
		('G', 'Gay'),
		('L', 'Lesbienne'),
		('B', 'Bisexuel'),
		('A', 'Asexuel'),
		('P', 'Pansexuel'),
		('H', 'Hétérosexuel'),
		('D', 'Demisexuel'),
		('I', 'Indéfini'),
	)

	user = models.OneToOneField(User)
	avatar = models.ImageField(null=True, blank=True, upload_to="avatars/")
	date_naissance = models.DateField()
	localisation = models.ForeignKey(Localisation)
	sexe = models.CharField(max_length=1,
							choices=CHOIX_SEXE,
							)
	genre = models.CharField(max_length=3,
							 choices=CHOIX_GENRE,
							 )
	orientation = models.CharField(max_length=1,
								   choices=CHOIX_ORIENTATION,
								   )
	est_premium = models.BooleanField(default=False)
	est_certifie = models.BooleanField(default=False)


		


	def __str__(self):
		return "Profil de {0}".format(self.user.username)
		