const square = function(x){
    return x * x;
}

//const squareArrow = (x) => {
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const getFirstName = (firstName) => firstName.split(' ')[0];

console.log(getFirstName('Jose Riano'));

const getFirstNameArrow = (firstName) => {
    return firstName.split(' ')[0];
}
console.log(getFirstNameArrow('Jose Riano'));