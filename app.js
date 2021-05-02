    function signUp () {
    let name = prompt("What is your name?");
    let email = prompt("What is your email-address?");
    let age = prompt("How old are you?");
    if (age >= 16){
      alert("Thank you for your interest, " + name + ", you will receive our next newsletter!");
    } else {
      alert("Sorry, " + name + ", you are too young for our newsletter!");
    }
    }
    let signupButton = document.querySelector("button");
    signupButton.addEventListener("click", signUp)