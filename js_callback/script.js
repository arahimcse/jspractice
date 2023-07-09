/**
 * callBack  is a function passed as an argument to another function.
 */

function disPlay(something)
{
    document.getElementById("demo").innerHTML = something;
}


function higherOrder(name, className, callBack)
{
    const details = `My name is ${name} and I read in class ${className}`;
    callBack(details);
}

higherOrder("Abdur Rahim", 16, disPlay);