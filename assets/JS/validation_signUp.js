$(document).ready(function() {
  $('.ui.form')
  .form({
    fields: {
      username: {
        identifier  : 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Username cannot be left blank'
          },
          {
            type   : 'regExp[/^[a-z0-9_-]{4,16}$/]',
            prompt : 'Please enter a 4-16 letter Username'
          }
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Password cannot be left blank'
          },
          {
            type   : 'length[6]',
            prompt : 'Your password must be at least 6 characters'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Email cannot be left blank'
          },
          {
            type   : 'email',
            prompt : 'Enter a valid Email'
          }
        ]
      },
      mobile: {
        identifier: 'mobile',
        rules: [
          {
            type   : 'empty',
            prompt : 'Mobile  cannot be left blank'
          },
          {
            type   : 'minLength[10]',
            prompt : 'Mobile must be min. 10 digits'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Password  cannot be left blank'
          },
          {
            type   : 'minLength[6]',
            prompt : 'Password must be min. 6 characters'
          }
        ]
      }
    }
  },
  {
   transition: 'fade down',
   onSuccess: submitForm 
  });
});


//Called when Form is ready to be submitted

function submitForm(){
  if(window.lock != 'locked'){
    var myForm = $('.ui.form');
    $.ajax({
      type: myForm.attr('method'),
      url: myForm.attr('action'),
      data: myForm.serialize(),
      success: function(data){
        //If success posting value via ajax
        myFormSubmitted(data);
        window.lock = "";
      }
    });
  }
  window.lock = "locked";

}

// Stop the form from submitting multiple times 
$('.ui.form').submit(function(e){ 
  //e.preventDefault(); usually use this works, but below one is cooler!
  return false;
});


//Reset the Form
function myformposted(data) { 
  $('.ui.form').find("input[type=text], textarea").val("");
  //$('.ui.submit.button').after("<div>Message sent. Thank you.</div>");
  $('.ui.submit.button').after(data);
} 