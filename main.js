import { menuPrincipla, afficherLesTicket, acheteUnTicket, annulerUnTicket, rechercherUnTicket, filterLesTrajects, trierLesTrajets, afficherLesTrajets, statistiques } from "./function.js"
import createPrompt from "prompt-sync";
const prompt = createPrompt();
let runningProgramme = true
while (runningProgramme) {
    menuPrincipla();
    const choix = Number(prompt(`Votre choix : 
        `));
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
            break;
        case 6:
            filterLesTrajects();
            break;
        case 7:
            trierLesTrajets();
            break;
        case 0:
            runningProgramme = false
            break;
        case 8:
            statistiques();
            break;
        default:
            console.log("Saisissez un numéro valide du menu");
            break;
    }

}