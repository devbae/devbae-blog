$(function () {

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

  // Adding copy buttons to all pre tags parentNode and add class code-container
  var preBlocks = document.getElementsByTagName('pre');
  for (var i=0;i<preBlocks.length;i++) {

    // Creating a new node div
    var div = document.createElement('div');

    // Adding properties to the div
    div.setAttribute('class','copy-code-container');
    div.innerHTML = '<button class="btn btn-light code-copy-button" data-toggle="tooltip" data-placement="top" title="Copy to clipboard" onclick=copyThisCode(this)>Copy</button>';

    // Prepending and adding classes to the parentNode
    preBlocks[i].parentNode.prepend(div); // prepending the new node
    preBlocks[i].parentNode.classList.add('code-container');
  }

  // Use this after adding above code triggered when your mouse enters the .code-container block
  // For showing and hiding code button
  $('.code-container').hover(function() {
    if(this.classList.contains('is-hovered')){
      this.classList.remove('is-hovered');
    } else {
      this.classList.add('is-hovered');
    }
  });

  // For toggle, added this line after all data-toggle needed are done
  $('[data-toggle="tooltip"]').tooltip();

});

// Pass 'this' to this function of the button and this will copy the code
function copyThisCode(btnClicked) {

  // First find the code container where code exists
  var codeContainer = btnClicked.parentNode.parentNode;

  // Get the code which need to be copied
  var codeToCopy = codeContainer.getElementsByTagName('pre')[0].textContent;

  // Copying the new way
  navigator.clipboard.writeText(codeToCopy).then(function(){

    // Change the tooltip after copying
    $(btnClicked).attr('data-original-title', 'copied!')
    .tooltip('show');

    // Again back the copy to clipboard title after going outside (Inspired from Bootstrap)
    $(btnClicked).hover(function() {
      $(btnClicked).attr('data-original-title', 'Copy to clipboard');
    });

  }, function() {
    alert('Code copy failed');
    console.log("Copy failed!");
  });

}
