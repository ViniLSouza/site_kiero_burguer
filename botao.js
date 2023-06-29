function updateQuantity() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
  
    var message = document.getElementById("message");
    if (quantity < 0) {
      message.textContent = "A quantidade não pode ser negativa!";
      quantityInput.value = 0;
    } else {
      message.textContent = "";
    }
  }
  
  function incrementQuantity() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    updateQuantity();
  }
  
  function decrementQuantity() {
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
      quantityInput.value = quantity - 1;
      updateQuantity();
    }
  }
  

  