function factorialize(number) {
  if (number === 0 || number === 1)
    return 1;
  for (var index = number - 1; index >= 1; index --) {
    number *= i;
  }
  return number;
};



$(document).ready(function() {
  $("form#factorial-numbers").submit(function(event) {
    event.preventDefault();
    var factorialNumber = parseInt($("input#factorial").val());
    var finalNumber = factorialize(factorialNumber);

    $(".factor").text(finalNumber);
    $("#result").show();

  });
});
