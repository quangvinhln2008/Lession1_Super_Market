function signIn(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = {email:"vinhnq.ufm@gmail.com", password : "1234"}
  if (email == user.email && password == user.password)
  {
    alert("Welcome to Zen Cart!");
  }
  else
  {    
    alert("Email or Password is incorrect.");
  }
}

// function addToCart()

// global variable
var countItems = 0;
function addToCart(){
  countItems ++ ;
  document.getElementById("countItems").innerHTML = countItems;

  if (countItems > 0)
  {
    document.getElementById("countItems").style.color = "#fe8802";
    document.getElementById("item").style.color = "#fe8802";
  }
}