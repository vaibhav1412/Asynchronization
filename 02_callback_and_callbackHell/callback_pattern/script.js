//Error-first callback means the first parameter is reserved for errors; if there is no error, it must be null.

function fetchUserProfile(userId,callBack)
{
    if(!userId)
    {
        callBack("user not found",null)
    }
    else
    {
        callBack(null,{name:"vaibhav",id:2})
    }
}

function afteruserFetch(error,user)
{
    if(error){
        console.log(error)
    }
    else
    {
        console.log(user)
    }
}

//fetchUserProfile(1,afteruserFetch)
//fetchUserProfile(0,afteruserFetch)

//2nd method
fetchUserProfile(0,(error,user)=>{
        if(error){
        console.log(error)
    }
    else
    {
        console.log(user)
    }
})