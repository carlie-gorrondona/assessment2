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

const summedPrice = cart.reduce((runningTotal, currPrice) => {

    return runningTotal += currPrice.price;
}, 0)


console.log(summedPrice);

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

const calcFinalPrice = (cartTotal, couponValue, tax) => {

    cartTotal = (tax * cartTotal) + cartTotal;

    cartTotal -= couponValue;

    return cartTotal;

}

console.log(calcFinalPrice(26.97, 0, 0.08));

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
    My customer object will have the following properties: customer's table number, customer's payment type, array of items ordered, and total cost for all items purchased. 

    Customer ID is needed to keep track of where all orders come from. 

    Items ordered keeps track of all items that were ordered by the customer. This helps calculate the total.

    Payment type will determine if the restaurant needs more information from the customer. If they pay with cash, then no extra information is needed. If they pay with credit/debit, then their card informaiton is required.

    Cart total shows how much the customer owes.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {

    customerId: 45,
    paymentType: "Debit/Credit",
    itemsOrdered: ["breadsticks", "pizza", "soda"],
    cartTotal: 30.00
}
