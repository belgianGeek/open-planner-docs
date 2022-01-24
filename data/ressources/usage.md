---
authors: [BelgianGeek]
tags: [
  Comptes utilisateurs,
  Email,
  Export de données,
  Interface,
  Introduction de demande,
  Paramètres,
  Personnalisation,
  Privilèges,
  Procédure d'utilisation,
  Recherche,
  Usage
]
---
# Utilisation

## Principes de base

Open Planner est destiné à être utilisé dans les entreprises comptant plusieurs implantations. Il a été créé afin de faciliter la communication entre le personnel et les équipes chargées d'effectuer les travaux.

Chaque implantation est donc liée à une adresse email, qui recevra les notifications des demandes rentrées par les utilisateurs. Cette adresse doit de préférence être celle permettant d'entrer directement en contact avec l'équipe chargée de la tâche sur l'implantation spécifiée.

## Comptes utilisateurs

Il existe 3 types de comptes, chacun ayant des droits particuliers :

- Les visiteurs peuvent entrer une demande et visualiser leur état, sans possibilité d'agir sur celles-ci. **Une fois qu'une demande est ajoutée, un visiteur ne peut pas la modifier.**
- Les utilisateurs peuvent agir sur les demandes (attribution, ajout de commentaires) et exporter l'ensemble des tâches, ce qui peut être utile à des fins statistiques ou pour rédiger un rapport par exemple.
- Les administrateurs ont tous les droits précités mais peuvent également gérer les utlisateurs, les implantations et l'ensemble des paramètres d'Open Planner (envoi d'emails, autoriser les pièces jointes...).

## Introduire une demande d'intervention

Pour introduire, une nouvelle demande, il suffit de se connecter à l'interface d'_Open Planner_ et à cliquer sur le bouton _Rentrer une nouvelle demande_ situé sur la page d'accueil. Un formulaire va alors s'afficher avec le contenu suivant :

![Formulaire de demande](https://github.com/belgianGeek/open-planner/blob/master/screenshots/in-request.png?raw=true)

Comme vous pouvez le voir, vos noms et prénom sont déjà indiqués. Vous n'avez donc qu'à sélectionner l'implantation concernée par votre demande ainsi que votre message et le tour est joué !

Si certains champs sont préremplis, tous restent modifiables : vous pouvez adapter vos coordonnées, la date... et même ajouter une image illustrant votre demande.

Si l'administrateur du logiciel a activé les notifications par email, l'équipe chargée d'effectuer l'intervention sera prévenue de cette manière. L'utilisateur peut également recevoir un email de confirmation pour autant que l'administrateur l'ait autorisé.

## Recherche

Il est possible de visualiser l'ensemble des demandes via l'onglet de recherche du programme :

![Interface de recherche](https://github.com/belgianGeek/open-planner/blob/master/screenshots/search.png?raw=true)

Par défaut, toutes les demandes soint affichées, peu importe l'implantation concernée. Il est néanmoins possible de filtrer les résultats par implantation via un menu déroulant et/ou au moyen du nom du demandeur graĉe au champ de saisie prévu à cet effet.

Les personnes disposant du rôle de "visiteur" ne peuvent que consulter le tableau des demandes, tandis que les utilisateurs et administrateurs peuvent agir sur chacune d'entre elles en effectuant un clic-droit. Il leur est alors possible de mettre à jour le statut de la demande (en attente d'attribution, en cours, terminé) et le travailleur assigné ou bien de la supprimer.

Ce menu de modification a l'aspect suivant :

![Formulaire de modification d'une demande](https://github.com/belgianGeek/open-planner/blob/master/screenshots/request-modification.png?raw=true)

## Paramétrage

![Paramètres d'Open Planner](https://github.com/belgianGeek/open-planner/blob/master/screenshots/settings.png?raw=true)

Le menu de paramétrage n'est accessible qu'aux administrateurs et permet de modifier le fonctionnement d'_Open Planner_ en quelques clics. Il est notamment possible de modifier :

- Les permissions données aux utilisateurs (ajout de pièces jointes, modification de coordonnées...)
- Les paramètres d'emailing (serveur SMTP, compte email, signature...)
- Le nom donné au programme en interne à l'entreprise
- La description du programme et son utilité. Ce paramétrage est essentiel à l'optimisation des moteurs de recherche et peut donc s'avérer utile si le programme est hébergé en ligne

Des informations complémentaires sont fournies dans l'interface pour les options plus techniques.

## Export de données et sauvegarde

Il est possible d'exporter des tâches depuis le menu latéral, pour autant que vous ayez a minima le rôle d'utilisateur. Les tâches peuvent être exportées au format CSV ou en format PostgreSQL.

Si le format CSV est sélectionné, le fichier obtenu ne contiendra que les tâches et toutes les informations qui y sont liées.

Par contre, un export au format PostgreSQL contiendra l'ensemble des données de la base de données, la structure des tables... Il s'agit de l'option à sélectionner si vous désirez effectuer une sauvegarde complète du programme.

Dans tous les cas, une sauvegarde complète de base de données est effectuée toutes les 12 heures. Cette action équivaut à exporter manuellement les données au format PostgreSQL comme expliqué ci-dessus.
