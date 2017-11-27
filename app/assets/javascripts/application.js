// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require chartkick

$(document).on('click', ".response-button", function(){
  $("#responses").hide(); 
  $("#change-response").show();
})

$(document).on('click', "#change-response-button", function(){
  $("#responses").show(); 
  $("#change-response").hide();
})

$(document).on('page:change', function(){
  (function($){
    $(window).on("load",function(){
      $(".custom-bar").mCustomScrollbar({
        axis: "y",
        alwaysShowScrollBar: 2,
        theme: "3d-thick",
        scrollInertia:0,
        mouseWheelPixels: 170
      });
    });
  })(jQuery);

  $("#questions-container").attr("style", $("#questions-container").attr("style") + ";height:" + ($(document).height() - 400) + "px");
});