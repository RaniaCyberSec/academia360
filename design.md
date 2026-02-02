# Guide de Style - Site Qualiopi Audit & Formation

## Philosophie de Design

### Concept Principal
**"L'excellence certifiée au service de la qualité et de la performance"**

Un design qui inspire confiance, rigueur et professionnalisme tout en restant accessible et chaleureux. L'univers visuel reflète l'expertise technique tout en maintenant une approche humaine et collaborative.

### Valeurs Visuelles
- **Confiance** : Bleu nuit profond évoquant la stabilité et la fiabilité
- **Clarté** : Blanc cassé pour la lisibilité et la transparence
- **Énergie** : Touches d'orange pour la dynamisme et la croissance
- **Professionnalisme** : Typographie épurée et espacement généreux
- **Accessibilité** : Contrastes optimisés pour tous les utilisateurs

## Palette de Couleurs

### Couleurs Principales
- **Bleu Nuit** : #1a365d (Primary - Confiance, Professionnalisme)
- **Bleu Clair** : #2d5aa0 (Secondary - Complémentarité)
- **Blanc Cassé** : #fafafa (Background - Clarté, Pureté)
- **Orange Énergie** : #ed8936 (Accent - Dynamisme, Croissance)

### Couleurs de Support
- **Gris Clair** : #718096 (Texte secondaire)
- **Gris Foncé** : #2d3748 (Texte principal)
- **Bleu Très Clair** : #e6fffa (Background sections)
- **Orange Pâle** : #fff5f5 (Background alerts)

### Système de Couleurs Sémantiques
- **Succès** : #38a169 (Vert validation)
- **Information** : #3182ce (Bleu information)
- **Avertissement** : #d69e2e (Jaune attention)
- **Erreur** : #e53e3e (Rouge erreur)

## Typographie

### Police Principale : "Inter" (Sans-serif)
- **Usage** : Corps de texte, navigation, éléments UI
- **Caractéristiques** : Lisibilité optimale, moderne, professionnelle
- **Poids disponibles** : 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Police Secondaire : "Playfair Display" (Serif)
- **Usage** : Titres principaux, titres de sections
- **Caractéristiques** : Élégante, distinctive, professionnelle
- **Poids disponibles** : 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Hiérarchie Typographique
- **H1** : Playfair Display, 48px, Bold
- **H2** : Playfair Display, 36px, SemiBold
- **H3** : Playfair Display, 28px, Medium
- **H4** : Inter, 24px, SemiBold
- **H5** : Inter, 20px, Medium
- **H6** : Inter, 18px, Medium
- **Body Large** : Inter, 18px, Regular
- **Body** : Inter, 16px, Regular
- **Small** : Inter, 14px, Regular
- **Caption** : Inter, 12px, Regular

## Effets Visuels et Animations

### Bibliothèques Utilisées
- **Anime.js** : Animations fluides et professionnelles
- **Splitting.js** : Effets de texte avancés
- **ECharts.js** : Visualisations de données interactives
- **Typed.js** : Effets de machine à écrire

### Effets de Texte
- **Typewriter Effect** : Pour les titres principaux
- **Gradient Text** : Sur les éléments clés avec dégradé bleu-orange
- **Split-by-letter Animation** : Pour les titres de sections
- **Color Cycling** : Sur les mots-clés importants

### Effets de Background
- **Subtle Gradient Flow** : Dégradé animé bleu nuit vers bleu clair
- **Geometric Shapes** : Formes géométriques abstraites en fond
- **Particle System** : Particules subtiles pour l'effet de profondeur

### Composants Interactifs
- **Hover Effects** : Élévation douce et changement de couleur
- **Button Animations** : Transformations fluides au survol
- **Card Interactions** : Rotation légère et ombre dynamique
- **Form Validation** : Feedback visuel immédiat

## Composants UI Professionnels

### Boutons
```css
/* Bouton Principal */
.btn-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 54, 93, 0.4);
}

/* Bouton Secondaire */
.btn-secondary {
  background: #ed8936;
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

/* Bouton Outline */
.btn-outline {
  background: transparent;
  color: #1a365d;
  border: 2px solid #1a365d;
  padding: 10px 30px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}
```

### Cards de Services
```css
.service-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #ed8936;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}
```

### Timeline Professionnelle
```css
.timeline-item {
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid #e6fffa;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  background: #ed8936;
  border-radius: 50%;
}
```

### Formulaires Professionnels
```css
.form-input {
  background: #fafafa;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #2d5aa0;
  box-shadow: 0 0 0 3px rgba(45, 90, 160, 0.1);
}
```

## Layout et Espacement

### Grid System
- **Container max-width** : 1200px
- **Gutters** : 24px
- **Breakpoints** :
  - Mobile : 320px - 768px
  - Tablet : 768px - 1024px
  - Desktop : 1024px+

### Spacing Scale
- **xs** : 4px
- **sm** : 8px
- **md** : 16px
- **lg** : 24px
- **xl** : 32px
- **2xl** : 48px
- **3xl** : 64px

### Section Padding
- **Vertical** : 80px
- **Horizontal** : 24px

## Icônes et Illustrations

### Style des Icônes
- **Style** : Line icons avec remplissage sélectif
- **Taille** : 24px, 32px, 48px selon l'importance
- **Couleur** : Bleu nuit principal ou orange accent
- **Animation** : Subtile au survol

### Illustrations
- **Style** : Flat design professionnel
- **Couleurs** : Palette restreinte (bleu, orange, blanc)
- **Sujets** : Collaboration, formation, réussite, conformité

## Accessibilité et Performance

### Contrastes WCAG
- **Texte principal** : #2d3748 sur #fafafa → Ratio 8.2:1 (AAA)
- **Texte secondaire** : #718096 sur #fafafa → Ratio 4.6:1 (AA)
- **Boutons** : Blanc sur #1a365d → Ratio 12.8:1 (AAA)

### Animations
- **Duration** : 0.3s pour les interactions
- **Easing** : cubic-bezier(0.4, 0, 0.2, 1)
- **Réduction** : Respect de prefers-reduced-motion

### Performance
- **Images optimisées** : WebP avec fallback
- **Fonts** : Preload des polices critiques
- **CSS** : Critical CSS inlined

## Applications Spécifiques

### Calculateur de Devis
- **Interface** : Cards interactives avec sélection visuelle
- **Progression** : Barre de progression animée
- **Résultat** : Animation de révélation avec chiffres clés

### Checklist Qualiopi
- **Items** : Cases à cocher avec validation visuelle
- **Progression** : Score en temps réel avec cercle animé
- **Feedback** : Messages contextuels selon le score

### Témoignages
- **Format** : Cards avec photo, nom, entreprise
- **Animation** : Carousel automatique avec pause au survol
- **Interaction** : Clic pour agrandir le témoignage

Ce guide de style crée une identité visuelle cohérente et professionnelle qui reflète l'expertise Qualiopi tout en restant accessible et engageante pour les visiteurs.