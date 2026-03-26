DiagTerrain — BTP Ingénierie
Application mobile PWA de diagnostic structurel terrain. Localisation des observations sur plan, saisie de fiches, export PDF.
---
Installation
Prérequis
Un compte GitHub (gratuit) — github.com
Chrome sur Android ou Safari sur iPhone
Déploiement sur GitHub Pages
1. Créer le dépôt
GitHub → + → New repository
Nom : `diagterrain` · Visibilité : Public
Create repository
2. Déposer les fichiers
Add file → Upload files
Glisser-déposer le dossier extrait du ZIP
Structure attendue :
```
index.html
manifest.json
sw.js
icons/
  icon-192.png
  icon-512.png
```
Commit changes
3. Activer GitHub Pages
Settings → Pages → Source : Deploy from a branch
Branch : main / dossier / (root) → Save
Attendre 2-3 min
4. URL de l'app
```
https://[pseudo].github.io/diagterrain/
```
Installation sur Android
Ouvrir l'URL dans Chrome
Bandeau "Installer DiagTerrain ?" → Installer
Ou : menu Chrome (⋮) → Ajouter à l'écran d'accueil
Installation sur iPhone
Ouvrir l'URL dans Safari (obligatoire)
Icône Partager → Sur l'écran d'accueil
---
Mise à jour des fichiers
Pour mettre à jour un fichier sur GitHub depuis PC :
Cliquer sur le fichier dans le dépôt
Icône crayon ✏️ → Edit file
Ctrl+A → Supprimer → coller le nouveau contenu
Commit changes
Pour les images (icônes) :
Aller dans le dossier `icons/`
Add file → Upload files → glisser les nouveaux fichiers → Commit
Après chaque mise à jour, incrémenter la version dans `sw.js` :
```
const CACHE = 'diagterrain-v7';  →  'diagterrain-v8'
```
---
Utilisation
Créer une mission
+ Nouvelle mission → renseigner nom, référence, ingénieur
Charger le plan (PDF page 1, JPG ou PNG)
Démarrer la mission
Naviguer sur le plan
Geste	Action
Glisser	Déplacer le plan
Pincer / écarter	Zoom
Appui long (600 ms)	Créer une observation à cet endroit
Bouton ⤢	Recadrer le plan en vue d'ensemble
Bouton + (en bas à droite)	Nouvelle observation sans position
Créer une observation
Après appui long ou bouton + :
Type : Fissuration / Visuel / Autre
Étiquette du pin : texte libre jusqu'à 8 caractères (ex: P3, Mur S) — laisser vide pour numérotation auto
Caractéristiques fissure : largeur (mm), longueur (cm), orientation, activité
Localisation : description textuelle (ex: Poteau P3, face sud, à 1m20 du sol)
Observation : description libre
Photos : depuis l'appareil photo ou la galerie
Pins sur le plan
Couleur	Type
Rouge	Fissuration
Bleu	Visuel
Gris	Autre
Reprise automatique de mission
À chaque enregistrement, la mission est sauvegardée automatiquement sur le téléphone. À la réouverture de l'app, une carte "mission en cours" apparaît sur l'écran d'accueil avec le nom du projet et l'heure de la dernière sauvegarde. Un appui reprend directement là où on s'était arrêté, plan inclus.
La croix sur la carte efface la mission en cours.
---
Export
Depuis l'onglet Export :
JSON — Sauvegarde complète
Exporte toutes les données + photos en base64. Permet de reprendre une mission sur un autre appareil via "Importer une sauvegarde".
CSV — Tableau Excel
Toutes les observations avec : référence, étiquette pin, type, localisation, description, date, largeur fissure, longueur fissure, orientation, activité, nombre de photos.
Ouvrir dans Excel : Données → À partir d'un fichier texte/CSV → séparateur point-virgule → encodage UTF-8.
PDF — Rapport structurel
Génère un PDF multi-pages directement sur le téléphone :
Page 1 — A4 paysage : plan annoté avec les pins colorés et leurs étiquettes
Pages suivantes — A4 portrait : tableau complet des observations avec photos
---
Limites connues
Quota localStorage : les photos sont stockées en base64. Au-delà de ~50 photos haute résolution, le quota peut être dépassé. Dans ce cas, les photos ne sont plus conservées entre sessions mais les observations (texte, positions) restent intactes. Solution : exporter régulièrement en JSON.
Plan entre sessions : le plan est compressé à 1200px avant stockage. Sur des plans très détaillés, la résolution en lecture terrain peut être légèrement réduite. Recharger le plan original si nécessaire.
Mode hors ligne : l'app fonctionne sans réseau après la première ouverture (service worker). La librairie PDF.js est mise en cache automatiquement.
---
Architecture technique
```
index.html      Application complète (HTML + CSS + JS en fichier unique)
manifest.json   Métadonnées PWA (nom, icône, couleurs)
sw.js           Service worker (cache offline, mise à jour)
icons/          Icônes 192×192 et 512×512 pour l'installation
```
Technologies : HTML5, CSS3, JavaScript natif, PDF.js (lecture PDF), jsPDF (génération PDF), LocalStorage (persistance).
Aucun framework, aucun backend, aucune dépendance serveur.
---
Partage avec l'équipe
Envoyer l'URL par SMS ou email. Chaque collaborateur installe l'app depuis son téléphone. Les données restent locales sur chaque appareil — pas de synchronisation cloud, pas de compte requis.
Pour partager une mission entre collaborateurs : exporter en JSON → envoyer le fichier → importer sur l'autre appareil.
---
BTP Ingénierie — Diémoz / Bourgoin-Jallieu
