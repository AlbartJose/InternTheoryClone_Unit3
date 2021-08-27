var rightBox = document.getElementById('rightbox');

var data = JSON.parse(localStorage.getItem('Allwave'));

var internId = localStorage.getItem("interDetailNew");

var sign = JSON.parse(localStorage.getItem("loginValid"));
fetch(`http://localhost:2222/users/${sign.userId}`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (res) {
        res.json().then(function (res) {
            console.log("res", res);
            var pName = document.getElementById("nameProf");
            var pEmail = document.getElementById("emailProf");
            var pPh = document.getElementById("phProf");
            pName.innerHTML = res.firstname + " " + res.lastname;
            pEmail.innerHTML = res.email;
            pPh.innerHTML = res.mobile_no;
        })
    })
    .catch(function (err) {
        console.log("err:", err);
    });





function checkFields() {
    var input = document.getElementById('form1_input').value;
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    var next = document.getElementById('next');
    var alert = document.getElementById('form_alert');

    if (checkbox1.checked == true && checkbox2.checked == true && input != null) {
        var sign = JSON.parse(localStorage.getItem("loginValid"));
        if (sign.signed) {
            console.log(sign.userId);
            fetch(`http://localhost:2222/users/${sign.userId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(function (res) {
                    res.json().then(function (res) {
                        console.log("res", res);
                        if (res.educationDetailsId == undefined) {
                            window.location.href = 'intern_final.html';
                        }
                        else {
                            fetch(`http://localhost:2222/users/internship/${sign.userId}/${internId}`, {
                                method: 'PATCH',
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })
                                .then(function (res) {
                                    res.json().then(function (res) {
                                        console.log("res", res);

                                    })
                                })
                                .catch(function (err) {
                                    console.log("err:", err);
                                });
                            window.location.href = 'dashboard.html';
                        }
                    })
                })
                .catch(function (err) {
                    console.log("err:", err);
                });
            //
        } else {
            window.open("http://127.0.0.1:5500/Unit3/Week5/Day2/frontend_project/html/login_page.html");
        }


    } else {
        alert.style.visibility = 'visible';

    }

}