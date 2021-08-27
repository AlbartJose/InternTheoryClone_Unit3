function addCompanyDetails(){
    let companiesDetails = []

    let companiesForm = document.getElementById("companyForm")

    let firstname = companiesForm.firstname.value
    let lastname = companiesForm.lastname.value
    let company = companiesForm.company.value
    let email = companiesForm.email.value
    let password = companiesForm.password.value
    let mobile_no = companiesForm.mob_num.value
    let recommend = companiesForm.recommend.value

    let companies = {
        firstname:firstname,
        lastname:lastname,
        company:company,
        email:email,
        password:password,
        mobile_no:mobile_no,
        recommend:recommend,
    }
    let arr;
    
    arr = localStorage.getItem("companies");
    

    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem("companies"));
    }
    
    arr.push(companies);
    
    localStorage.setItem("companies", JSON.stringify(arr));

}