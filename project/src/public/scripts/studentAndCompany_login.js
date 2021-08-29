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

  let formdata = {
    username: username,
    password: password
  };

  body = JSON.stringify(formdata);
  console.log("formdata:", formdata);

  fetch("http://localhost:2222/users/login", {
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
        if (res.valid) {
          var sign = JSON.parse(localStorage.getItem("loginValid"));
          sign.signed = true;
          sign.userId = res.user._id;
          localStorage.setItem("loginValid", JSON.stringify(sign));
          window.location.href = "/interntheory/home";
        }
        else alert("You have entered the wrong uersname or password, Try again");
      })

    })
    .catch(function (err) {
      console.log("err:", err);
    });

}
