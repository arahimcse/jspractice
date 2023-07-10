// const myPromise = new Promise((myResolve, myReject) => {
//     //JavaScript Produced Code

//     const http = new XMLHttpRequest();
//     http.open('GET', "pracker.json");
//     http.onload = () => {
//         if(http.status == 200)
//         {
//             /**JSON.parse() function convert a string to object*/
//             const reData = JSON.parse(http.response);
//             const {message} = reData; // object distructure
//             myResolve(message);
//         } else {
//             myReject("File not Found");
//         }
//     };
//     http.send();
// });


// // my


// myPromise.then(
//     (value)=>{console.log(value)},
//     (value)=>{console.log(value)}
// );


// const myPromise = new Promise((myResoleve, myReject) =>{
//     let x = 0;
//     if(x == 0)
//     {
//         myResoleve("OK");
//     } else
//     {
//         myReject("Error");
//     }
// })

// myPromise.then(
//     (value) => {disPlay(value)},
//     (error) => {disPlay(error)}
// )


// const disPlay = (value) => 
// {
//     console.log(value);
// }


// /**
//  * Example 3
//  */

// const myPromise = new Promise((myResoleve, myReject) => {
//     setTimeout(()=>{myResoleve("I Love You!")}, 3000);
// })


// myPromise.then((value)=>{display(value)})

// const display = (value) => {
//     console.log(value)
// }

/**
 * JSON dummy data/fake data for practice purpose only
 * 
 * link@1 https://dummyjson.com/
 * link@2 https://jsonplaceholder.typicode.com/
 */

const myPromise = new Promise((myResolve, myReject) =>{
    const req = new XMLHttpRequest();
    req.open('GET', 'myCar.html');
    req.onload = () =>{
        if(req.status == 200)
        {
            myResolve(req.response);
        } else
        {
            myReject("File not Found " + req.status);
        }
    }
    req.send();
})

myPromise.then(
    (value) => {console.log(value)},
    (error) => {console.log(error)}
)