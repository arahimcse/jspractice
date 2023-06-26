//display result
function myDisplay(data)
{
    console.log(data);
    document.getElementById("demo").innerHTML = data;
}

//Product code
const myPromise = new Promise((myResole, myReject)=>{
    let x =5;
    if(x == 0)
    {
        myResole("ok");
    } else 
    {
        myReject("error");
    }
});

//consume code
myPromise.then(
    (value) => {myDisplay(value)},
    (error) => {myDisplay(error)}
);