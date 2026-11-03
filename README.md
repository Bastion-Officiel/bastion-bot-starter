# 🤖 BASTION Bot Starter

Modèle officiel prêt à l'emploi pour créer un bot sur la plateforme **BASTION** en quelques minutes.

---

## ⚡ Prérequis

- [Node.js](https://nodejs.org) (version 18 ou supérieure)
- Un compte BASTION avec les permissions de créer une application sur le **Portail Développeurs**

---

## 🚀 Installation & Démarrage

### 1. Télécharger ou cloner le projet
Téléchargez ce dossier ou clonez le dépôt dans votre espace de travail.

### 2. Installer les dépendances
Dans le dossier du bot, exécutez :
```bash
npm install
```

### 3. Configurer votre bot
Dupliquez le fichier `.env.example` et renommez-le en `.env` :
```env
BOT_TOKEN=votre_token_secret_ici
PREFIX=!
```

> 💡 **Où trouver votre token ?**  
> Rendez-vous dans le **Portail Développeurs BASTION**, créez votre application, générez un bot et copiez son jeton d'accès secret (**Bot Token**).

### 4. Lancer le bot
```bash
npm start
```

Votre bot se connectera automatiquement à BASTION et affichera son statut dans la console !

---

## 🛠️ Commandes incluses

Le bot est livré avec des commandes textuelles de base prêtes à être personnalisées :

| Commande | Action |
| :--- | :--- |
| `!ping` | Teste la réactivité et affiche la latence en millisecondes |
| `!help` | Affiche la liste des commandes disponibles |
| `!info` | Affiche les informations sur le bot et la plateforme |
| `!say <message>` | Fait répéter un texte par le bot |
| `!avatar [@membre]` | Affiche la photo de profil du membre ciblé |
| `!clear <1-100>` | Supprime rapidement les derniers messages du salon |

---

## 📁 Structure du projet

```
BASTION-Bot-Starter/
├── index.js          # Code source principal du bot et gestion des commandes
├── package.json      # Dépendances (@bastion-hub/bastion.js, dotenv)
├── .env.example      # Modèle des variables d'environnement
├── .gitignore        # Fichiers ignorés par Git (.env, node_modules)
└── README.md         # Guide d'utilisation
```

---

## 📚 Personnalisation & Documentation

Ce modèle utilise le SDK officiel **`@bastion-hub/bastion.js`**.  
Vous pouvez écouter d'autres événements (`voiceStateUpdate`, `interactionCreate`, etc.) et ajouter vos propres fonctionnalités en modifiant simplement `index.js`.

---

## 📄 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de l'utiliser, le modifier et l'adapter à vos besoins.
