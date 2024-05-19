let sportsTwo: string[] =  ["Golf", "Basket-ball" , "Cricket", "Soccer"];

sportsTwo.push("Baseball");

for(let tempSport of sportsTwo){
    if(tempSport == "Cricket"){
        console.log(tempSport + "<< My Favorite sport >>");
    }else{
        console.log(tempSport);
    }
    
}

/*
Arrays in TypeScript are alsways growable and dynamic
*/
