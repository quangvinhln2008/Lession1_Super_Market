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