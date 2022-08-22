//Receiving a callback function
function receivesAFunction(spy) {
    return spy();
}


//Returning a named function
function returnsANamedFunction() {
    return function getSum(num1, num2) {console.log(num1+num2)};
}


//Returning an anonymous function 
function returnsAnAnonymousFunction() {
    return () => console.log('Hello world');
}