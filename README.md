# Art[&]Fact — Site web

## Structure du projet

```
artefact-cie/
├── index.html              # Page principale
├── css/
│   └── style.css           # Styles (polices via Google Fonts)
├── js/
│   └── main.js             # JavaScript (carrousel, modal, burger)
├── videos/
│   ├── animes/             # Vidéos animées des affiches (boucle)
│   │   ├── fantaisies.mp4
│   │   ├── petitchap.mp4
│   │   ├── raiponce.mp4
│   │   ├── noel.mp4
│   │   ├── bois-dormant.mp4
│   │   └── peter-pan.mp4
│   └── teasers/            # Teasers des spectacles
│       ├── teaser-fantaisies.mp4
│       └── teaser-petitchap.mp4
├── images/
│   ├── logo/               # Logo en 3 formats
│   │   ├── logo.png
│   │   ├── logo.jpg
│   │   └── logo.svg
│   ├── poster-*.jpg        # Vignettes des affiches (fallback vidéo)
│   └── photos/             # Photos de scène par spectacle
│       ├── fantaisies/     (6 photos)
│       ├── petitchap/      (6 photos)
│       ├── raiponce/       (6 photos)
│       ├── noel/           (6 photos)
│       ├── bois-dormant/   (6 photos)
│       └── peter-pan/      (6 photos)
└── README.md

```

## Mise en ligne

### GitHub Pages (recommandé - gratuit)
1. Créer un compte sur github.com
2. Nouveau dépôt → uploader ce dossier complet
3. Settings → Pages → Source: main branch
4. URL : https://votre-compte.github.io/artefact-cie

### Avec domaine personnalisé
1. Acheter un domaine sur OVH/Gandi (~10€/an)
2. Dans GitHub Pages Settings → Custom domain
3. Chez le registrar, pointer les DNS vers GitHub

## Ajouter un teaser YouTube
Dans `js/main.js`, remplacer `teaser:null` par `teaser:"videos/teasers/nom-du-fichier.mp4"`
ou ajouter une URL YouTube : modifier renderModal() pour intégrer un iframe YouTube.

## Crédits photos
Cassiopeia Photographie
