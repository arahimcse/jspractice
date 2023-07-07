const numbers = [12,2,9,30,40,6]
let x = numbers.find(myFunc);
document.getElementById("demo").innerHTML = x;
function myFunc(value, index, numbers)
{
    return value>18;
}