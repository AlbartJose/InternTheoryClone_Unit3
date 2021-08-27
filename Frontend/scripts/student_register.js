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
    let arr;

    arr = localStorage.getItem("students");


    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem("students"));
    }

    arr.push(students);

    localStorage.setItem("students", JSON.stringify(arr));
    alert("You are added successfully")
    window.location.href = "login_page.html"
}
