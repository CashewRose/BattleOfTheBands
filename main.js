let bandNumber = 0;

const takeNumber = function (name) {
    bandNumber += 1;
    return bandNumber + ". " + name; 
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under) 