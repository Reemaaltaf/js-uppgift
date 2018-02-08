// Scrolling first part checks the availability as well as if the function is working or not. The second part is a scrolling function.
(function($) {
  $(document).ready(function() {
    $('#postOne').click(function() {
      console.log("Lean post worked perfectly.");
      $('Lean').hide().show(1000);
    });

    $('#postTwo').click(function() {
      console.log("Agile post worked perfectly.");
      $('Agila-metoder').hide().show(1000);
    });

    $('#postThree').click(function() {
      console.log("Projektmetodiken post worked perfectly.");
      $('Projektmetodiken').hide().show(1000);
    });

  });
})

$(document).on('click', function() {

  $('#postOne').on('click', function() {
    $('html,body').animate({
      scrollTop: $('#Lean').offset().top
    })
  })

  $('#postTwo').on('click', function() {
    $('html,body').animate({
      scrollTop: $('#Agila-metoder').offset().top
    })
  })

  $('#postThree').on('click', function() {
    $('html,body').animate({
      scrollTop: $('#Projektmetodiken').offset().top
    })
  })
}); // End Scrolling
