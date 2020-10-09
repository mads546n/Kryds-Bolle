# Tic-Tac-Toe
3.g efterårs programmerings-projekt. Et fuldt funktionelt kryds-og-bolle-spil designet hovedsageligt med Javascript. 
Spildesignere: 
 - Mads Edvardsen.
 - Ian Reenberg.
 - Asger Dokkedal.
 
Projektbeskrivelse: 
Vi kan godt tænke os at designe et fuldt funktionelt spil Kryds-Og-Bolle vha. Javascript, HTML, P5 mm. 
Vi har et fælles repository, men vi designer hver især en version af spillet med hjælp fra hinanden, og vi uploader hver vores version på dette repository. 
Hvert Kryds-Og-Bolle-spil er designet anderledes end de andre, da hvert spil skal have originalitet og stå ud fra de andre. På denne måde får vi hver især mulighed for at kode. 

Kryds-Bolle skal fungere ligesom det typiske kryds-og-bolle-spil med et bræt, som består af 9 ens firkanter. Hver spillet tildeles et "symbol" eller "figur", som skal markere deres firkanter. I det oprindelige spil er dette et kryds og en bolle. 
Når man trykker på en firkant, så placeres symbolet, som spilleren har fået tildelt. Hver spiller markerer et felt på skift, indtil en vinder er udpeget. En vinder udpeges, når spillet er slut, og vinderen skal skrives i toppen af skærmen. Når spillet er færdiggjort, og en vinder er udpeget, så genstartes spillet ved at trykke på en genstart-knap. 
En evt. ekstra ide er, at spillet skal indeholde et "scoreboard", som viser antal runder, som hver spiller har vundet. 

Spillet skal designes vha. HTML, Javascript, P5 mm. 



LOGBOG: 

 - (28-09-2020) (Fælles)
Selve kodningsprocessen er ikke startet endnu, men vi har diskuteret frem og tilbage i gruppen, hvordan vi vil designe spillet overalt, og hvordan vi vil designe hvert vores individuelle spil, så det står ud fra de andre. Vi har lavet research og fundet inspiration til, hvordan og hvorledes vi kan designe spillet. Vi har fundet andre eksempler på kryds-og-bolle-spil, som er lavet med Javascript, da vores gerne selv skal kodes i Javascript. 
Vi har sørget for, at alle har fået godkendt adgang til repository, og vi har koblet vores repository til GitHub-desktop-appen. 

 - (30-09-2020) (Mads)
Kodningsprocessen er begyndt. Jeg har draget inspiration fra The Coding Train, og kodningsprocessen nærmer sig halvvejspunktet. Jeg har opstillet et kryds-og-bolle-bræt og felter, som alle kan udfyldes af enten et "X" eller et "O". Jeg har også opstilt 2 forskellige spillere, som skiftes mellem at spille spillet. Næste gang skal jeg lave knapper eller gøre det muligt for spillerne at trykke på et bestemt felt og indsætte deres valgte symbol: (X, O). Jeg skal også have lavet en funktion, som kan udpege vinderen, taberen og evt., hvis spillet er uafgjort. Jeg har uploadet mine filer: "index.html" og "sketch.js" lokalt vha. GitHub-desktop-appen og derefter uploadet filerne til GitHub-hjemmesiden. Jeg har også uploadet P5-libraries filerne individuelt, da det ikke var muligt at uploade dem samlet i en folder. Jeg har også ændret navnet for min individuelle version af spillet til "Tic-Tac-Toe" i stedet for "Kryds-Bolle", så det er nemmere at udpege fra de andre versioner. De andre medlemmer af gruppen ændrer også navnet på deres version. 
 
  - (02-10-2020) (Mads)
Kodningsprocessen fortsætter. Jeg har gjort fremskridt med koden i dag, og jeg har indført følgende: 
   En funktion som undersøger vinderen af runden, som består af et horisontalt og vertikalt tjek af brættet vha. if statements. 
   En funktion ("naestetur") som beskriver tilstanden og forholdene, som næste tur skal overholde. 
   En funktion ("mousepressed") som gør det muligt, at spillet spiller sig selv ved at klikke hvilket som helst sted på canvas med mouse-cursor. 
   To variabler ("nuvaerendespiller") og ("available") som beskriver den nuværende spiller i spillet og hvilke "ledige" felter, der er tilgængelige.
Næste gang skal jeg meget gerne have færdiggjort disse funktioner. Hvis der er tid nok, vil jeg gerne færdiggøre en automatiseret og selvstændig version af spillet, hvor jeg    næste gang igen vil gøre spillet interaktivt, så man enten spiller mod en AI eller en anden spiller.

 - (07-10-2020) (Mads)
Kodningsprocessen fortsætter endnu igen, og jeg har færdiggjort funktionerne fra sidste gang. Jeg har færdiggjort funktionen ("checkVinder") og har indført yderligere diagonale check af brættet. Jeg har også opstilt en ny funktion ("equal3"). Jeg har også indført en ny variabel ("result"), som skal bruges til at udpege en vinder af spillet. Spillet kan nu spille sig selv og udpege en vinder, eller om spillet er uafgjort. Næste gang vil jeg gerne gøre det muligt at se vinderen på selve canvas, når spillet er afsluttet i stedet for i consol. Jeg vil også gerne gøre det muligt for en spiller at spille mod en AI i stedet for, at spillet spiller mod sig selv, hvis der er afgivet nok tid til det. 

 - (09-10-2020) (Mads)
Kodningsprocessen er færdiggjort, og jeg har færdiggjort mit spil. Jeg har lavet mange ændringer i mit spil, så det nu er muligt at en menneskelig spiller kan spille mod en AI. Jeg har også lavet en "Genstart"-knap, som refresher browseren og genstarter spillet. Jeg har opstillet 2 variables ("ai") og ("human"), som er AI-spilleren og den menneskelige spiller. Variablen ("nuvaerendeSpiller") er angivet som ("human"), da det er den menneskelige spiller, der starter spillet. Jeg har også opstillet en variabel "ledigeFelter", som beskriver de ledige felter på brættet. Jeg har også indført en mousePressed-function, som gør det muligt at trykke på de forskellige felter og indsætte symbolet "O". Det er ikke lykkedes mig at vise vinderen på canvas vha. createP, men man kan se om spillet er uafgjort, "O" vinder, eller "X" vinder i consol. Jeg har også gjort variablerne "w" og "h" til global variables. 

# Endelig produktbeskrivelse af Tic-Tac-Toe (Mads) # 
Jeg har lavet et Tic-Tac-Toe-spil (Kryds og bolle). En menneskelig spiller kan spille spillet imod en AI, som vælger tilfældige felter. Den menneskelige spiller har symbolet "O", og AI-spilleren har symbolet "X". Man kan trykke i de forskellige felter og indsætte sit symbol. Man kan ikke indsætte sit symbol i et felt, som allerede er optaget af et andet symbol. Tic-Tac-Toe fungerer som det typiske kryds og bolle, og man vinder spillet ved at have 3 ens symboler på stribe. Der er 3 mulige resultater af 1 spil: "X" vinder, "O" vinder og "uafjort". Man kan se vinderen af spillet i consol. "Genstart spil"-knappen genstarter spillet og refresher browseren, så det er muligt at spille spillet igen. Spillet er designet med inspiration fra The Coding Train. 
Spillet er færdiggjort d. 09-10-2020. 
