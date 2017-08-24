$(document).ready( function(){

  $('#add_to_cart').on('click', function(){
    var total = +$("#total").text();
    
    switch($("#package_options").val()){
      case 'hourly':
        $("#cart").append("<li class='entry' data-amount=250>Kelani Sitake Hourly ($250/hr)<button class='remove'>X</button></li>")
        total += 250
        break
      case 'monthly':
        $("#cart").append("<li class='entry' data-amount=1500>Bobby Petrino Monthly ($1500/mo)<button class='remove'>X</button></li>")
        total += 1500
        break;
      case 'quarterly':
        $("#cart").append("<li class='entry' data-amount=4000>Mike Price Quarterly ($4000/qtr)<button class='remove'>X</button></li>")
        total += 4000
        break;
    }
    $("#clear_cart").show()
    $("#total").text(total)
  })

  $("#display_cart").on('click', function(){  
    var button = $(this)
    if (button.val() === "Hide Cart")
        button.val('Show Cart')
    else
        button.val('Hide Cart')

    $("#cart_block").slideToggle();
  })

  $('#checkout').on('click', function(){
    
    $('#freeze_head').fadeOut('fast',function(){
      $(this).attr('src', "images/freeze_smiling.png").fadeIn('fast');
    })

    $("#complete")
    .html("<h2>Purchase Complete!</h2>")
    .css({
      'background': 'white',
      'border': '2px solid green',
      'text-align': 'center'
    })
    .animate({
      width: '80%',
      opacity: 0.8,
      marginLeft: '0.6in',
      fontSize: '3em',
      borderWidth: '10px'
    }, 1500)
    
    //alert("WARNING!!!!!!!!\nTo proceed, you must agree not to call us from your school cell phone.")
  })

  $('#clear_cart').on('click', function(){
    $("#cart").empty()
    $("#total").text("0")
    $("#clear_cart").hide()
    $('#freeze_head').fadeOut('fast',function(){
      $(this).attr('src', "images/freeze.png").fadeIn('fast');
    })
  })

  $(document).on('click','.remove', function(){
    var data  = $(this).parent().data()
    $(this).parent().remove()
    var total = +$("#total").text()
    total -= data.amount
    $("#total").text(total)
  })

});
