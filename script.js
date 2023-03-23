function loginPage() {
let userName = document.getElementById("UserSaab").value ;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "12345" && userName !="") {


        window.location.href = "cities.html"

    } else {
        Toastify({
            text: "Email or Password is Wrong",
            duration: 600,



            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #297EA6, #001829)",
                width: "305px",
                height: "50px"
            },
            onClick: function () { }
        }).showToast();
    }
}

function userwll(){
    const useName = document.getElementById("UserSaab")
    document.getElementById("user-wel").innerHTML = '<h1>Welcome</h1>'+useName
}

windwos.location.href

  