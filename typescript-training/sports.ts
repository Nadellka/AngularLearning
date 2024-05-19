let sportsOne: string[] =  ["Golf", "Basket-ball" , "Cricket", "Soccer"];

for(let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

console.log("======Advanced for loop========")

//Simplified for loop
for(let tempSport of sportsOne){
    if(tempSport == "Cricket"){
        console.log(tempSport + "<< My Favorite sport >>");
    }else{
        console.log(tempSport);
    }
    
}