
var i = 0;
var j = 0;
var k = 1;
var l = 0;


var userCheck = JSON.parse(localStorage.getItem("loginValid"));

if (userCheck.signed) k = 1;
else k = 0;





function toggleRegister() {
    i++;
    var div1 = document.getElementById("regCom");
    var div2 = document.getElementById("regStu");
    if (i % 2 == 1) {
        div1.style.display = "block";
        div2.style.display = "block";
    } else {
        div1.style.display = "none";
        div2.style.display = "none";
    }

}


function logout() {


}

function toggleLogin() {
    j++;
    var div1 = document.getElementById("logCom");
    var div2 = document.getElementById("logStu");
    if (j % 2 == 1) {
        div1.style.display = "block";
        div2.style.display = "block";
    } else {
        div1.style.display = "none";
        div2.style.display = "none";
    }
}
function login() {
    let login_div = document.getElementById("signin");
    login_div.innerHTML = null;
    if (k == 0) {
        let signin = document.createElement("a");
        signin.setAttribute("class", "sign");
        signin.innerHTML = `<div>SIGN IN</div>`;
        signin.addEventListener("click", function () {
            window.location.href = "/interntheory/login"
        })
        login_div.append(signin);
    } else if (k == 1) {
        let login = document.createElement("div");
        login.setAttribute("id", "login");
        login.innerHTML = `<span class="material-icons">account_circle</span>`;
        login.addEventListener("click", function () {
            change_logout();
        })
        login_div.append(login);
        let logout = document.createElement('div');
        logout.setAttribute("id", "logout");
        logout.innerHTML = `<p style="display:flex;flex-direction:row;align-items:center;justify-content:center">
                                <span class="material-icons">logout</span>
                                    Logout
                            </p>`;
        logout.addEventListener('click', function () {
            if (userCheck.signed) {
                var userId = userCheck.userId;
                userCheck.signed = false;
                delete userCheck.userId;
                fetch(`http://localhost:2222/users/logout/${userId}`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(function (res) {
                        res.json().then(function (res) {
                            //console.log("res", res);

                        })
                    })
                    .catch(function (err) {
                        console.log("err:", err);
                    });
                localStorage.setItem("loginValid", JSON.stringify(userCheck));
                window.location.href = "/interntheory/home";
            }
        })
        login_div.append(logout)
    }
}

login();

function change_logout() {
    l++;
    let logout = document.getElementById("logout");
    if (l % 2 == 1) {
        logout.style.display = "block";
    } else {
        logout.style.display = "none";
    }

}


