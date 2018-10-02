function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
