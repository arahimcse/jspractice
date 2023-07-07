/**
 * The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
 * @param  {...any} args 
 * @returns 
 */


function sum(...args)
{
    let sum =0;
    for(let arg of args)
    {
        sum +=arg;
    }
    return sum;
}
const x = sum(0,1,2,3,4,5,6,7,8,9,10);
document.getElementById("demo").innerHTML = x;