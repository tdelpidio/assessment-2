///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const origPrices = cart.reduce(function(acc,elem) {
    return acc + elem.price
}, 0)


console.log(origPrices)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax){
    return (cartTotal * tax + cartTotal) - couponValue
}

let calTest = calcFinalPrice(195, 10, .07)

// console.log(calTest)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The properties of my customer object will have:

    First Name and Last Name : string, to be able to identify the customer,
    Allergies: array(to list multiple if applicable), so that the kitchen is aware when preparing the food,
    Phone Number: number, to be able to contact the customer should there be any issues,
    email: string, to send the customer updates about order/promotional offers


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: John,
    lastName: Doe,
    allerigies: ['dairy'],
    phoneNumber: 8561234567,
    email: 'idontknow@gmail.com',
}
