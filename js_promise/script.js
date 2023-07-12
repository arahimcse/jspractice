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

// const myPromise = new Promise((myResolve, myReject) =>{
//     const req = new XMLHttpRequest();
//     req.open('GET', 'myCar.html');
//     req.onload = () =>{
//         if(req.status == 200)
//         {
//             myResolve(req.response);
//         } else
//         {
//             myReject("File not Found " + req.status);
//         }
//     }
//     req.send();
// })

// myPromise.then(
//     (value) => {console.log(value)},
//     (error) => {console.log(error)}
// )

/**
 * 
 * Asynchronous is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can run simultaneously. Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it. Each task requires an answer before moving on to the next iteration.

The differences between asynchronous and synchronous include:

Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time.
Async is non-blocking, which means it will send multiple requests to a server. Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.
Async increases throughput because multiple operations can run at the same time. Sync is slower and more methodical.
Differences aside, asynchronous and synchronous methods both offer advantages, but for different stakeholders: Async for users and sync for developers.
 */


// async function myfunction()
// {
//     return 'hello';
// }

// console.log(myfunction()); 

/**
 * This examople is for synchronous way of javascript programming
 * JavaScript code running processed
 * 1. JavaScript code conver into machine code that understand by JavaScript engine. [Engine]
 * 2. Browser has call Stack, console, Web APIs, call queue/ Task Queue
 * 
 * 
 * ####Output####
 * Take order for Customer 1
 * processing order for customer 1
 * cooking completed (continue till 3 second)
 * processed order for customer 1
 * Task completed
 * 
 */

// function processingOrder()
// {
//     console.log("processing order for customer 1");
//     const currentDate = new Date().getTime();
//     while(currentDate + 3000 >= new Date().getTime())
//     {
//         console.log("cooking completed");
//     } //block the application for 8 seconds and user cann't perform any operation in the webpages. async await resolve the problem

//     console.log('processed order for customer 1')
// }
// console.log('Take order for Customer 1')
// processingOrder()
// console.log("Task completed")


/**
 * Example for used asynchronous function. Asynchronous function normally take multi-thread, Means when an operation/function take sometime for execution. Asynchronous function not for completion the function and switch to next line. And asynchronous function go to in WEB API's and wait for assignment time then got callback queue/Tasks Queue
 * 
 * ####Output#####
 * Take an order for customer 1
 * Processing Order for customer 1
 * processed order
 * Task Complete
 * cooking complete
 */
// const orderProcess = () =>
// {
//     console.log("Processing Order for customer 1")
//     setTimeout(() => console.log("cooking complete"), 3000)
//     console.log('processed order')
// }
// console.log("Take an order for customer 1")
// orderProcess();
// console.log('Task Complete')

/**
 * example the above code maintained a flow for the perticular operation
 * ####Output#######
 * 
 * Take an order for customer 1
 * Processing order for customer 1
 * Cooking completed
 * Procssed Order of customer 1
 * Complete order for customer 1
 * 
 */

// const takeOrder = (customer, callBack) =>
// {
//     console.log(`Take an order for ${customer}`)
//     callBack(customer)
// }

// const processOrder = (customer, callBack) =>
// {
//     console.log(`Processing order for ${customer}`)
//     setTimeout(()=>{
//         console.log("Cooking completed")
//         console.log(`Procssed Order of ${customer}`)
//         callBack(customer)
//     },3000)
// }

// const completerOrder =(customer) =>{
//     console.log(`Complete order for ${customer}`)
// }

// takeOrder('customer 1', (x) =>{ /**The callback control the flow of our task  */
//     processOrder(x, (x)=>{
//         completerOrder(x)
//     })
// })

/**
 * ###Output###
 * Take an order for customer 1
 * Processing order for customer 1
 * Hello World
 * Cooking completed
 * Procssed Order of customer 1
 * Complete order for customer 1
 * 
 * There have only one async function "setTimeout". There have 3 minutes delay but Javascript not stop the. JavaScript is a single thread engine, so it hand over the async function to the runtime environment (web apis, call back queue, even loop) and jump to the next statemt ment. When JavaScript engine 'call stack' free then even loop run and forward the  async function the call stack again for execution. 
 * 
 */

// const takeOrder = (customer, callBack) =>
// {
//     console.log(`Take an order for ${customer}`)
//     callBack(customer)
// }

// const processOrder = (customer, callBack) =>
// {
//     console.log(`Processing order for ${customer}`)
//     setTimeout(()=>{
//         console.log("Cooking completed")
//         console.log(`Procssed Order of ${customer}`)
//         callBack(customer)
//     },3000)
// }

// const completerOrder =(customer) =>{
//     console.log(`Complete order for ${customer}`)
// }

// takeOrder('customer 1', (x) =>{ /**The callback control the flow of our task  */
//     processOrder(x, (x)=>{
//         completerOrder(x)
//     })
// })

// console.log("Hello World")



/**
 * Create promise and used promise
 */

const hasMeeting = false;

const myPromise = new Promise((myResolve, myReject) =>{
    if(!hasMeeting)
    {
        const meeting = {
            name:"Technical Training Decision",
            location:"123 Maridien Hotel",
            time:"10:00AM"
        }
        myResolve(meeting)
    } else 
    {
        myReject(new Error("The meeting already scheduled"))
    }
})

//Generate promise 

myPromise
.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error)})
