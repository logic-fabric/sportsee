# SportSee - Juillet 2021

Code source du **Projet 12** - **_Développez un tableau de bord d'analytics avec React_** du parcours **Développeur Front-end** d'_OpenClassrooms_.

## Page de démonstration

[![Netlify Status](https://api.netlify.com/api/v1/badges/375faf60-fb45-40de-a189-aebe05883830/deploy-status)](https://app.netlify.com/sites/hopeful-mcclintock-f9bb9e/deploys)

Un rendu statique de ce code, s'appuyant sur une _mocked_ API (branche `mocked-api-version`), est accessible via un [déploiement Netlify](https://hopeful-mcclintock-f9bb9e.netlify.app/).

## Installation

### Prérequis

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation et lancement du back-end

Cloner le repo du _back-end_ de _SportSee_ :

`git clone https://github.com/logic-fabric/sportsee-api.git`

En se plaçant dans le repo du _back-end_, installer ses dépendances :

`npm install`

Lancer le _back-end_ sur le port 3000 (port par défaut) :

`npm run start`

### Installation et lancement du front-end

Cloner le présent repo du _front-end_ de _SportSee_ :

`git clone https://github.com/logic-fabric/LoicMangin_12_14072021.git`

En se plaçant dans le repo du _front-end_, installer ses dépendances :

`npm install`

Lancer le _front-end_ sur le port 3001 :

`npm start`

Le _front-end_ est alors consultable à l'URL `http://localhost:3001`.

**N.B. :**

- l'API ne fournit des données que pour les utilisateurs d'id 12 et 18.
- l'utilisateur 18 a un rendu alternatif du diagramme "Durée moyenne des sessions", plus pertinent que celui de la [maquette Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR).
