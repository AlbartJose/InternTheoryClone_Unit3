async function sortAll() {
    let internships = await api();
    let data = JSON.parse(localStorage.getItem("sortItems"));
    let data1 = JSON.parse(localStorage.getItem("sortCity"));
    let data2 = JSON.parse(localStorage.getItem("sortType"));
    let data3 = JSON.parse(localStorage.getItem("sortPref"));
    if (data == null) data = [];
    if (data1 == null) data1 = [];
    if (data2 == null) data2 = [];
    if (data3 == null) data3 = [];

    var content = internships;
    console.log("1", content);
    if (data1.length != 0) {
        var datax1 = content.filter(function (el) {
            for (let i = 0; i < data1.length; i++) {
                if (el.city.includes(data1[i])) {
                    return el;
                }
            }
        });

    }
    else {
        var datax1 = content;

    }

    if (data2.length != 0) {
        var datax2 = datax1.filter(function (el) {
            for (let i = 0; i < data2.length; i++) {
                if (el.type == data2[i]) {

                    return el;
                }

            }
        });

    }
    else {
        var datax2 = datax1;

    }
    console.log(data3);
    if (data3.length != 0) {
        var datax3 = datax2.filter(function (el) {
            for (let i = 0; i < data3.length; i++) {
                if (el.preferences == data3[i]) {

                    return el;
                }

            }
        });

    }
    else {
        var datax3 = datax2;

    }
    if (datax3.length == 0) {
        datax3 = buffer;
    }
    console.log("Why", datax3);
    //var content = (JSON.parse(localStorage.getItem('internships')));
    showContent(datax3);



}



function citiesOpen() {
    var div = document.getElementById("citiesPop");
    div.style.display = "block";

}
function citiesClose() {
    var div = document.getElementById("citiesPop");
    div.style.display = "none";
}
function typesOpen() {
    var div = document.getElementById("typesPop");
    div.style.display = "block";

}
function typesClose() {
    var div = document.getElementById("typesPop");
    div.style.display = "none";
}
function prefOpen() {
    var div = document.getElementById("prefPop");
    div.style.display = "block";

}
function prefClose() {
    var div = document.getElementById("prefPop");
    div.style.display = "none";
}





function AppendSortItems(el) {

    var disp_div = document.getElementById("dispfilter");
    var div = document.createElement("div");
    var span = document.createElement("span");
    var btn = document.createElement("button");
    span.innerHTML = el;
    btn.innerHTML = "X";
    div.append(span, btn);
    disp_div.append(div);
    btn.addEventListener('click', function () {
        removeItem(el);
    });
}

function dispSortItems() {
    let data = JSON.parse(localStorage.getItem("sortItems"));
    if (data == null) data = [];
    console.log("-----", data);

    var disp_div = document.getElementById("dispfilter");
    disp_div.innerHTML = null;
    data.forEach(function (el) {
        AppendSortItems(el);
    });
}

function storeCity(x) {
    let arr;
    arr = localStorage.getItem('sortItems');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('sortItems'));
    }

    if (arr.includes(x)) return;
    arr.push(x);
    localStorage.setItem('sortItems', JSON.stringify(arr));



    let arr1;
    arr1 = localStorage.getItem('sortCity');
    if (arr1 == null) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('sortCity'));
    }

    if (arr1.includes(x)) return;
    arr1.push(x);
    localStorage.setItem('sortCity', JSON.stringify(arr1));

    dispSortItems();
    sortAll();
}


function storeType(x) {
    let arr;
    arr = localStorage.getItem('sortItems');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('sortItems'));
    }

    if (arr.includes(x)) return;
    arr.push(x);
    localStorage.setItem('sortItems', JSON.stringify(arr));



    let arr1;
    arr1 = localStorage.getItem('sortType');
    if (arr1 == null) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('sortType'));
    }

    if (arr1.includes(x)) return;
    arr1.push(x);
    localStorage.setItem('sortType', JSON.stringify(arr1));

    dispSortItems();
    sortAll();
}

function storePref(x) {
    let arr;
    arr = localStorage.getItem('sortItems');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('sortItems'));
    }

    if (arr.includes(x)) return;
    arr.push(x);
    localStorage.setItem('sortItems', JSON.stringify(arr));



    let arr1;
    arr1 = localStorage.getItem('sortPref');
    if (arr1 == null) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('sortPref'));
    }

    if (arr1.includes(x)) return;
    arr1.push(x);
    localStorage.setItem('sortPref', JSON.stringify(arr1));

    dispSortItems();
    sortAll();
}

function removeItem(el) {
    let data = JSON.parse(localStorage.getItem("sortItems"));
    var pos = data.indexOf(el);

    data.splice(pos, 1);
    localStorage.setItem('sortItems', JSON.stringify(data));

    let data1 = JSON.parse(localStorage.getItem("sortCity"));
    let data2 = JSON.parse(localStorage.getItem("sortType"));
    let data3 = JSON.parse(localStorage.getItem("sortPref"));

    if (data == null) data = [];
    if (data1 == null) data1 = [];
    if (data2 == null) data2 = [];
    if (data3 == null) data3 = [];

    if (data1.includes(el)) {
        var pos1 = data1.indexOf(el);

        data1.splice(pos1, 1);
        localStorage.setItem('sortCity', JSON.stringify(data1));
        dispSortItems();
        sortAll();
    }
    else if (data2.includes(el)) {
        var pos1 = data2.indexOf(el);

        data2.splice(pos1, 1);
        localStorage.setItem('sortType', JSON.stringify(data2));
        dispSortItems();
        sortAll();
    }
    else if (data3.includes(el)) {
        var pos1 = data3.indexOf(el);

        data3.splice(pos1, 1);
        localStorage.setItem('sortPref', JSON.stringify(data3));
        dispSortItems();
        sortAll();
    }
}


var buffer = [
    {
        img: 'https://assets.interntheory.com/creative/logo.png',
        job_title: 'Develop Your Skillset',
        company_name: 'Online Skill Development Programs',
        type: 'Taught by Industry Experts Internship',
        preferences: 'Certified Courses',
        city: 'Guaranteed Internship Oppertunities',
        stipend: 'None',
    },
];

async function api() {
    let internship = await fetch("http://localhost:2222/internship")
    let data = await internship.json();
    console.log(data)
    return data;
}


var rightBox = document.getElementById('rightbox');
var i = 0;


async function runProgram() {
    dispSortItems();
    sortAll();

}

runProgram()

function showInternships(e) {
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
    block_category.innerHTML = e.preferences;
    block_texts.append(block_category)
    let block_city = document.createElement('p');
    block_city.innerHTML = e.city;
    block_texts.append(block_city)
    let block_stipend = document.createElement('p');
    block_stipend.innerHTML = `Stipend:<a> ${e.stipend}</a>`;
    block_texts.append(block_stipend);
    let share = document.createElement('div');
    share.setAttribute('id', 'share_icon')
    share.innerHTML = "<button id = 'share'><i class ='material-icons' style ='font-size:28px'>share</i></button>";
    share.addEventListener('click', shareToggle);
    block_texts.append(share);
    let view = document.createElement('p');
    view.innerHTML = `<style='text-decoration:none' class = 'view'>VIEW AND APPLY`;
    view.addEventListener('click', function () {
        apply(e);
    });
    block_texts.append(view);
    let timeLimit = document.createElement('p');
    timeLimit.innerHTML = '4 weeks left';
    timeLimit.setAttribute('class', 'duration');
    block.append(timeLimit);

    rightBox.append(block);

    function shareToggle() {
        i++;

        let toggleDiv = document.createElement('div');
        toggleDiv.setAttribute('class', 'toggle_div')
        let fb = document.createElement('a');
        fb.setAttribute('class', 'toggle_buttons');
        fb.href = 'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.interntheory.com%2F';
        fb.innerHTML = "<img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png' />"
        toggleDiv.append(fb);
        let twitter = document.createElement('a');
        twitter.href = 'https://twitter.com/intent/tweet?text=Apply%20for%20Develop%20Your%20Skillset&amp%3Burl=www.interntheory.com%2Finternship%2F%2Fcourses%3Futm_source%3Dinternshipslist&utm_medium=webpage&url=https%3A%2F%2Fwww.interntheory.com%2F';
        twitter.innerHTML = "<img src='https://image.flaticon.com/icons/png/512/124/124021.png' />"
        twitter.setAttribute('class', 'toggle_buttons');
        toggleDiv.append(twitter);
        let google = document.createElement('a');
        google.href = 'https://plus.google.com/up/?continue=https://plus.google.com/share?url%3Dwww.interntheory.com/internship//courses?utm_source%253Dinternshipslist%26utm_medium%3Dwebpage';
        google.innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWAnpTuOOQsWjMdX2TupggGxhoL3k3_ZvFu3oBk4jUll27lU-EPWp2650qUmpWNtJrC4&usqp=CAU' />"
        google.setAttribute('class', 'toggle_buttons');
        toggleDiv.append(google);
        let linkedin = document.createElement('a');
        linkedin.href = 'https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship//courses?utm_source=internshipslist&utm_medium=webpage';
        linkedin.innerHTML = "<img src='https://cdn.iconscout.com/icon/free/png-256/linkedin-160-461814.png' />"
        linkedin.setAttribute('class', 'toggle_buttons');
        toggleDiv.append(linkedin);
        let whatsapp = document.createElement('a');
        whatsapp.href = 'https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship//courses?utm_source=internshipslist&utm_medium=webpage';
        whatsapp.innerHTML = "<img src = 'https://image.flaticon.com/icons/png/512/124/124034.png' />"
        whatsapp.setAttribute('class', 'toggle_buttons');
        toggleDiv.append(whatsapp);
        if (i % 2 == 1) {
            toggleDiv.style.visibility = 'visible';
        } else {
            toggleDiv.style.visibility = 'hidden';
        }
    }
}

function apply(e) {
    localStorage.setItem('interDetailNew', e._id);
    window.location.href = "Allwave AV.html"
}



function showContent(content) {
    rightBox.innerHTML = null;
    for (let i = 0; i < content.length; i++) {
        showInternships(content[i]);
    }
}