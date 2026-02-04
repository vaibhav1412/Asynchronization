
// callback :
    // A callback is a function passed as an argument to another function, which is called later.



//Simple example

function calculate(a, b, operation) {
  operation(a, b);
}

function add(x, y) {
  console.log(x + y);
}

calculate(10, 20, add);


// example order food
function orderFood(callBack) {
    console.log("Food ordered")

    setTimeout(() => {
        console.log("food prepared")
        setTimeout(() => {
            console.log("Out for delivery")
            callBack()
        }, 3000);
    }, 3000);
}

function foodDelivered() {

    console.log("Food delivered")
}


orderFood(foodDelivered);
console.log("Doing something else till food is being prepared")


