$(document).ready(function() {

  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });

  $('form').validate();

  $.validator.addClassRules({
    'js-phone': {
      checkMask: true
    }
  });

  $('.form-call__input--tel').mask("+7(999)999-9999", {
    autoclear: false
  });

});
