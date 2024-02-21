//  la fonction pour les prédictions alleatoires
function my_alert() { 
var text =
["Ayez confiance en vous !",
"Vous êtes capables de réaliser de grandes choses !",
"Ne vous éloignez pas des gens qui comptent pour vous !",
"Vous allez avoir beaucoup de chance !",
"Vous allez avoir une bonne nouvelle !",
"Sortez de votre zone de confort !",
"Allez au bout de vos projets !",
"Souriez,une belle vie vous attend !",
"Quelques soient vos problèmes, vous trouverez des solutions !",
"Ne vous laissez pas influencer par le regard des gens !",
"Il est temps de faire un travail sur vous-même !",
"Une défaite ne veut pas dire qu'il faut abandonner !",
"Le temps guérira vos blessures au fur et à mesure !",
"Ne perdez pas de temps, quand on veut : on peut !",
"Rien de grand ne peut s'accomplir sans passions !",
"L'échec est l'épice qui donne sa saveur au succès !",
"Pensez à vous, aimez vous, avant de vouloir le bien d'autrui !",
"Votre bonheur est beacoup plus important que celui des autres !",
"Vous êtes une très bonne personne, donc vous méritez une belle vie !",
"Ne désesperez pas, le grand amour viendra !",
"Ne vous en faites pas, le mal revient à celui qui vous en fait !",
"Rstez positif, un monde meilleur vous attend !",
"Vous obtiendrez votre diplôme haut la main !",
"Vous serez bientôt embauché quelque part !",
"Vous aurez de super bonnes notes cette année !",
"Il serait temps de vous focaliser sur vous même !",
"La chance vous sourira dans les jours à venir !",
"Quelqu'un dans votre entourage vous aime en secret !", 
"N'abandonnez pas, votre entourage croit en vous !", 
"Vous êtes très bien comme vous êtes, ne changez pas !", 
"N'ayez pas peur d'aller à l'aventure !", 
"Vous valez mieux que ça, ne tombez pas dans ce piège !",
"Ne vous renfermez pas sur vous même, communiquer est la clé de la solution !",
"Entourez vous de bonnes personnes !",
"La vie est faite d'embûches, il faut les contourner !"];
min = 0;
max = text.length-1;
out = Math.floor(Math.random()*(max-min+1))+min;
document.getElementById("text").innerHTML = text[out];
} 

