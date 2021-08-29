function signedIn() {
    var name = "ALBART";
    var nameNew = name.slice(0, 4) + "...";
    var aNew = document.getElementById("mainPageSignA");
    var divNew = document.getElementById("mainPageSignDiv");
    divNew.innerHTML = nameNew;

}

//signedIn();