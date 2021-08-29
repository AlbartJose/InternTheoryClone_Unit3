var user = {};

var sign = JSON.parse(localStorage.getItem("loginValid"));
fetch(`http://localhost:2222/users/${sign.userId}`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (res) {
        res.json().then(function (res) {
            //console.log("res", res);
            user = res;
            var pName = document.getElementById("nameProf");
            var pEmail = document.getElementById("emailProf");
            var pPh = document.getElementById("phProf");
            pName.innerHTML = res.firstname + " " + res.lastname;
            pEmail.innerHTML = res.email;
            pPh.innerHTML = res.mobile_no;
            applicationArr(res);

        })
    })
    .catch(function (err) {
        console.log("err:", err);
    });

var dashboard = document.getElementById('dashboard_content');

async function applicationArr(obj) {
    dashboard.innerHTML = null;
    console.log(obj.internshipIds);
    var content = obj.internshipIds;
    var n = content.length;
    for (let i = 0; i < n; i++) {
        await fetch(`http://localhost:2222/internship/${content[i]}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (res) {
                res.json().then(function (res) {
                    console.log("resCon", res);
                    showApplications(res);

                })
            })
            .catch(function (err) {
                console.log("err:", err);
            });


        // showApplications(content[i]);
        // console.log(content[i]);
    }

}


function myApplication() {
    fetch(`http://localhost:2222/users/${sign.userId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (res) {
            res.json().then(function (res) {
                console.log("res", res);
                applicationArr(res);
            })
        })
        .catch(function (err) {
            console.log("err:", err);
        });

}

function showApplications(e) {
    let block = document.createElement('div');
    block.setAttribute('class', 'r_blocks1');


    let block_img = document.createElement('img');
    block_img.src = e.image;
    block.append(block_img);
    let block_texts = document.createElement('div');
    block_texts.setAttribute('class', 'block_texts');
    block.append(block_texts)
    let block_course = document.createElement('span');
    block_course.innerHTML = e.job_title;
    block_texts.append(block_course)
    let block_company = document.createElement('p');
    block_company.innerHTML = e.company_name;
    block_texts.append(block_company)
    let block_stipend = document.createElement('p');
    block_stipend.innerHTML = `Stipend:<a> ${e.stipend}</a>`;
    block_texts.append(block_stipend);
    let status = document.createElement('a');
    status.setAttribute('class', 'status');
    status.innerHTML = 'PENDING';
    block_texts.append(status);
    let view = document.createElement('p');
    view.setAttribute('class', 'view_app')
    view.innerHTML = 'VIEW APPLICATION STATUS';
    block_texts.append(view);





    dashboard.append(block);


}


function myCourses() {
    console.log(user);
    dashboard.innerHTML = null;

    let div = document.createElement('div');
    div.setAttribute('class', 'courses');

    let smiley = document.createElement('div');
    smiley.setAttribute('class', 'smiley');
    smiley.innerHTML = `<span class="material-icons" style="color:#087CDD;font-size:30px">sentiment_satisfied_alt</span>`;
    div.append(smiley);

    let div_p = document.createElement('p');
    div_p.innerHTML = 'Not picked any course yet?'
    div.append(div_p);

    let catalogue = document.createElement('div');
    catalogue.setAttribute('class', 'catalogue')
    catalogue.innerHTML = `<a href = '/interntheory/courses' style="color:#087CDD;text-decoration:none">UPGRADE YOURSELF NOW</a>`;
    div.append(catalogue);
    dashboard.append(div);

    if (user.courseIds.length > 0) {
        smiley.style.display = "none";
        div_p.style.display = "none";
        catalogue.style.display = "none";
        let courses_div = document.createElement('div');
        courses_div.setAttribute('class', 'd_course');
        courses_div.setAttribute('id', 'd_course');

        dashboard.append(courses_div);

        showCourses(user.courseIds);
    }
}



function showCourses(courses) {
    console.log("cou", courses);
    for (let i = 0; i < courses.length; i++) {
        fetch(`http://localhost:2222/courses/${courses[i]}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (res) {
                res.json().then(function (res) {
                    console.log("resCou", res);
                    d_courses(res);

                })
            })
            .catch(function (err) {
                console.log("err:", err);
            });
    }

}


function d_courses(e) {
    let courses_div = document.getElementById("d_course");
    let e_course = document.createElement('div');
    e_course.setAttribute('class', 'e_course');
    courses_div.append(e_course);
    let c_img = document.createElement('img');
    c_img.src = e.img_src;
    e_course.append(c_img);
    let e_title = document.createElement('h3');
    e_title.innerHTML = e.name;
    e_course.append(e_title);
    let c_des = document.createElement('p');
    c_des.innerHTML = e.description;
    e_course.append(c_des);
}

