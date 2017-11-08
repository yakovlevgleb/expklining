/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
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
