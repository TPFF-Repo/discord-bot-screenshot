# Bot de Surveillance des Screenshots

Un bot Discord qui surveille un canal spécifique et supprime automatiquement les messages texte (sans pièces jointes ni embeds) sauf pour les modérateurs.

## Fonctionnalités
- Suppression automatique des messages texte dans le canal désigné
- Exceptions pour les membres avec le rôle 'Modérateur'
- Journalisation des actions dans la console

## Configuration Requise
- Node.js v18+
- Compte Discord Developer avec bot configuré

## Installation
1. Cloner le dépôt
```bash
git clone https://github.com/votre-compte/bot-screenshot.git
npm install discord.js dotenv
```
2. Créer un fichier `.env` et ajouter votre token Discord
```bash
DISCORD_TOKEN=votre_token_here
```
3. Modifier le fichier `index.js` pour définir le canal à surveiller
```javascript
const channelId = 'ID_DU_CANAL';
```
4. Lancer le bot
```bash
node index.js
``` 