var cartCount = 0;

    function updateCartCount() {
    var cartCounterElement = $(".cartCounter");
    if (cartCount === 0) {
    cartCounterElement.css("display", "none");
    } else if (cartCount >= 1) {
    cartCounterElement.css("display", "block");
    }

    cartCounterElement.text(cartCount);
      }

    updateCartCount();

      $(".buyNow").on("click", function(e) {
        cartCount += 1;
        console.log(cartCount);
        updateCartCount(); // Update the cart count when Buy Now is clicked
        $("#yourCart").html("Keurig® Coffee Maker(s): " + cartCount);
      });

      $("#X").click(function() {
        $(".top").hide();
        console.log("hi")

    });

    /* */

    $(".cartIcon").click(function() {
      console.log("working");
      const modal2 = $('#modal2');
      const closeBtn = $('.close');
      const empty = $('#empty');

      empty.click(function(){
        cartCount = 0;
        console.log("test")
        updateCartCount();
      });
      
      modal2.css('display', 'block');
  
      closeBtn.click(function() {
          modal2.css('display', 'none');
      });
  
      $(window).click(function(e) {
          if (e.target === modal2[0]) {
              modal2.css('display', 'none');
          }
      });
  });

    /* */

    let loggedInOut = false;

$("nav span").on("click", (e) => {
    setLoggedInOut();
});

function setLoggedInOut(){
    if(loggedInOut == true){
        loggedInOut = false;
        $("nav span").html("Log In")
    }else{
        loggedInOut = true;
        $("nav span").html("Log Out")
    }
   }


function getLoggedInOut(){
    return loggedInOut;
}

const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('log');
const closeBtn = document.querySelector('.close');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

log.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});