const student_btn = document.getElementById("studentBtn")
const company_btn = document.getElementById("companyBtn")
function getstudentlogin() {
  studentTab.style.display = "block"
  student_btn.style.color = "#087CDD"
  student_btn.style.borderBottom = "1.8px solid #087CDD"
}
function getCompanylogin() {
  companyTab.style.display = "block"
  company_btn.style.color = "#087CDD"
  company_btn.style.borderBottom = "1.8px solid #087CDD"
}

company_btn.addEventListener("click", function change() {
  let studentTab = document.getElementById("studentTab")
  let companyTab = document.getElementById("companyTab")
  studentTab.style.display = "none"
  companyTab.style.display = "block"
  company_btn.style.color = "#087CDD"
  student_btn.style.color = null
  company_btn.style.borderBottom = "1.8px solid #087CDD"
  student_btn.style.borderBottom = null

})
student_btn.addEventListener("click", function change() {
  let studentTab = document.getElementById("studentTab")
  let companyTab = document.getElementById("companyTab")
  companyTab.style.display = "none"
  studentTab.style.display = "block"
  student_btn.style.color = "#087CDD"
  company_btn.style.color = null
  student_btn.style.borderBottom = "1.8px solid #087CDD"
  company_btn.style.borderBottom = null
})


function Login() {
  const form = document.getElementById("form");

  //step 1 get the data
  const username = form.email.value;
  const password = form.password.value;

  //step 2 check the data
  //step 1 get the data
  const students = JSON.parse(localStorage.getItem("students"));
  const companies = JSON.parse(localStorage.getItem("companies"));

  //step 2 check the data
  for (var i = 0; i < students.length; i++) {
    let u_s = students[i].email;
    let p_s = students[i].password;

    if (u_s == username && p_s == password) {
      window.location.href = "mainPage.html";
    }
  }

  for (var i = 0; i < companies.length; i++) {
    let u_c = companies[i].email;
    let p_c = companies[i].password;

    if (u_c == username && p_c == password) {
      window.location.href = "mainPage.html"
    } else {
      var wrong = document.getElementById("wrong")
      wrong.style.display = "block"
      // alert("Wrong Email Id and Password")
      document.contact - form.reset();

    }
  }
}
