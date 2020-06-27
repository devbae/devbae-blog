$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  var $window = $(window),
    $sidebar = $('#sidebar');

  $window.resize(function resize(){
    if ($window.width() < 992) {
      return $sidebar.addClass('container');
    }

    $sidebar.removeClass('container');
  }).trigger('resize');

  $(".btn-show-urls").click(function() {
    listUrls = $(this).parent().find('ul');
    if(listUrls.hasClass('is--visible')) {
      listUrls.removeClass('is--visible');
    } else {
      listUrls.addClass('is--visible');
    }
  });

  // <!-- Script for code copying -->
  $('pre').hover(function() {
    console.log("Hello You just hovered this pre ");

    // console.log(this);
    // console.log($(this));

    if(this.classList.contains('is-hovered')){
      this.classList.remove('is-hovered');
      console.log("Mouse leaved outside ");

      // Remove the copy button from the parent
    } else {
      console.log("Mouse entered inside ");
      this.classList.add('is-hovered');
      console.log(this.textContent);

      // This is creating a problem for right now think of something else
      // Add the content one thing and copy button to the parent
      // console.log(this.parentNode);
      // var toBeAdded = '<div id="copy-code-button">' 
      // + '</div>';

      // this.parentNode.innerHTML += toBeAdded;
      console.log("check now!");
    }
  });
})
