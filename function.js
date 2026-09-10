import { trips, tickets, annuleTicktesArr } from "./data.js";
import createPrompt from "prompt-sync";
const prompt = createPrompt();

function menuPrincipla() {

    console.log(`
                               o o o o o o o . . .   ______________________________ _____=======_||____
                              o      _____           ||                            | |                 |
                            .][__n_n_|DD[  ====_____  |                            | |                 |
                           >(________|__|_[_________]_|____________________________|_|_________________|
                           _/oo OOOOO oo/    ooo    ooo  'o!o!o                  o!o!o  'o!o         o!o
                            -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

================================= 
         RAILWAY MANAGER 
================================= 
   1. Afficher les trajets 
   2. Acheter un ticket 
   3. Afficher les tickets 
   4. Annuler un ticket 
   5. Rechercher un ticket 
   6. Filtrer les trajets 
   7. Trier les trajets
   8. Statistiques 
   0. Quitter
    `)
}
function afficherLesTrajets() {
    console.log(`=== TRAJETS DISPONIBLES ===`)
    trips.forEach(trip => {
        console.log(`#${trip.id} ${trip.departure} → ${trip.destination} 
Départ : ${trip.departureTime} 
Arrivée : ${trip.arrivalTime} 
Prix : ${trip.price} DH 
Places disponibles : ${trip.availableSeats}
`);
    });
}
function acheteUnTicket() {
    const ticket = {
        id: tickets.length + 1
    }
    const nomDePassage = prompt("Nom du passager : ");
    const IdentifiDuTrajet = Number(prompt("Identifiant du trajet :"));
    const voyagesDisponible = trips.find(trip => trip.id === IdentifiDuTrajet
    )
    if (isNaN(IdentifiDuTrajet)) {
        console.log(`Enter a valid number!`)
    } else if (!voyagesDisponible) {
        console.log(`Trajet introuvable.`)
    } else if (voyagesDisponible.availableSeats === 0) {
        console.log(`Train complet.`)
    } else {
        const indexOfTicketAnnule = annuleTicktesArr.findIndex(tickt => tickt.tripId === IdentifiDuTrajet);

        voyagesDisponible.availableSeats -= 1;
        ticket.passengerName = nomDePassage;
        ticket.tripId = IdentifiDuTrajet;

        if (indexOfTicketAnnule !== -1) {
            ticket.seatNumber = annuleTicktesArr[indexOfTicketAnnule].seatNumber
            annuleTicktesArr.splice(indexOfTicketAnnule, 1)
        } else {
            ticket.seatNumber = 50 - voyagesDisponible.availableSeats
        }

        ticket.price = voyagesDisponible.price
        tickets.push(ticket);

        console.log(`Ticket acheté avec succès.      
Ticket #${ticket.id} 
Passager : ${ticket.passengerName} 
Trajet : ${voyagesDisponible.departure} → ${voyagesDisponible.destination} 
Place : ${ticket.seatNumber} 
Prix : ${ticket.price} DH`)
    }
}
function afficherLesTicket() {

    if (tickets.length === 0) {
        console.log(`Aucun ticket enregistré.`)
    } else {
        console.log("=== TICKETS ===")
        tickets.forEach(ticket => {
            const voyagesDisponible = trips.find(trip => trip.id === ticket.tripId
            )
            console.log(`Ticket #${ticket.id} 
Passager : ${ticket.passengerName} 
Trajet : ${voyagesDisponible.departure} → ${voyagesDisponible.destination} 
Place : ${ticket.seatNumber} 
Prix : ${ticket.price} DH 
`)
        })
    }

}
function annulerUnTicket() {
    const ticketId = Number(prompt("Identifiant du ticket : "));
    const ticketAnnule = tickets.find(ticket => ticket.id === ticketId);
    if (ticketAnnule) {
        const indexTicket = tickets.findIndex(ticket => ticket.id === ticketId);
        const ticketAnnule = tickets.find(ticket =>
            ticket.id === ticketId
        );
        annuleTicktesArr.push(ticketAnnule);
        const trajetDeTicketAnnule = trips.find(trip => trip.id === ticketAnnule.tripId);
        trajetDeTicketAnnule.availableSeats += 1;
        tickets.splice(indexTicket, 1);
        console.log("Ticket annulé avec succès. ")
    } else {
        console.log("Ticket introuvable. ")
    }

}
function rechercherUnTicket() {
    const nomRecherche = prompt("Nom du passager : ").toLocaleLowerCase();
    console.log(`// Le programme affiche tous les tickets appartenant à ${nomRecherche}.`)
    const filtredTickets = tickets.filter(ticket => {
        return ticket.passengerName === nomRecherche
    })
    if (filtredTickets.length !== 0) {
        filtredTickets.forEach(ticket => {
            console.log(`Ticket #${ticket.id} 
Passager : ${ticket.passengerName}
Trajet : ${ticket.departure} → ${ticket.destination} 
Place : ${ticket.seatNumber} 
Prix : ${ticket.price} DH`)
        })
    } else {
        console.log(`\"Le nom que vous avez saisi ne correspond à aucun billet.\"`)
    }

}
function filterLesTrajects() {
    const villeDeDepart = prompt("Ville de départ : ").toLocaleLowerCase();
    const filterdArrByDepart = trips.filter(trip => {
        return trip.departure.toLocaleLowerCase() === villeDeDepart
    })
    filterdArrByDepart.forEach(trip => {
        console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`)
    })

}
function trierLesTrajets() {
    let swap;
    for (let i = 1; i < trips.length; i++) {
        swap = false;
        for (let j = 0; j < trips.length - i; j++) {
            if (trips[j].price > trips[j + 1].price) {
                [trips[j], trips[j + 1]] = [trips[j + 1], trips[j]]
                swap = true
            }
        }
        if (!swap) {
            break;
        }
    }
    trips.forEach(trip => {
        console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`);
    })

}
function nombreTotalDeTicketsVendus() {
    console.log(`Nombre total de tickets vendus 

Nombre total de tickets : ${tickets.length} `)
}
function laSommeDesPrixDesTickets() {
    let total = 0;
    tickets.forEach(ticket => {
        total += ticket.price;
    })
    console.log(`Chiffre d'affaires total 

Chiffre d'affaires total : ${total} DH`)
}
function laSommeDeTrajetLePlusVendu() {
    let lowestNumOfSeat = trips[0].availableSeats
    let highestDestinsation = trips[0];
    for (let trip = 0; trip < trips.length; trip++) {
        if (trips[trip].availableSeats < lowestNumOfSeat) {
            highestDestinsation = trips[trip];
        }
    }
    console.log(`Trajet le plus vendu : 

${highestDestinsation.departure} → ${highestDestinsation.destination} 
${50 - highestDestinsation.availableSeats} tickets vendus`);

}
function statistiques() {
    nombreTotalDeTicketsVendus();
    laSommeDesPrixDesTickets();
    laSommeDeTrajetLePlusVendu();

}
export { menuPrincipla, afficherLesTicket, acheteUnTicket, annulerUnTicket, rechercherUnTicket, filterLesTrajects, trierLesTrajets, nombreTotalDeTicketsVendus, laSommeDeTrajetLePlusVendu, laSommeDesPrixDesTickets, afficherLesTrajets, statistiques }
