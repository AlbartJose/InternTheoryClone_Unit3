var rightBox = document.getElementById('rightbox');
// var internDetail = {
//     openings: 14,
//     duration: '6 months',
//     startDate: '20th Jan 2021 - 30th Jul 2021',
//     applicationDeadline: '14 Sep 2021',
//     stipend1: '8000 per month',
//     descriptionContent : `We are looking for apprentices to provide formal classroom and on-the-job training under experienced mentors which includes pay progression and certification showing he or she is fully proficient to do a job. In the vast majority of the cases these apprentices will transition directly into permanent employment after the 6 month program.`,
//     content1: "AllWave is an industry-leading AV solutions provider that delivers custom-built & innovative collaborative, digital media, broadcasting, and electronic security solutions to a clientele spread across PAN INDIA. Our team of technical experts works side-by-side with Industry Specialists, AV/IT consultants, Project management consultants, end-users and Space Designers to devise custom solutions that enhance your operations, improve collaboration, increase productivity, and drive ROI.",
//     content2: "We scale our technical products and services to any need and develop solutions for a large number of corporate enterprises, homeowners, auditoriums, educational institutions, and training centers. We also partner with the most innovative communication technology providers in the industry to give you access to the most advanced, secure, and effective AV solutions.",
//     locations: ["Mumbai","Chennai"],
//     responsibilities : ["Work to promote the All Wave brand to Architects, Interior Designers, Project Consultants and IT partners", "Boots on the Ground” approach to do 3-4 meetings a day", "Will report on the CRM", "Meet clients and gather requirements well through good questioning/ reasoning", "Demonstrate Audio Video products and solutions.", "Speak confidently, liason with the internal design team and explain the solution back<br>to the client with demos/literature etc", "One-2 hours a day for LinkedIn, Whatsapp campaigns etc", "Responsible for a product/ solution marketing outreach and sale", "Post sales closure, work with the dispatch team for billing and logistics (load orders on CRM)"],
//     preferredSkills:["learner","Pleasent Personality","Ability to work in a fast-paced"],
//     internshipId: {
//         img: 'https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg',
//         course: 'Jr Sales Engineer',
//         companyName: 'Allwave AV',
//         type: 'Full Time Internship',
//         category: 'Business Development',
//         city: 'mumbai',
//         stipend: 8000
//     }
// };
    
async function api() {
    let internDetail = await fetch("http://localhost:5067/internDetail")
    let data = await internDetail.json();
    console.log(data)
    return data;
}
async function runProgram() {
    let internDetail = await api()
    // var description = 
    //     {
    //     openings: 14,
    //     duration: '6 months',
    //     startDate: '20th Jan 2021 - 30th Jul 2021',
    //     applicationDeadline: '14 Sep 2021',
    //     stipend: '8000 per month'

    // };
    //     if(localStorage.getItem('Allwave')==null){
    //         localStorage.setItem('Allwave', JSON.stringify(Allwave));
    //     }
    //     if (localStorage.getItem('description') == null) {
    //         localStorage.setItem('description', JSON.stringify(description));
    // }
    //     console.log(JSON.parse(localStorage.getItem('description')))
    

    let data = internDetail;
    console.log(data)
    // var des = JSON.parse(localStorage.getItem('description'));
    // console.log(des);

    function showData(e) {
        let status = document.createElement('p');
        status.innerHTML = `Application Status:<p id="result">PENDING</p>`;
        status.setAttribute('class', 'status');
        rightBox.append(status);
        let block = document.createElement('div');
        block.setAttribute('class', 'r_blocks')
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
        let block_type = document.createElement('p');
        block_type.innerHTML = e.type;
        block_texts.append(block_type)
        let block_category = document.createElement('p');
        block_category.innerHTML = `Internship Category: <a>${e.preferences}<a>`;
        block_texts.append(block_category);
        rightBox.append(block);
    }
    
    showData(data[1].internshipId);

    function showDescription(e) {
        let block_2 = document.createElement('div');
        block_2.setAttribute('class', 'block_2');
        rightBox.append(block_2);
        let h1 = document.createElement('p');
        h1.setAttribute('class', 'block_2_p');
        h1.innerHTML = `Openings:<p class='block_2_p2'><strong>${e.openings}</strong></p>`;
        block_2.append(h1)
        let h2 = document.createElement('p');
        h2.setAttribute('class', 'block_2_p');
        h2.innerHTML = `Duration:<p class='block_2_p2'><strong>${e.duration}</strong></p>`;
        block_2.append(h2)
        let h3 = document.createElement('p');
        h3.setAttribute('class', 'block_2_p');
        h3.innerHTML = `Start Date:<p class='block_2_p2'><strong>${e.startDate}</strong></p>`;
        block_2.append(h3)
        let h4 = document.createElement('p');
        h4.setAttribute('class', 'block_2_p');
        h4.innerHTML = `Application Deadline:<p class='block_2_p2' style='margin-left:124px !important;'><strong>${e.applicationDeadline}</strong></p>`;
        block_2.append(h4)
        let h5 = document.createElement('p');
        h5.setAttribute('class', 'block_2_p');
        h5.innerHTML = `Stipend:<p class='block_2_p2'><strong>${e.stipend1}</strong></p>`;
        block_2.append(h5)



    }

    showDescription(data[1]);

    var descriptionContent = `We are looking for apprentices to provide formal classroom and on-the-job training under experienced mentors which includes pay progression and certification showing he or she is fully proficient to do a job. In the vast majority of the cases these apprentices will transition directly into permanent employment after the 6 month program.`

    function internshipDescription(e) {
        let block_3 = document.createElement('div');
        block_3.setAttribute('class', 'block_3');
        rightBox.append(block_3);
        let head = document.createElement('h4');
        head.innerHTML = 'Internship Description';
        block_3.append(head);
        let content = document.createElement('span');
        content.innerHTML = `<p>${e.description}</p>`
        block_3.append(content);
    }
    internshipDescription(data[1]);


    //----------------------------------------------------------------------------------------------------------------------------------------------\\
    function responsibility(e) {
        let block_4 = document.createElement('div');
        block_4.setAttribute('class', 'block_4');
        rightBox.append(block_4);
        let head = document.createElement('p');
        head.innerHTML = `<p style ="size:14px"><strong style ="size:14px">Roles and Responsibilities</strong></p>`;
        block_4.append(head);
        let content = document.createElement('div');
        content.setAttribute('class', 'ol');
        let ul = document.createElement('ul');
        content.append(ul);
        for (let i = 0; i < e.responsibilities.length; i++) {
            let cd = document.createElement('div')
            cd.innerHTML = `<li>${e.responsibilities[i]}</li>`
            ul.append(cd);
        }
        block_4.append(content);
    }
   
    
        responsibility(data[1]);
   



    function perks(e) {
        let block_5 = document.createElement('div');
        block_5.setAttribute('class', 'block_5');
        rightBox.append(block_5);
        let head1 = document.createElement('h4');
        head1.innerHTML = 'Perks'
        block_5.append(head1);
        let content1 = document.createElement('p');
        content1.setAttribute('class', 'block_5_p1')
        content1.innerHTML = 'Certificate of Internship, Letter of Recommendation, Possibility of Pre Placement Offer';
        block_5.append(content1);
        let head2 = document.createElement('h4');
        head2.innerHTML = 'Prefered Skills';
        block_5.append(head2);
        let content2 = document.createElement('div');
        content2.setAttribute('class', 'block_5_c')
        let cont = document.createElement('div');
        cont.setAttribute('class', 'loc')
        content2.append(cont);
        for (let j = 0; j < e.preferredSkills.length; j++) {
            let ct = document.createElement('div')
            ct.innerHTML = `<p class ='block_5_p'>${e.preferredSkills[j]}</p>`;
            cont.append(ct);
        }
        block_5.append(content2);


    }
    perks(data[1]);
    // var companyDescriptions = {
    //     content1 : "AllWave is an industry-leading AV solutions provider that delivers custom-built & innovative collaborative, digital media, broadcasting, and electronic security solutions to a clientele spread across PAN INDIA. Our team of technical experts works side-by-side with Industry Specialists, AV/IT consultants, Project management consultants, end-users and Space Designers to devise custom solutions that enhance your operations, improve collaboration, increase productivity, and drive ROI.",
    //     content2: "We scale our technical products and services to any need and develop solutions for a large number of corporate enterprises, homeowners, auditoriums, educational institutions, and training centers. We also partner with the most innovative communication technology providers in the industry to give you access to the most advanced, secure, and effective AV solutions.",
    //     location : ["Mumbai"]
    // }

    function companyDescription(cd) {
        let block_6 = document.createElement('div');
        block_6.setAttribute('class', 'block_6');
        rightBox.append(block_6);
        let head = document.createElement('h4');
        head.innerHTML = 'Company Description';
        block_6.append(head);
        let content = document.createElement('span');
        content.innerHTML = `<p>${cd.content1}</p>`
        block_6.append(content);
        let content2 = document.createElement('p');
        content2.innerHTML = cd.content2
        content.appendChild(content2);
        let location = document.createElement('div');
        location.setAttribute('class', 'loc')
        // location.setAttribute('class', 'id_location');
        let cont = document.createElement('div');
        cont.setAttribute('class', 'loc')
        location.append(cont);
        for (let j = 0; j < cd.locations.length; j++) {
            let ct = document.createElement('div')
            ct.innerHTML = `<p class ='block_5_p'>${cd.locations[j]}</p>`;
            cont.append(ct);
        }
        // location.innerHTML =`<p class ='block_5_p'>${cd.locations[0]}</p>` ; //for loop
        block_6.append(location);
    }
    companyDescription(data[1]);

    function apply() {
        let block_7 = document.createElement('div');
        block_7.setAttribute('class', 'block_7');
        rightBox.append(block_7);
        let apply = document.createElement('button');
        apply.setAttribute('class', 'apply')
        apply.addEventListener('click', final);
        apply.innerHTML = 'APPLY';
        block_7.append(apply);
        let back = document.createElement('a');
        back.setAttribute('class', 'block_7_p');
        back.href = 'internship.html';
        back.innerHTML = `<p>BACK TO INTERNSHIPS</p>`;
        block_7.append(back);
    
        function final() {
            window.location.href = 'submit1.html';
        }

    }
    apply();
}
runProgram()