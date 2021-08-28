function addStudentDetails() {

    let studentsForm = document.getElementById("myForm")

    let firstname = studentsForm.firstname.value
    let lastname = studentsForm.lastname.value
    let email = studentsForm.email.value
    let password = studentsForm.password.value
    let mobile_no = studentsForm.mob_num.value
    let cities = studentsForm.cities.value
    let course = studentsForm.course.value
    let recommend = studentsForm.recommend.value
    let suggest = studentsForm.suggest.value
    let affilate = studentsForm.affilate.value

    let students = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        mobile_no: mobile_no,
        cities: cities,
        course: course,
        recommend: recommend,
        suggest: suggest,
        affilate: affilate,
    }

    body = JSON.stringify(students);
    console.log("students:", students);

    fetch("http://localhost:2222/users/", {
        method: 'POST',
        body: body,
        //additional Info
        //mode:'no-cors',
        headers: {
            "Content-Type": "application/json",
        },

    })
        .then(function (res) {
            res.json().then(function (res) {
                console.log("res", res);
                // let u = formdata.username;
                // let t = res.token;

                // getMyProfile(u,t);

            })

        })
        .catch(function (err) {
            console.log("err:", err);
        });

    alert("You are added successfully");
    window.location.href = "/interntheory/login"
}
