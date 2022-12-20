function getUsername(){
    let userName = document.getElementById('username');
    let usernameValue = userName.value;
    localStorage.setItem('userName', usernameValue);
  }