var email = document.getElementById("email");
var pass = document.getElementById("pass");
var loginBtn = document.getElementById("loginBtn");
var allUsersData = getUserData(); // Defined in storage.js

loginBtn.addEventListener("click", function () {
    for (var i = 0; i < allUsersData.length; i++) {
    if (
        allUsersData[i].email == email.value &&
        allUsersData[i].pass == pass.value
    ) {
        setCurrentUser(i);
        window.location.href = "./assets/pages/dashboard.html";
      return; // Exit the function after successful login
    } else {
        document.getElementById("warningDiv").classList.remove("d-none");
    }
    }
    if (allUsersData.length == 0) {
    document.getElementById("warningDiv").classList.remove("d-none");
    }
});