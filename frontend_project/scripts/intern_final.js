// var name = document.getElementById("name"); //  name is same as username we can connect both to the user name

// var username = document.getElementById("username");
// var usernnumber = document.getElementById("usernnumber");
// //-------------form1-----------------------------------------
// let firstName = document.getElementById("first_name").value;
// let lastName = document.getElementById("last_name").value;
// let email = document.getElementById("email").value;
// let dob = document.getElementById("dob").value;
// let gender = document.getElementById("gender").value;
// let about = document.getElementById("about").value;

// //-------------education details-----------------------------------------

// let edu_level = document.getElementById("edu_level").value;
// let inst_name = document.getElementById("inst_name").value;
// let degree = document.getElementById("degree").value;
// let edu_year = document.getElementById("edu_year").value;

// //-------------experience details-----------------------------------------


// let experience_type = document.getElementById("experience_type").value;
// let job_role = document.getElementById("job_role").value;
// let experience_duration = document.getElementById("experience_duration").value;
// let responsibility = document.getElementById("responsibility").value;
// let edu_level = document.getElementById("edu_level").value;

// //-------------skills------------------------------------------------------

// let skills = document.getElementsById("skills").value;
// let preference = document.getElementsById("preference").value;
// let hobbies = document.getElementsById("hobbies").value;
// let achievements = document.getElementsById("achievements").value;

// //-------------address------------------------------------------------------

// let address = document.getElementsById("address").value;
// let city = document.getElementsById("city").value;
// let pincode = document.getElementsById("pincode").value;
// let languages = document.getElementsById("languages").value;




var internId = String(localStorage.getItem('interDetailNew'));
console.log(internId);

async function api() {
    let internDetail = await fetch(`http://localhost:2222/internDetail/${internId}`)
    let data = await internDetail.json();
    console.log(data);
    return data;
}



var div = document.getElementById("final_submit");
div.addEventListener("click", () => {
    console.log("try");
    window.location.href = "dashboard.html"
})

var internFinal = {
    personalDetails: {
        name: document.getElementById("name"), //  name is same as username we can connect both to the user name
        username: document.getElementById("username"),
        usernnumber: document.getElementById("usernnumber")
    },
    form1: {
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        about: document.getElementById("about").value
    },
    educationalDetails: {
        edu_level: document.getElementById("edu_level").value,
        inst_name: document.getElementById("inst_name").value,
        degree: document.getElementById("degree").value,
        edu_year: document.getElementById("edu_year").value,
    },
    experienceDetails: {
        experience_type: document.getElementById("experience_type").value,
        job_role: document.getElementById("job_role").value,
        experience_duration: document.getElementById("experience_duration").value,
        responsibility: document.getElementById("responsibility").value,
        edu_level: document.getElementById("edu_level").value,
    },
    skills: {
        skills: document.getElementById("skills").value,
        preference: document.getElementById("preferences").value,
        hobbies: document.getElementById("hobbies").value,
        achievements: document.getElementById("achievements").value,
    },
    address: {
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
        languages: document.getElementById("Languages").value
    }
}



