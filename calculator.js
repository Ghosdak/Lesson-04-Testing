function isNumber(numStr){
  var re = /^[0-9\.]+$/; 
  return re.test(numStr);
}

function add(num1, num2){
  return num1 + num2;
}

function substract(num1, num2){
  return num1 - num2;
}

function multiplicate(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

module.exports.add = add;
module.exports.substract = substract;
module.exports.multiplicate = multiplicate;
module.exports.divide = divide;
module.exports.isNumber = isNumber;
