$(document).ready(function() {
  var flavors = ["chocolate", "strawberry", "green tea"];
    flavors.forEach(function(flavor) {
      $(".favorites").append("<li>" + flavor + "</li>");
    });

  //$("#blanks form").submit(function(event) {
    //var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    //var person1Input = $("input#person1").val()
    //var person2Input = $("input#person2").val()
    //var animalInput= $("input#animal").val()
    //var exclamationInput = $("input#exclamation").val()
    //var verbInput = $("input#verb").val()
    //var nounInput = $("input#noun").val()

    //blanks.forEach(function(blank) {
      //var userInput = $("input#" + blank).val();
      //$("." + blank).text(userInput);
    //});

      //$(".person1").text(person1Input);
      //$(".person2").text(person2Input);
      //$(".animal").text(animalInput);
      //$(".exclamation").text(exclamationInput);
      //$(".verb").text(verbInput);
      //$(".noun").text(nounInput);

    //$("#story").show();

    //event.preventDefault();

  //});
});
