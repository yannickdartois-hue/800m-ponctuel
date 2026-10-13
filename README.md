# 800m Ponctuel — Outil de notation EPS

Outil offline en fichier HTML unique pour noter l'épreuve **800m ponctuel** au BAC G&T, BAC PRO et CAP, selon les barèmes officiels du Livret Jury — Académie de Montpellier, session 2026.

Conçu pour être utilisé **en direct sur mobile**, sur le terrain, sans connexion réseau.

---

## Fonctionnalités

- **Trois examens** supportés : BAC G&T, BAC PRO, CAP — avec barèmes distincts
- **Notation complète** sur 20 points :
  - Performance /10 (BGT) ou /8 (BCP/CAP)
  - Allure régulière /4 (BGT) ou /6 (BCP/CAP)
  - Échauffement /3
  - Estimation de la performance /3
- **Mode Course** : chrono flottant avec boutons ▶ Démarrer / ⏹ Arrêt, enregistrement du passage 400m et du temps final par élève, couleur unique par élève pour éviter les confusions
- **Affichage de l'écart** entre le temps estimé et le temps réalisé, en secondes, avec la note correspondante
- **Saisie mobile** : gestion des apostrophes typographiques iOS (U+2019), formats `3:30`, `3'30`, `3.30`
- **Persistance locale** : données sauvegardées dans `localStorage`, aucun serveur nécessaire
- **Mode sombre** supporté
- **Import/export** des données élèves
- Sélection automatique du type d'examen à l'ouverture

---

## Utilisation

1. Ouvrir `ponctuel800m.html` dans un navigateur (Chrome, Safari Mobile, Firefox)
2. Sélectionner le type d'examen et le sexe dans la modale d'ouverture
3. Saisir les élèves dans l'onglet **Terrain**
4. Lancer le **Mode Course** pour le chrono en direct
5. Consulter les notes calculées dans l'onglet **Résultats**

> Aucune installation, aucun serveur, aucune connexion requise. Le fichier fonctionne directement depuis le bureau ou une clé USB.

---

## Barèmes

### Estimation de la performance (écart temps estimé / temps réalisé)

| Écart | BAC G&T | BAC PRO / CAP |
|-------|---------|---------------|
| ≤ 3 s (GT) / ≤ 2 s (Pro) | 3 pts | 3 pts |
| 3 s | — | 2,75 pts |
| ≤ 4 s | 2,25 pts | — |
| … | … | … |
| > 12 s / > 14 s | 0 pt | 0 pt |

*Barèmes complets dans le Livret Jury officiel — Académie de Montpellier, session 2026.*

---

## Historique des versions

| Version | Changements |
|---------|-------------|
| v6 | Modale type d'examen à l'ouverture automatique |
| v5 | Couleur unique par carte en mode course |
| v4 | Chrono start/stop en mode course, affichage écart estimation |
| v3 | Barème estimation BCP/CAP selon livret jury officiel |
| v2 | Correction `notePerf()` (traversée inverse du tableau de paliers) |
| v1 | Version initiale |

---

## Bugs corrigés notables

- **`notePerf()` — direction de parcours** : la table de paliers est triée du moins bon vers le meilleur ; le parcours forward renvoyait toujours le score minimum. Corrigé en parcours inverse.
- **`str2s()` — apostrophe iOS** : le clavier iOS insère U+2019 (apostrophe typographique) au lieu de U+0027. `parseInt("4'27")` retournait 4. Corrigé par normalisation Unicode.
- **Mode course — chevauchement** : règle CSS `padding-top` dupliquée écrasait la valeur correcte. Corrigé à 120px.

---

## Auteur

Yannick Dartois — Professeur d'EPS  
Lycée Polyvalent Georges Pompidou, Castelnau-le-Lez (Académie de Montpellier)

---

## Licence

Usage pédagogique libre. Aucune garantie. Les barèmes sont ceux du Livret Jury officiel de l'Académie de Montpellier — vérifier leur validité à chaque nouvelle session d'examen.
