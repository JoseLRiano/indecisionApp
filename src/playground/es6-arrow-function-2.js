const add = (a , b) => {
    //console.log(arguments);
    return a +b;
};
console.log(add(55,1, 1929));

//this keyword

const user = {
    name: 'Jose Riano',
    cities: ['New york', 'Bogota', "Los Angeles"],
    printPlacesLived(){
     return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier ={
    numbers: [1,3,6,9,12],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());