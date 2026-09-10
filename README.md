# Projet-Fin-SAS-1-Youcode-Gestion-d-un-train-en-console-Railway-Manager-
# 🚆 Railway Manager

Application console (Node.js) de gestion d'un système ferroviaire : consultation des trajets, achat/annulation de tickets, recherche, filtrage, tri et statistiques de vente.

Projet réalisé dans le cadre du **SAS 1 – Youcode**.

## ✨ Fonctionnalités

Le menu principal propose les options suivantes :

| # | Fonctionnalité | Description |
|---|-----------------|--------------|
| 1 | Afficher les trajets | Liste tous les trajets disponibles (départ, arrivée, horaires, prix, places restantes) |
| 2 | Acheter un ticket | Réserve une place sur un trajet pour un passager |
| 3 | Afficher les tickets | Liste tous les tickets vendus |
| 4 | Annuler un ticket | Annule un ticket existant et libère la place |
| 5 | Rechercher un ticket | Recherche les tickets par nom de passager |
| 6 | Filtrer les trajets | Filtre les trajets par ville de départ |
| 7 | Trier les trajets | Trie les trajets par prix (tri à bulles) |
| 8 | Statistiques | Affiche le nombre de tickets vendus, le chiffre d'affaires et le trajet le plus vendu |
| 0 | Quitter | Ferme l'application |

## 🛠️ Technologies

- **Node.js** (modules ES — `import` / `export`)
- [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) pour la saisie utilisateur en console

## 📁 Structure du projet

```
.
├── data.js        # Données (trajets, tickets, tickets annulés)
├── function.js    # Logique métier (menu, achat, annulation, recherche, tri, statistiques)
├── index.js       # Point d'entrée / boucle principale du programme
└── package.json
```

## 🚀 Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/whoknowsl/Projet-Fin-SAS-1-Youcode-Gestion-d-un-train-en-console-Railway-Manager-.git
   cd Projet-Fin-SAS-1-Youcode-Gestion-d-un-train-en-console-Railway-Manager-
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer l'application :
   ```bash
   node index.js
   ```

## 🧑‍💻 Utilisation

Une fois lancée, l'application affiche le menu principal dans le terminal. Il suffit de saisir le numéro correspondant à l'action souhaitée puis de suivre les invites (nom du passager, identifiant du trajet, identifiant du ticket, etc.).

**Exemple d'achat de ticket :**
```
Nom du passager : Ali Bensaid
Identifiant du trajet : 2

Ticket acheté avec succès.
Ticket #1
Passager : Ali Bensaid
Trajet : Casablanca → Marrakech
Place : 12
Prix : 150 DH
```

## 📌 Données

Chaque **trajet** possède :
- `id`, `departure`, `destination`, `departureTime`, `arrivalTime`, `price`, `availableSeats`

Chaque **ticket** possède :
- `id`, `passengerName`, `tripId`, `seatNumber`, `price`

Les tickets annulés sont conservés dans un tableau séparé (`annuleTicktesArr`) afin de pouvoir réattribuer un numéro de place libéré au prochain acheteur.

## ⚠️ Limitations connues

- La recherche de ticket par nom (`rechercherUnTicket`) est sensible à la casse de stockage des noms.
- La fonction de trajet le plus vendu compare les places disponibles mais ne met pas à jour correctement la valeur de référence dans la boucle.
- Aucune persistance des données : tout est réinitialisé à chaque redémarrage du programme (stockage en mémoire uniquement).

## 👤 Auteur

Projet réalisé par [whoknowsl](https://github.com/whoknowsl) dans le cadre de la formation Youcode.

## 📄 Licence

Ce projet est un travail académique, libre d'utilisation à des fins pédagogiques.