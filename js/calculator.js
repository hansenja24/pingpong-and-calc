function Calculator() {

}

Calculator.prototype.Add = function(number1, number2) {
  var add = number1+number2;
  return add;
};
Calculator.prototype.Sub = function(number1, number2) {
  var sub = number1-number2;
  return sub;
};
Calculator.prototype.Mul = function(number1, number2) {
  var mul = number1*number2;
  return mul;
};
Calculator.prototype.Div = function(number1, number2) {
  var div = number1/number2;
  return div;
};

exports.calculatorModule = Calculator;
