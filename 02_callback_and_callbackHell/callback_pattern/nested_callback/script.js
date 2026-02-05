
// nested call back
/*
setTimeout(()=>{
    console.log("step 1 completed");
    setTimeout(()=>{
        console.log("step 2 completed");
        setTimeout(()=>{
            console.log("step 3 completed")},1000);
    },1000)
},1000)
*/


// sequential operation

function orderfood(cb)
{
    console.log("Food Ordered")
    setTimeout(()=>{
        cb()
    },1000)
}

function prepareFood(cb)
{
    console.log("preparing food")
    setTimeout(()=>{
        cb()
    },1000)
}

function sendForDelivery(cb)
{
    console.log("out for delivery")
    setTimeout(()=>{
        cb()
    },1000)
}

function foodDelivered()
{
    console.log("Food Delivered")
}

// calling
/*
orderfood(()=>{
    prepareFood(()=>{
        sendForDelivery(()=>{
            foodDelivered()
        })
    })
})
*/

// Example:
// fetch user profile
// validate profile
// display dashboard

function fetchUserProfile(username,cb)
{
    console.log("Fetching User Profile !!")

    setTimeout(()=>{
        if(!username)
        {
            cb("Username Not Found",null)
        }
        else{
            if(username=="r")
            {
                cb(null,{name:"Rahul",age:18})
            }
            else
            {
                cb(null,{name:"greet",age:17})
            }
        }
    },2000)
}


function validateProfile(profile,cb)
{
    console.log("Vaildating profile")

    setTimeout(()=>{
    if(profile.age<18)
    {
        cb("user is not eligible!!",null)
    }
    else
    {
        cb(null,profile)
    }},1000)
}

function displayProfile(profile)
{
    console.log("profile : ",profile)
}


// sucess call
fetchUserProfile("r",(error,profile)=>{

    if(error)
    {
        console.log(error)
    }
    else{
        validateProfile(profile,(error,result)=>{
            if(error)
            {
                console.log(error)
            }
            else{
                displayProfile(result)
            }
        })
    }

})

// failure call

/*
fetchUserProfile("g",(error,profile)=>{
    if(error)
    {
        console.log(error)
    }
    else
    {
        validateProfile(profile,(error,result)=>{
            if(error)
            {
                console.log(error)
            }
            else{
                displayProfile(result)
            }
        })
    }
})
*/