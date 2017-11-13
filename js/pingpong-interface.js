var CalculatorPing = require('./../js/pingpong.js').calculatorModule;
var Calculator = require('./../js/calculator.js').calculatorModule;


$(document).ready(function() {

  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new CalculatorPing("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#calculator').submit(function(event) {
    event.preventDefault();
    var operator = $("input:radio[name=operator]:checked").val();
    var number1 = parseInt($('#num1').val());
    var number2 = parseInt($('#num2').val());
    var myCalculator = new Calculator();
    var output1 = myCalculator.Add(number1, number2);
    var output2 = myCalculator.Sub(number1, number2);
    var output3 = myCalculator.Mul(number1, number2);
    var output4 = myCalculator.Div(number1, number2);

    if (operator === "add") {
      $('#result').text(output1);
    }
    else if (operator === "sub") {
      $('#result').text(output2);
    }
    else if (operator === "mul") {
      $('#result').text(output3);
    }
    else if (operator === "div") {
      $('#result').text(output4);
    }

    });




});
