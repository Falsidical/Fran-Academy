var output = [];
var index = 0;

function fizzBuzz(){
    index++;

/*
    if (index % 3 === 0 && index % 5 === 0){
        output.push("FizzBuzz");
    }else if (index % 3 === 0){
        output.push("Fizz");
    }else if (index % 5 === 0){
        output.push("Buzz");
    }else{
        output.push(index);
    }
*/

    var mensaje = "";
    if (index % 3 === 0){
        mensaje += "Fizz";
    }
    if (index % 5 === 0){
        mensaje += "Buzz";
    }

    if (index % 3 !== 0 && index % 5 !== 0){
        mensaje += index;
    }

    output.push(mensaje);
    return output;
}