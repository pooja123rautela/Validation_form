function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
  
    var emailPattern = /\S+@\S+\.\S+/;
    var phonePattern = /^[0-9]{10}$/;
  
    var errors = [];
  
    if (name.length < 5) {
      errors.push("Name must be at least 5 characters long");
    }
  
    if (!emailPattern.test(email)) {
      errors.push("Enter a valid email address");
    }
  
    if (!phonePattern.test(phone)) {
      errors.push("Phone number must be a 10-digit number");
    } else if (phone === "1234567890") {
      errors.push("Phone number cannot be 1234567890");
    }
  
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    } else if (
      password.toLowerCase() === "password" ||
      password.toLowerCase() === name.toLowerCase()
    ) {
      errors.push("Password cannot be 'password' or your name");
    }
  
    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }
  
    if (errors.length > 0) {
      var errorString = errors.join("\n");
      alert(errorString);
      return false;
    } else {
      alert("form is successfully submit");
      return true;
    }
  }
  