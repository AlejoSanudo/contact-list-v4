  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  var handlers = function(){

    getContacts: function(){
      $.getJSON('/contacts', handlers.showContacts);
    },
    showContacts: function(){
      var list = $('#all_contacts').empty();
      $.each(data, function(index,contact){
        $(<'li'>).text(contact.first_name + " " + contact.last_name + '||' + contact.email).appendTo(list);
      })
      $('#all_contacts').removeClass('hide');
    }
    editContact: function(){
      $.getJSON('/contacts/edit', handlers.showContact);
    }
    showContact: function(){
      var id = prompt("Which user do you want to edit?(ID)");
      $.
    deleteContact
    }
  }


$(function() {
  $("#all_btn").on('click', function(){
    alert("this should work");
    handlers.getContacts;
  })

  $('#edit').on('click',function(){
    handlers.editContact;
  })
});



  // $('#search').on('click',function(){
  //   $('#search_form').toggle();
  // })
  // $('#new').on('click',function(){
  //   $('#create_form').toggle();
  // })
