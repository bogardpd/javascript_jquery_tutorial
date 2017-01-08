// This script does not fully implement validation; it was created to follow along
// specific elements in the book.

(function() {
  
  document.forms.register.noValidate = true; // Disable HTML5 validation
  
  $('form').on('submit', function(e) {
    var elements = this.elements;
    var valid = {};
    var isValid;
    var isFormValid;
    
    // Perform generic checks
    for (var i = 0, l = (elements.length - 1); i < l; i++) {
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
      if (!isValid) {
        showErrorMessage(elements[i]);
      } else {
        removeErrorMessage(elements[i]);
      }
      valid[elements[i].id] = isValid;
    }
    
    // Perform custom validation
    if (!validateBio()) {
      showErrorMessage(document.getElementById('bio'));
      valid.bio = false;
    } else {
      removeErrorMessage(document.getElementById('bio'));
    }
    
    // Did it pass / can it submit the form?
    // Loop through valid object, if there are errors set isFormValid to false
    for (var field in valid) {
      if(!valid[field]) {
        isFormValid = false;
        break;
      }
      isFormValid = true;
    }
    
    // If the form did not validate, prevent it from being submitted
    if (!isFormValid) {
      e.preventDefault();
    }
    
  });
  
  function validateRequired(el) {
    if (isRequired(el)) {
      var valid = !isEmpty(el);
      if (!valid) {
        setErrorMessage(el, 'Field is required');
      }
      return valid;
    }
    return true;
  }
  
  function isRequired(el) {
    return ((typeof el.required === 'boolean') && el.required) || (typeof el.required === 'string');
  }
  
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }
  
  function setErrorMessage(el, message) {
    $(el).data('errorMessage', message);
  }
  
  function showErrorMessage(el) {
    var $el = $(el);
    var $errorContainer = $el.siblings('.error'); // Does it have errors already?
    
    if (!$errorContainer.length) { // If no errors found
      // Create a span to hold the error and add it after the element with the error
      $errorContainer = $('<span class="error"></span>').insertAfter($el);
    }
    
    $errorContainer.text($(el).data('errorMessage'));
  }
  
  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings('.error.message'); // Get the sibling of this form control used to hold the error message
    errorContainer.remove();
  }
  
  function validateTypes(el) {
    if (!el.value) return true; // If element has no value, return true
    
    var type = $(el).data('type') || el.getAttribute('type');
    if (typeof validateType[type] === 'function') {
      return validateType[type](el);
    } else {
      return true;
    }
  }
  
  function validateBio() {
    var bio   = document.getElementById('bio');
    var valid = bio.value.length <= 140;
    if (!valid) {
      setErrorMessage(bio, 'Your bio should not exceed 140 characters');
    }
    return valid;
  }
  
  function validatePassword() {
    var password  = document.getElementById('password');
    var valid     = password.value.length >= 8;
    if (!valid) {
      setErrorMessage(password, 'Password must be at least 8 characters');
    }
    return valid;
  }
  
  function validateParentsConsent() {
    var parentsConsent    = document.getElementById('parents-consent');
    var consentContainer  = document.getElementById('consent-container');
    var valid = true;
    if (consentContainer.className.indexOf('hide') === -1) { // If checkbox shown
      valid = parentsConsent.checked;
      if (!valid) {
        setErrorMessage(parentsConsent, 'You need your parents\' consent');
      }
    }
    return valid;
  }
  
  
  var validateType = {
    email: function(el) {
      // Check email address
      var valid = /[^@]+@[^@]+/.test(el.value);
      if (!valid) {
        setErrorMessage(el, 'Please enter a valid email');
      }
      return valid;
    },
    number: function(el) {
      // Check that it is a number
      var valid = /^\d+$/.test(el.value);
      if (!valid) {
        setErrorMessage(el, 'Please enter a valid number');
      }
      return valid;
    },
    date: function(el) {
      // Check date format
      var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
      if (!valid) {
        setErrorMessage(el, 'Please enter a date in mm/dd/yyyy or yyyy-mm-dd format');
      }
      return valid;
    }
  };
  
}());