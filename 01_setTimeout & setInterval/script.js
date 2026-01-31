
//Asynchronous JavaScript allows the program to start a task that takes time (like an API call) 
//and continue executing other code without waiting for that task to finish.




document.addEventListener("DOMContentLoaded",()=>{

    console.log("this line is exicuted")

// setTimeOut : 
// => setTimeout() schedules a function to run after a minimum delay using the event loop, without blocking the main thread.
    const timeOut=setTimeout(()=>{
        console.log("inside timeOut executed !!");
    },2000)


// setInterval:
// =>setInterval() repeatedly executes a function at a fixed delay using the event loop until it is cleared.
   const timerId=setInterval(()=>{
        console.log("code from interval")
    },1000)

    console.log("next line executed")
    //heavyFn();

    document.getElementById("btn").addEventListener("click",()=>{
        console.log("button clicked")
    })

    // clearInterval and clearTimeOut

    document.getElementById("clear").addEventListener("click",()=>{
        clearInterval(timerId);
        clearTimeout(timeOut);

    })
})

function heavyFn(){
    console.log("heavy fn called !!")
}