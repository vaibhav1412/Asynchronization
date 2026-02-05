
// promises :


const jobPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
          resolve("job lag gayi 😍");
         //reject("find your self 😁")
    },2000); // represents 8 months


});
console.log(jobPromise)
console.log("after 8 month you got job:")

// success
jobPromise.then((result)=>{
    console.log(result)
}).catch((result)=>{  // failure
    console.log(result)
}).finally(()=>console.log("promise done ✔️")) 

/*
//ame as using two parameter in then for success and failure
jobPromise.then((result) => {
    console.log(result);
}, error =>
    console.error(error)) */


// promise states

// pending - outcome is not yet known

// fulfilled - successfull outcome - resolve called

// reject - error/unsuccesfull case - reject called

// settled - outcome is known now - i.e either fulfilled or rejected