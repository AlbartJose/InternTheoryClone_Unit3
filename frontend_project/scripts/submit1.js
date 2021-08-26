var rightBox = document.getElementById('rightbox');

var data = JSON.parse(localStorage.getItem('Allwave'));

function checkFields() {
    var input = document.getElementById('form1_input').value;
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    var next = document.getElementById('next');
    var alert = document.getElementById('form_alert');

    if (checkbox1.checked == true && checkbox2.checked == true && input != null) {
        window.location.href = 'intern_final.html';
        
    } else {
        alert.style.visibility = 'visible';
      
    }
    
}