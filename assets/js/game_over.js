function init(){
    let username = document.getElementById('username');
    username.innerText = localStorage.getItem('userName');
    let currentScore = document.getElementById('currentScore');
    currentScore.innerText = localStorage.getItem('myScore');
}
init();