let num1 = +prompt("enter the first number");
let num2 = +prompt("enter the second number");

function compare(num1, num2) {
    if(num1 > num2)
    {
    console.log("first number is greater than second one");
    return "greatest";
    }
    else if(num1 < num2)
    {
    console.log("first number is smaller than second one");
    return "smalltest";
    }
    else {
    console.log("first number and second number is equal");
    return "equal";
    }
}
