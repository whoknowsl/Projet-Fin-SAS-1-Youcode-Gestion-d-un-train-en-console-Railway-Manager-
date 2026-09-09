const prompt = require("prompt-sync")();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [{
    id: 1, nomDePassage: "ahmed", tripId: 3, seatNumber: 1, price: 90
}];
function menuPrincipla() {
    console.log(`================================= 
RAILWAY MANAGER 
================================= 
1. Afficher les trajets 
2. Acheter un ticket 
3. Afficher les tickets 
4. Annuler un ticket 
5. Rechercher un ticket 
6. Filtrer les trajets 
7. Trier les trajets 
0. Quitter 
Votre choix :`)
}
function afficherLesTrajets() {
    console.log("=== TRAJETS DISPONIBLES === ")
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
        id: tickets.length > 0 ? tickets[tickets.length - 1].id + 1 : 1
    }
    const nomDePassage = prompt("Nom du passager : ");
    const IdentifiDuTrajet = Number(prompt("Identifiant du trajet :"));
    const voyagesDisponible = trips.find(trip => trip.id === IdentifiDuTrajet
    )
    if (voyagesDisponible.availableSeats > 0) {
        voyagesDisponible.availableSeats -= 1;
        ticket.passengerName = nomDePassage;
        ticket.tripId = IdentifiDuTrajet;
        ticket.seatNumber = 50 - voyagesDisponible.availableSeats
        ticket.price = voyagesDisponible.price
        ticket.departure = voyagesDisponible.departure
        ticket.destination = voyagesDisponible.destination
        tickets.push(ticket);
    } else if (voyagesDisponible.availableSeats === 0) {
        console.log("Train complet.")
    }
    else {
        console.log("Trajet introuvable.")
    }
    console.log(`Ticket acheté avec succès. 

Ticket #${ticket.id} 
Passager : ${ticket.passengerName} 
Trajet : ${ticket.departure} → ${ticket.destination} 
Place : ${ticket.seatNumber} 
Prix : ${ticket.price} DH`)

}
acheteUnTicket()
acheteUnTicket()
acheteUnTicket()
function afficherLesTicket() {
    console.log("=== TICKETS ===")
    tickets.forEach(ticket => {
        console.log(`Ticket #${ticket.id} 
Passager : ${ticket.passengerName} 
Trajet : ${ticket.departure} → ${ticket.destination} 
Place : ${ticket.seatNumber} 
Prix : ${ticket.price} DH 
`)
    })
}
function annulerUnTicket() {
    const ticketId = Number(prompt("Identifiant du ticket : "));
    const ticketAnnule = tickets.find(ticket => ticket.id === ticketId);
    if (ticketAnnule) {
        const indexTicket = tickets.findIndex(ticket => ticket.id === ticketId);
        const trajetDeTicketAnnule = trips.find(trip => trip.id === ticketAnnule.tripId)
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
    filtredTickets.forEach(ticket => {
        console.log(`Ticket #${ticket.id} 
Passager : ${ticket.passengerName}
Trajet : ${ticket.departure} → ${ticket.destination} 
Place : ${ticket.seatNumber} 
Prix : ${ticket.price} DH`)
    })
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
function NombreTotalDeTicketsVendus() {
    console.log(`Nombre total de tickets vendus 
Nombre total de tickets : ${tickets.length} `)
}
function laSommeDesPrixDesTickets() {
    let total = 0;
    tickets.forEach(ticket => {
        total += ticket.price;
    })
    console.log(`Chiffre d'affaires total 
Calculer la somme des prix des tickets. 
Chiffre d'affaires total : ${total} DH`)
}
function laSommeDeTrajetLePlusVendu() {
    let highestCount = 0;
    let map = {};
    tickets.forEach(ticket => {
        if (ticket.tripId in map) {
            map[ticket.tripId] += 1
        } else {
            map[ticket.tripId] = 1
        }
    });

    for (const tripId in map) {
        if (map[tripId] > highestCount) {
            highestCount = Number(map[tripId]);
        }
    }
    const trip = trips.find(trip => trip.id === highestCount);
    console.log(trip.departure)

}