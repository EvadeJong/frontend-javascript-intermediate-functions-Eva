// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
//stap 1: loop door iedere waarde in de array, en controleer of de waarde hoger is of gelijk is aan 8
//stap 2: gebruik daarbij de lengte van de array als conditie
//stap 3: return de uitkomst
let number = 0;
for (let i = 0; i < grades.length; i++){
    if(grades[i] >= 8) {
        number = number + 1;
    }
}
console.log(number);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


function cumLaude (gradeList) {
    let number = 0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] >= 8) {
            number = number + 1;
        }
    }
        return number;
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
// defineer de methode voor het berekenen van een gemiddelde
// tel alle getallen uit de array bij elkaar op
// gebruik de lengte van de array als conditie

let value = 0;
for (let i = 0; i < grades.length; i++) {
    value += grades[i];
}
const numberAverage = (value / grades.length);

console.log(numberAverage);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function calculateAverage(gradeList) {
    let value2 = 0;
    for (let i = 0; i < gradeList.length; i++) {
        value2 += gradeList[i];
    }
    const numberAverage2 = (value2 / gradeList.length);
    return numberAverage2;
}
console.log(calculateAverage(grades));
console.log(calculateAverage([6, 4, 5]));
console.log(calculateAverage([8, 9, 4, 6, 10]));
/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
function calculateAverage2(gradeList) {
    let value3 = 0;
    for (let i = 0; i < gradeList.length; i++) {
        value3 += gradeList[i];
    }
    const numberAverage3 = (value3 / gradeList.length).toFixed(2);
    return numberAverage3;
}
console.log(calculateAverage2(grades));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
// loop door de array
// controleer welk cijfer het hoogste is
// overschrijf een variable steeds met het hoogste nummer

let highestNumber = 0;

for( let i = 0; i < grades.length; i++){
    if (grades[i] > highestNumber){
        highestNumber = grades[i];
    }
}
console.log(highestNumber);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10



function highestGrade(gradeList){
    let highestNumber2 = 0;
    for( let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] > highestNumber2) {
            highestNumber2 = gradeList[i];
        }
    }
    return highestNumber2;
}
console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]) );
console.log(highestGrade([8, 9, 4, 6, 10]));

