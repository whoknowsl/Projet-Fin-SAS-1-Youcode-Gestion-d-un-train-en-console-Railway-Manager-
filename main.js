import { menuPrincipla, afficherLesTicket, acheteUnTicket, annulerUnTicket, rechercherUnTicket, filterLesTrajects, trierLesTrajets, NombreTotalDeTicketsVendus, laSommeDeTrajetLePlusVendu, laSommeDesPrixDesTickets, afficherLesTrajets } from "./function.js"
import createPrompt from "prompt-sync";
const prompt = createPrompt();
let runningProgramme = true
while (runningProgramme) {
    menuPrincipla();
    let choix = Number(prompt("Votre choix : "));
    switch (choix) {
        case 1:
            afficherLesTrajets();
            break;
        case 2:
            acheteUnTicket();
            break;
        case 3:
            afficherLesTicket();
            break;
        case 4:
            annulerUnTicket();
            break;
        case 5:
            rechercherUnTicket();
        case 6:
            filterLesTrajects();
            break;
        case 7:
            trierLesTrajets();
        case 0:
            runningProgramme = false
            break;
        default:
            choix = Number(prompt("Saisissez un numéro valide du menu: "));
    }

}