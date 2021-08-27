function go() {
    window.location.href = "internship.html";

}


function storeCity() {
    var x = document.getElementById("city").value;
    console.log(x);
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
    go();
}


function storeType() {
    var x = document.getElementById("type").value;
    console.log(x);
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
    go();

}

function storePref() {
    var x = document.getElementById("pref").value;
    console.log(x);
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
    go();

}