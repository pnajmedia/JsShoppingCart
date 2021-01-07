$(document).ready(function () {
    document.getElementById("logoutBtn").addEventListener("click", function () {
        alert('You loose all items in cart! still want to Proceed ?');
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace('./login.html');
    });

    if (document.getElementById('loginPressed')) {
    document.getElementById("loginPressed").addEventListener("click", function () {
        alert('Sure, you Want to Quit registraton?');
        window.location.replace('./login.html');
    });
    }

    //Back Press 
    if (document.getElementById('backPress')) {
        document.getElementById('backPress').addEventListener("click", function () {
            alert('Sure, want to navigate back?');
            window.history.back();
        });
    }

    //Get Username    
      getUsername()

});

function getUsername(){
    console.log('local guy',localStorage.getItem('username'));
    document.getElementById('adminName').innerText = localStorage.getItem('username');
}