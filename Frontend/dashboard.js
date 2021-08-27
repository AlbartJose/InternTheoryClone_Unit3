var dashboard = document.getElementById('dashboard_content');


var applications = [
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg',
        course: 'Jr Sales Engineer',
        companyName: 'Allwave AV',
        type: 'Full Time Internship',
        category: 'Business Development',
        city: 'mumbai',
        stipend: '8000 per month'
        
    },
{
        img: 'https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg',
        course: 'Jr Sales Engineer',
        companyName: 'Allwave AV',
        type: 'Full Time Internship',
        category: 'Business Development',
        city: 'mumbai',
        stipend: '8000 per month'
        
    },
{
        img: 'https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg',
        course: 'Jr Sales Engineer',
        companyName: 'Allwave AV',
        type: 'Full Time Internship',
        category: 'Business Development',
        city: 'mumbai',
        stipend: '8000 per month'
        
    }];

    if (localStorage.getItem('applications') == null) {
    (localStorage.setItem('applications', JSON.stringify(applications)));
}
var courses = [
    {
        img: "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
        course_title:"IT Starter Pack (4 Courses)",
        course_details: "Learn the most demanded skills in the IT industry today. Sig ..."
    },
    {
        img: "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
        course_title:"IT Starter Pack (4 Courses)",
        course_details: "Learn the most demanded skills in the IT industry today. Sig ..."
    },
    {
        img: "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
        course_title:"IT Starter Pack (4 Courses)",
        course_details: "Learn the most demanded skills in the IT industry today. Sig ..."
    },
    {
        img: "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
        course_title:"IT Starter Pack (4 Courses)",
        course_details: "Learn the most demanded skills in the IT industry today. Sig ..."
    }
]



function myApplication() {
    dashboard.innerHTML = null;

    function showApplications(e) {
        let block = document.createElement('div');
        block.setAttribute('class', 'r_blocks1');
    
    
        let block_img = document.createElement('img');
        block_img.src = e.img;
        block.append(block_img);
        let block_texts = document.createElement('div');
        block_texts.setAttribute('class', 'block_texts');
        block.append(block_texts)
        let block_course = document.createElement('span');
        block_course.innerHTML = e.course;
        block_texts.append(block_course)
        let block_company = document.createElement('p');
        block_company.innerHTML = e.companyName;
        block_texts.append(block_company)
        let block_stipend = document.createElement('p');
        block_stipend.innerHTML = `Stipend:<a> ${e.stipend}</a>`;
        block_texts.append(block_stipend);
        let status = document.createElement('a');
        status.setAttribute('class', 'status');
        status.innerHTML = 'PENDING';
        block_texts.append(status);
        let view = document.createElement('p');
        view.setAttribute('class','view_app')
        view.innerHTML = 'VIEW APPLICATION STATUS';
        block_texts.append(view);
        
    



    dashboard.append(block);

        
    }
    var content = applications;
    var n = content.length;
    for (let i = 0; i < n; i++){
        showApplications(content[i]);
        console.log(content[i]);
    }
    
    console.log(content)
 

}
myApplication();

function myCourses() {
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
    catalogue.innerHTML = `<a href = 'online_courses.html' style="color:#087CDD;text-decoration:none">UPGRADE YOURSELF NOW</a>`;
    div.append(catalogue);

    dashboard.append(div);
    console.log(courses.length)

    if (courses.length > 0) {
        smiley.style.display = "none";
        div_p.style.display = "none";
        catalogue.style.display = "none";
        let courses_div = document.createElement('div');
        courses_div.setAttribute('class', 'd_course');
        dashboard.append(courses_div);
        function d_courses(e) {
            let e_course = document.createElement('div');
            e_course.setAttribute('class', 'e_course');
            courses_div.append(e_course);
            let c_img = document.createElement('img');
            c_img.src = e.img;
            e_course.append(c_img);
            let e_title = document.createElement('h3');
            e_title.innerHTML = e.course_title;
            e_course.append(e_title);
            let c_des = document.createElement('p');
            c_des.innerHTML = e.course_details;
            e_course.append(c_des);

        }

        for (let i = 0; i < courses.length; i++) {
            d_courses(courses[i]);
        }

    }


    

}

