//TODO : Its a Completed Code
function formvalid() {
    var validatedPasswd = document.querySelector(".pass").value;
  
    if (validatedPasswd.length <= 8 || validatedPasswd.length >= 12) {
      document.querySelector(".vaild-pass").innerHTML = "Minimum 8 characters";
      return false;
    } else {
      document.querySelector(".vaild-pass").innerHTML = "";
    }
  }
  
  function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
      x.type = "password";
      document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }
  