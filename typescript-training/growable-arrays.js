var sportsTwo = ["Golf", "Basket-ball", "Cricket", "Soccer"];
sportsTwo.push("Baseball");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite sport >>");
    }
    else {
        console.log(tempSport);
    }
}
