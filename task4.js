let number = +prompt("Enter the number");
let result = number % 10;
if ((number > 0) && (number < 10)) {
    alert(number)
}
else if ((number < 0) && (number > -10 )){
    alert(-number);
}
else if ((number < 0) && (number < -10 )){
    alert(-result);
}
else {
    alert(0);
}