var sportsOne = ["Golf", "Basket-ball", "Cricket", "Soccer"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("======Advanced for loop========");
//Simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite sport >>");
    }
    else {
        console.log(tempSport);
    }
}
