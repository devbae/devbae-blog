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
})
