# Art[&]Fact — Site web

## Structure du projet

```
artefact-cie-magie/
├── index.html                       # Page principale (HTML sémantique)
├── assets/
│   ├── css/
│   │   └── style.css                # Tous les styles
│   ├── js/
│   │   └── main.js                  # JavaScript (burger, carrousel, modal, newsletter…)
│   └── img/
│       ├── logo/
│       │   ├── logo.png             # Logo (fallback si SVG absent)
│       │   ├── logo.jpg             # Logo alternatif
│       │   └── logo.svg             # Logo vectoriel (recommandé)
│       ├── poster-fantaisies.jpg    # Vignette affiche — fallback vidéo
│       ├── poster-petitchap.jpg
│       ├── poster-raiponce.jpg
│       ├── poster-noel.jpg
│       ├── poster-reves-bois.jpg
│       ├── poster-peter-pan.jpg
│       └── photos/                  # Photos de scène (Cassiopeia Photographie)
│           ├── fantaisies/          fantaisies-01.png … fantaisies-06.png
│           ├── petitchap/           chap-01.png … chap-06.png
│           ├── raiponce/            raiponce-01.png … raiponce-06.png
│           ├── noel/                silver-01.png … silver-06.png
│           ├── bois-dormant/        bois-dormant-01.png … bois-dormant-06.png
│           └── peter-pan/           peter-pan-01.png … peter-pan-06.png
├── assets/
│   └── videos/
│       ├── animes/                  # Vidéos d'affiches animées (boucle muette)
│       │   ├── fantaisies.mp4
│       │   ├── petitchap.mp4
│       │   ├── raiponce.mp4
│       │   ├── noel.mp4
│       │   ├── bois-dormant.mp4
│       │   └── peter-pan.mp4
│       └── teasers/                 # Teasers lus dans la modale
│           ├── teaser-fantaisies.mp4
│           └── teaser-petitchap.mp4
└── README.md
```

---

## Ce qui a été amélioré / corrigé

### Structure & chemins
- ✅ Tous les fichiers déplacés dans `assets/css/`, `assets/js/`, `assets/img/`, `assets/videos/`
- ✅ Plus aucun logo ni image encodé en base64 dans le HTML
- ✅ Le favicon pointe vers `assets/img/logo/logo.png`

### Logo dans un cercle blanc
- ✅ Dans la navigation : logo `assets/img/logo/logo.png` dans un cercle blanc `50×50 px`
- ✅ Dans le hero : logo dans un grand cercle blanc `240×240 px` avec animation `bob`
- ✅ Fallback texte `A&F` affiché si le fichier logo est absent

### Photos sous chaque spectacle (sans popup)
- ✅ Section `.show-photos` directement sous la description de chaque spectacle
- ✅ Grille 3 colonnes responsive (2 colonnes sur mobile)
- ✅ `loading="lazy"` et attribut `alt` sur toutes les photos
- ✅ Crédit Cassiopeia Photographie affiché sous chaque galerie

### Newsletter
- ✅ Conservée à l'identique (formulaire email + bouton S'inscrire + message de confirmation)
- ✅ Balise `<label>` associée au champ (accessibilité)
- ✅ `aria-live="polite"` sur le message de succès

### Modal simplifié
- ✅ La modale ne sert plus qu'à lire le teaser vidéo (onglets supprimés)
- ✅ Fallback Facebook si le teaser n'est pas disponible
- ✅ Fermeture par Escape, clic sur le fond, ou bouton ✕
- ✅ `hidden` HTML natif (plus de classe `.open` + `display:none`)

### Avis en carrousel
- ✅ Défilement automatique CSS (`@keyframes scroll-r`) avec pause au survol
- ✅ Boutons ← → pour navigation manuelle (reprise auto après 4 s)
- ✅ Utilisation de `<blockquote>` + `<cite>` pour la sémantique

### Accessibilité
- ✅ Balises sémantiques : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`
- ✅ `role`, `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls`, `aria-modal`, `aria-haspopup`
- ✅ `aria-hidden="true"` sur les éléments purement décoratifs
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Burger menu : `aria-expanded` synchronisé + fermeture Escape
- ✅ `prefers-reduced-motion` : toutes les animations désactivées si souhaité
- ✅ Lien « skip to content » possible à ajouter si besoin

### SEO
- ✅ `<meta name="description">` et `keywords` enrichis
- ✅ Open Graph complet (og:title, og:description, og:image, og:url)
- ✅ `<h3>` sur les titres de spectacles (hiérarchie correcte)
- ✅ Favicon SVG + PNG

---

## Mise en ligne sur GitHub Pages

1. Uploader ce dossier complet dans le dépôt GitHub
2. `Settings → Pages → Source : main branch / root`
3. URL : `https://sylvain13bdr.github.io/artefact-cie-magie/`

### Avec domaine personnalisé
1. Acheter un domaine sur OVH/Gandi (~10 €/an)
2. `Settings → Pages → Custom domain`
3. DNS chez le registrar : A → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153

---

## Ajouter un teaser YouTube

Dans `index.html`, remplacer l'appel `openTeaser(...)` par une URL YouTube :
```html
onclick="openTeaser('https://www.youtube.com/embed/VOTRE_ID?autoplay=1','Titre du spectacle')"
```

Dans `assets/js/main.js`, modifier `openTeaser` pour détecter YouTube et créer un `<iframe>` :
```js
if (src && src.includes('youtube')) {
  var iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.allow = 'autoplay; fullscreen';
  iframe.style.cssText = 'width:100%;aspect-ratio:16/9;border:none;border-radius:12px';
  modalContent.appendChild(iframe);
}
```

---

## Crédits photos
Cassiopeia Photographie
