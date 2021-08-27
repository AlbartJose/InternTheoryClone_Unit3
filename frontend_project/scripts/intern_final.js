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


var user = JSON.parse(localStorage.getItem("loginValid"));
var internId = localStorage.getItem("interDetailNew");

var sub = document.getElementById("final_submit");
sub.addEventListener("click", () => {
    var internFinal = {
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        about: document.getElementById("about").value,
        edu_level: document.getElementById("edu_level").value,
        inst_name: document.getElementById("inst_name").value,
        degree: document.getElementById("degree").value,
        edu_year: document.getElementById("edu_year").value,
        experience_type: document.getElementById("experienceType").value,
        job_role: document.getElementById("job_role").value,
        experience_duration: document.getElementById("experience_duration").value,
        responsibility: document.getElementById("responsibility").value,
        skills: document.getElementById("skills").value,
        preference: document.getElementById("preferences").value,
        hobbies: document.getElementById("hobbies").value,
        achievements: document.getElementById("achievements").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
        languages: document.getElementById("Languages").value
    }

    console.log("Hi");
    body = JSON.stringify(internFinal);
    console.log("internFinal:", internFinal);

    fetch("http://localhost:2222/educationalDetail/", {
        method: 'POST',
        body: body,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (res) {
            res.json().then(function (res) {
                console.log(res);
                fetch(`http://localhost:2222/users/internship/${user.userId}/${internId}`, {
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

                fetch(`http://localhost:2222/users/educational/${user.userId}/${res._id}`, {
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
                window.location.href = "dashboard.html";

            })
        })
        .catch(function (err) {
            console.log("err:", err);
        });
})

