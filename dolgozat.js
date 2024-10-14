//Egészítsd ki a cuboid() függvényt!
//A függvény három nem negatív számot kap paraméterül, melyek egy téglatest éleinek hossza.
//Visszatérési értéke egy tömb, a téglatest felszíne és térfogata.
//Ha a téglatest nem létrezik, pl. egyik éle negatív vagy nulla, akkor a felszín és térfogat 0.
//Például: 10.4, 13.5, 8.2 -> [672.76, 1151.28]
console.log(cuboid(10.4, 13.5, 8.2));
function cuboid(sideOne, sideTwo, sideThree) {
    if(sideOne <= 0 || sideTwo <= 0 || sideThree <= 0){
        return 'The téglatest does not exist!'
    }

    let array = [];

    let felszin = (sideOne * sideTwo * 2) + (sideOne * sideThree * 2) + (sideThree * sideTwo * 2);
    array.push(felszin);

    let terfogat = sideOne * sideTwo * sideThree;
    array.push(terfogat);

    return array
}


//Egészítsd ki az isLeapYear() függvényt!
//A függvény egy évszámot kap paraméterül.
//Ha az évszám szökőév, akkor a visszatérési érték true, különben false.
//Az év szökőév, ha:
//Osztható 4-gyel, kivéve ha:
//Osztható 100-zal, akkor nem szökőév, kivéve ha:
//Osztható 400-zal, akkor mégis szökőév.
console.log(isLeapYear(2008))
function isLeapYear(year) {
    if(year % 100 == 0){
        if(year % 400 == 0){
            return "Its a leep year!"
        }
        else{
            return "It is not a leep year!"
        }
    }
    else if(year % 4 == 0){
        return "Its a leep year!"
    }
    else{
        return "It is not a leep year!"
    }
}



//Egészítsd ki az stonePaperScissorsWinner() függvényt!
//A függvény két nem negatív egész számot kap paraméterül, melyek
//0 - papír
//1 - kő
//2 - olló.
//A két szám rendre az első illetve második játékos értéke.
//El kell dönteni, hogy a játékban ki nyer, vagy döntetlen-e a játék.
//Ennek megfelelően a visszatérési értékek:
//'The second player wins.'
//'The game is a tie.'
//'The first player wins.'
console.log(stonePaperScissorsWinner(0,2))
function stonePaperScissorsWinner(player1, player2) {
    if(player1 == player2){
        return 'The game is a tie.'
    }
    else if(player1 == 0 && player2 == 1 || player1 == 1 && player2 == 2 || player1 == 2 && player2 == 0){
        return 'The first player wins.'
    }
    else if(player1 == 1 && player2 == 0 || player1 == 2 && player2 == 1 || player1 == 0 && player2 == 2){
        return 'The second player wins.'
    }
    else{
        return 'Something went wrong!'
    }
}



//Egészítsd ki a factorial() függvényt!
//A függvény egy pozitív egész számot kap paraméterül.
//Visszatérési értéke a szám faktoriálisa.
console.log(factorial(5))
function factorial(number) {
    let result = 1;

    for(let i = 1; i <= number; i++){
        result *= i;
    }

    return result;
}