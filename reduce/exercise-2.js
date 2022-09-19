/*
Exercise 2: Total cost of items

Calculate the total cost of all the items using .reduce.

A list of items ('items') has been provided.

Each item has a number of items as well as a price.

Calculate the total cost of all items, taking into account
how many items are in stock.

A variable 'totalCostOfItems' has been provided for you. You must
set the result of your .reduce to this variable.

Tip: Calculate the cost for a single item by multiplying
the items in stock ('itemsInStock') by the price ('price')

*/

const items = [
  {
    name: 'Apple',
    itemsInStock: 10,
    price: 5.99,
  },
  {
    name: 'Banana',
    itemsInStock: 5,
    price: 3.99,
  },
  {
    name: 'Orange',
    itemsInStock: 2,
    price: 3.99,
  },
];

const totalCostOfItems = items.reduce((total, currentItem)=> {
    total += currentItem.itemsInStock * currentItem.price;
  return total;
},0); // Replace null and add .reduce code here

console.log(totalCostOfItems);
