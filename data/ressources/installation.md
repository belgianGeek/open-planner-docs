---
authors: [BelgianGeek]
tags: [
  Installation,
  Base de données,
  Paramètres,
  Paramétrage,
  Mise en place
]
---
# Procédure d'installation

## Prérequis

Afin de fonctionner de manière optimale, cette application nécessite les éléments suivants :

- Elle doit être installée dans un environnement de type Linux
- Un serveur de base de données [PostgreSQL](https://www.postgresql.org) en version `<= 9`
- [Node.js](https://nodejs.org) en version `<= 10`

Le serveur de base de données et la plateforme Node.js peuvent être installés très facilement depuis le gestionnaire de paquets de la distribution Linux utilisée (par exemple, sous Ubuntu/Debian via la commande `sudo apt install -y nodejs postgresql`, consultez la documentation de votre distribution si celle-ci n'est pas basée sur Debian).

## Mise en place

:point_right: Ces instructions peuvent paraître compliquées à suivre pour tout qui n'est pas familier avec le domaine de l'informatique. N'hésitez donc pas à [ouvrir une issue](https://github.com/belgianGeek/open-planner/issues/new) afin d'obtenir de l'aide.

Le logiciel _Open Planner_ peut être téléchargé et installé en quelques clics, une fois les prérequis satisfaits.

Pour télécharger le programme, vous pouvez soit cloner ce dépôt dans un dossier sur votre ordinateur (attention, cela nécessite d'avoir installé [Git](https://git-scm.com/) au préalable !) via la commande `git clone https://github.com/belgianGeek/open-planner.git /home/$user/Documents/open-planner` ou simplement télécharger l'ensemble des fichiers au format `.zip` et les déplacer ensuite dans le dossier de votre choix sur votre ordinateur.

Le serveur de base de données PostgreSQL doit être actif pour assurer le bon fonctionnement du logiciel. Pour démarrer le service, vous pouvez donc entrer la commande `sudo systemctl start postgresql` dans un terminal. Afin que le service soit démarré à chaque allumage de votre ordinateur, vous devez exécutez la commande `sudo systemctl enable postgresql`.

Pour finaliser l'installation, vous n'avez plus qu'à démarrer le programme en ouvrant une fenêtre de terminal, en vous rendant dans le dossier où vous avez placé les fichiers du programme (au moyen de la commande `cd dossier-d'open-planner`) et exécuter la commande `npm run start`. Cette comande aura pour effet d'afficher plusieurs lignes, y compris un lien vous permettant de vous connecter à l'interface et de terminer la configuration grâce à un menu d'introduction qui vous guidera étape par étape.
