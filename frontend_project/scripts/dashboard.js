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
        
    }];

    if (localStorage.getItem('applications') == null) {
    (localStorage.setItem('applications', JSON.stringify(applications)));
}



function myApplication() {
    dashboard.innerHTML = null;

    function showApplications(e) {
        let block = document.createElement('div');
        block.setAttribute('class', 'r_blocks');
    
    
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
    var content = (JSON.parse(localStorage.getItem('applications')));
    var n = content.length;
    for (let i = 0; i < n; i++){
        showApplications(content[i]);
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


    

}

