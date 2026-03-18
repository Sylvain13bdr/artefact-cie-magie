# 📝 Guide : Mettre à jour les avis spectateurs

## Où trouver de nouveaux avis ?

- **Billet Réduc** : https://www.billetreduc.com/search/?q=art+fact+compagnie
- **Facebook** : https://www.facebook.com/artetfactcie/ → onglet "Avis"
- **Directement** : les retours reçus par email ou message privé

---

## Comment ajouter un avis dans le site ?

### 1. Ouvrir le fichier `js/main.js`

Avec n'importe quel éditeur de texte (Bloc-notes, Notepad++, VS Code…)

### 2. Trouver la section des avis

Chercher (Ctrl+F) le texte :
```
id="carousel-track"
```

Juste en dessous, vous verrez des blocs comme celui-ci :
```javascript
<div class="rc">
  <div class="rc-stars">★★★★★</div>
  <p class="rc-text">Le texte de l\'avis ici.</p>
  <div>
    <div class="rc-author">Prénom N.</div>
    <div class="rc-show">Nom du spectacle</div>
  </div>
</div>
```

### 3. Copier ce bloc et modifier le contenu

Par exemple pour ajouter un nouvel avis :
```javascript
<div class="rc">
  <div class="rc-stars">★★★★★</div>
  <p class="rc-text">Mon enfant a adoré Peter Pan ! Un spectacle féerique, 
  des costumes magnifiques, on en redemande !</p>
  <div>
    <div class="rc-author">Sophie M.</div>
    <div class="rc-show">Peter Pan · Billet Réduc</div>
  </div>
</div>
```

### 4. ⚠️ Important : dupliquer dans les 2 séries

Le carrousel contient **2 fois** la liste des avis (pour la boucle infinie).
Il faut donc ajouter le nouvel avis **aux deux endroits**.

Chercher le commentaire :
```
<!-- Duplicate for loop -->
```
Et coller le même bloc juste après.

### 5. Sauvegarder et déposer sur GitHub

Glisser-déposer le `main.js` modifié sur GitHub → le site se met à jour 
automatiquement en quelques secondes.

---

## Règles des étoiles

| Note     | Étoiles HTML          |
|----------|-----------------------|
| 5 étoiles | `★★★★★`             |
| 4 étoiles | `★★★★☆`             |
| 3 étoiles | `★★★☆☆`             |

---

## Supprimer un avis

Supprimer le bloc `<div class="rc">...</div>` correspondant.
Ne pas oublier de le supprimer dans les **2 séries**.

---

## Astuce : demander des avis après chaque spectacle

Créer un message type à envoyer aux salles de spectacle partenaires :

> *"Si vous avez apprécié notre spectacle, un petit avis sur Billet Réduc  
> nous aide beaucoup ! Merci 🙏*  
> → [lien vers la page du spectacle sur Billet Réduc]"

Ou afficher un QR code à la sortie qui pointe directement vers la page 
de réservation Billet Réduc du spectacle — les gens peuvent laisser un avis 
une fois rentrés chez eux.

---

## Résumé en 3 étapes

1. 📋 Copier un bel avis depuis Billet Réduc ou Facebook
2. ✏️ Le coller dans `main.js` (aux 2 endroits)
3. ⬆️ Uploader `main.js` sur GitHub → site mis à jour !

**Temps estimé : 5 minutes** 🎭
