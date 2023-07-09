/**
 * callBack  is a function passed as an argument to another function.
 */

// function disPlay(something)
// {
//     document.getElementById("demo").innerHTML = something;
// }


// function higherOrder(name, className, callBack)
// {
//     const details = `My name is ${name} and I read in class ${className}`;
//     callBack(details);
// }

// higherOrder("Abdur Rahim", 16, disPlay);



//write a function that will return positive values in a array


//declare a array an assign static value
const myNumbers = [4,1,-10,-9,-6,5,9]

//find positive numbers
const positiveNumbers = negativeNumbers(myNumbers, (x) => x>=0);

//display result into html tag
document.getElementById("demo").innerHTML = positiveNumbers;

//define the higher order function
function negativeNumbers(x, callBack)
{
    const myArr =[];
    for(let arg of x)
    {
        if(callBack(arg))
        {
            myArr.push(arg);
        }
    }
    return myArr;
}