// lvha effect on menu
(function($) {
  $(document).ready(function() {
    $('#postOne').mouseover(function(event) {
      console.log("It worked.");
      // $('Lean').hide().show(1000);
    });

    $('#postOne').mouseout(function(event) {
      console.log("yeah worked");
      // $('Agila-metoder').hide().show(1000);
    });

  });
})
$('#postOne').mouseover(function(event) {
 $('#postOne').css({background:"Burlywood"});
});

$('#postOne').mouseout(function(event) {
 $('#postOne').css({background:"LightGoldenRodYellow"});
});

$('#postTwo').mouseover(function(event) {
 $('#postTwo').css({background:"Burlywood"});
});

$('#postTwo').mouseout(function(event) {
 $('#postTwo').css({background:"LightGoldenRodYellow"});
});

$('#postThree').mouseover(function(event) {
 $('#postThree').css({background:"Burlywood"});
});

$('#postThree').mouseout(function(event) {
 $('#postThree').css({background:"LightGoldenRodYellow"});
});


// lvha effect on text background:
$('#Lean').mouseover(function(event) {
 $('#Lean').css({background:"PapayaWhip"});
});

$('#Lean').mouseout(function(event) {
 $('#Lean').css({background:"LavenderBlush"});
});

$('#Agila-metoder').mouseover(function(event) {
 $('#Agila-metoder').css({background:"PapayaWhip"});
});

$('#Agila-metoder').mouseout(function(event) {
 $('#Agila-metoder').css({background:"LavenderBlush"});
});

$('#Projektmetodiken').mouseover(function(event) {
 $('#Projektmetodiken').css({background:"PapayaWhip"});
});

$('#Projektmetodiken').mouseout(function(event) {
 $('#Projektmetodiken').css({background:"LavenderBlush"});
});
