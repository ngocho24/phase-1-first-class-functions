// Function that takes a callback function as an argument and calls it
function receivesAFunction (Drink){
Drink();
}

// Function that returns a named function
function returnsANamedFunction () {
    // named function
    function eat (){
        console.log ("eat food");
    }
    return eat;
    }


    // Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function(){
        console.log ("return an anonymous function")
    }
}