
// success and error handler patterb in callback pattern

function fetchUserProfile(id,success,error)
{
    if(id)
    {
        success({name:"vaibhav",age:22,edu:"cs engineering"})
    }
    else{
        error("invalid id unable to fetch user")
    }
}

function successCallback(data)
{
    console.log(data)
}

function failureCallback(error)
{
    console.log(error)
}

fetchUserProfile(1,successCallback,failureCallback)
fetchUserProfile(0,successCallback,failureCallback)

// optimize method

fetchUserProfile(0,(data)=>{
    console.log(data)
},(error)=>{
    console.log(error)
})