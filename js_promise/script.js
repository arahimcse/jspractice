const myPromise = new Promise((myResolve, myReject) => {
    //JavaScript Produced Code

    const http = new XMLHttpRequest();
    http.open('GET', "pracker.json");
    http.onload = () => {
        if(http.status == 200)
        {
            /**JSON.parse() function convert a string to object*/
            const reData = JSON.parse(http.response);
            const {message} = reData; // object distructure
            myResolve(message);
        } else {
            myReject("File not Found");
        }
    };
    http.send();
});


// my


myPromise.then(
    (value)=>{console.log(value)},
    (value)=>{console.log(value)}
);