import { menuPrincipla, afficherLesTicket, acheteUnTicket, annulerUnTicket, rechercherUnTicket, filterLesTrajects, trierLesTrajets, nombreTotalDeTicketsVendus, laSommeDeTrajetLePlusVendu, laSommeDesPrixDesTickets, afficherLesTrajets, statistiques } from "./function.js"
import createPrompt from "prompt-sync";
const prompt = createPrompt();
let runningProgramme = true
while (runningProgramme) {
    menuPrincipla();
    const choix = Number(prompt("Votre choix : "));
    switch (choix) {
        case 1:
            afficherLesTrajets();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 2:
            acheteUnTicket();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 3:
            afficherLesTicket();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 4:
            annulerUnTicket();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 5:
            rechercherUnTicket();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 6:
            filterLesTrajects();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 7:
            trierLesTrajets();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;
        case 0:
            runningProgramme = false
            break;
        case 8:
            statistiques();
            prompt("Appuyez sur n'importe quelle touche pour continuer ou pour revenir au menu.");
            break;

        default:
            console.log("Saisissez un numéro valide du menu");
            break;
    }

}