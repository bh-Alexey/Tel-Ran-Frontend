let order_cost = +prompt("Enter an order price");
let result = order_cost - order_cost * 0.1;
alert(`Order amount with 10% discount = ${result}`);
result = order_cost + order_cost * 0.1;
alert(`Order amount with tax (10%) = ${result}`);
result = order_cost - order_cost * 0.25;
alert(`Order amount with 25% discount = ${result}`);
result = order_cost + order_cost * 0.25;
alert(`Order amount with tax (25%) = ${result}`);
result = order_cost - order_cost * 0.01;
alert(`Order amount with 1% discount = ${result}`);
result = order_cost + order_cost * 0.015;
alert(`Order amount with tax 1,5% = ${result}`);
