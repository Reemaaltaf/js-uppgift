//This file is about api by using some functions tex ajax is here to check the connection.
(function($) {
  $(document).ready(function() {

    function getWP(pUrl, pElement) {
      var url = pUrl;

      $.ajax({
        type: "GET",
        url: url,
        timeout: 2000, // loading time
        beforeSend: function() {
          console.log('Before Send ');
        },
        complete: function() {
          console.log('log completed');
        },
        success: function(wpData) { // parameters from wp
          js(wpData); // send wp-Data to js

        },
        error: function() { // error log
          console.log('Failed!!!');

        }

      }); // end of ajax

      function js(pData) {
        // log wpData
        var wpTitle = pData.title.rendered; // loop in title

        var wpTitle = pData.title.rendered; // loop all rendered in title
        var wpContent = pData.content.rendered; // loop content from wp

        if (pData._embedded['wp:featuredmedia']) {
          var wpMedia = pData._embedded['wp:featuredmedia'];


          for (var img = 0; img < wpMedia.length; img++) {
            var wpImage = wpMedia[img].media_details.sizes.medium_large.source_url;
            var wpFeaturedMediaTitle = wpMedia[img].title.rendered;


            var wpHTML = ''; // content adding

            // wpHTML += '<section>'; // tag to add section in html
            wpHTML += '<h1>' + wpTitle + '</h1>' // add h1 title
            wpHTML += '<figure>'; // for figure
            wpHTML += '<img class="image" src="' + wpImage + '">'; // add images
             wpHTML += '</figure>'; // add closing tag
            wpHTML += wpContent; // add content
            // wpHTML += '</section>';

            pElement.append(wpHTML);

          } //  if _embedded

        } // for loop

      } // end js

    } // end getWP
    var $url_1 = "http://reemaaltaf.se/wordpress/wp-json/wp/v2/posts/4?_embed=true";
    var $section_1 = $('#Lean');
    getWP($url_1, $section_1);

    var $url_2 = "http://reemaaltaf.se/wordpress/wp-json/wp/v2/posts/9?_embed=true";
    var $section_2 = $('#Agila-metoder');
    getWP($url_2, $section_2);
    var $url_3 = "http://reemaaltaf.se/wordpress/wp-json/wp/v2/posts/11?_embed=true";
    var $section_3 = $('#Projektmetodiken');
    getWP($url_3, $section_3);

  }); // readyfunction
})(jQuery)
