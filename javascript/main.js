function ordersumbit() {
    // Get form input values
    var username = document.getElementById('username').value.trim();
    var mobilenumber = document.getElementById('mobilenumber').value.trim();
    var item = document.getElementById('items').value;
    var quantity = parseInt(document.getElementById('quantity').value);
    var gst = document.getElementById('gst').value.trim();
  
    // Error message container
    var errorContainer = document.getElementById('user_error');
    errorContainer.innerHTML = ""; // Clear previous errors
  
    // Validate form inputs
    if (!username || !mobilenumber || !item || !quantity || !gst) {
      errorContainer.textContent = "Please fill in all fields!";
      return;
    }
  
    // Item prices
    var prices = {
      rice: 500,
      milk: 200,
      fruits: 250,
      shoap: 350
    };
  
    // Calculate total and GST
    var itemPrice = prices[item];
    var total = itemPrice * quantity;
    var gstAmount = (total * 12) / 100; // Assuming 12% GST
    var finalTotal = total + gstAmount;
  
    // Add data to the table
    var table = document.getElementById('output-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${username}</td>
      <td>${mobilenumber}</td>
      <td>${item}</td>
      <td>${quantity}</td>
      <td>${finalTotal.toFixed(2)}</td>
    `;
  
    // Reset the form after submission
    document.querySelector('.booking-form').reset();
  }
  