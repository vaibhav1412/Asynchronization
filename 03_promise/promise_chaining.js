

// promise chaining

// if the first function returns a promise you can create multiple chains
// then, catch and finally also return promises that is why you can keep on chaining them
// if a value is returned, the returned value is passed as an argument to the next block in the
// chain

function add(a,b)
{
    return Promise.resolve(a+b)
}

add(5,5).then(result=>
    {console.log(result);
    return result*2}
).then(res=>{
    console.log(res)  // need to take return argument give undefine
}).then(res=>{
    console.log(res)  
}).then(res=>{
    console.log("2nd",res)
    throw new Error ("somethong going wrong")
}).catch((ex)=>{
    console.log(ex)
}).then(()=>{console.log("not well")}).finally(()=>{console.log("all process done")}).then(()=>console.log("some extra"))

