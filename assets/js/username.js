function getUsername(){
    let userName = document.getElementById('username');
    let usernameValue = userName.value;
    if (usernameValue !== ""){
      window.open("quiz.html", "_self");
      localStorage.setItem('userName', usernameValue);
    }
    else{
      alert('You need to enter your name')
    }
  }