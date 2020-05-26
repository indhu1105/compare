function compare(num1, num2) {
    if(num1 > num2)
    {
    return "greatest";
    }
    else if(num1 < num2)
    {
    return "smallest";
    }
    else {
    return "equal";
    }
}

module.exports = compare;
