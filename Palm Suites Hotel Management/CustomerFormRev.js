

function validateform(){

    var error = document.getElementById('lblError');
    var istrue=false;
    
    var alamat = document.getElementById('alamat').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var roomnumber = document.getElementById('roomnumber').value;
    
    if(alamat.startsWith('Jalan ') == false){
        error.innerHTML = "alamat harus berawalan dari kata 'Jalan ' ";
        istrue=true;
    }
    else if(phone.length < 5){
        error.innerHTML = "Nomor Telepon harus memiliki 12 digit angka";
        istrue=true;
    }
    else if(email == ""){
        error.innerHTML = "Email harus diisi";
        istrue=true;
    }
    else if(
        email.indexOf('@') == -1 
        || email.indexOf('.com') == -1
        || email.indexOf('@') == 0
        || email.indexOf('.') == 0
    ){
        error.innerHTML = "Format email salah [Ex : aaa@gmail.com]";
        istrue=true;
    }
    else if(roomnumber.length!=3 ){
        error.innerHTML = "Nomor Kamar harus memiliki 3 digit angka";
        istrue=true;
    }
    if(istrue==true){
        event.preventDefault();
    }    
    else{
        var txtConfirmation = 
    "alamat : " + alamat +
    "\nphone : " + phone + 
    "\nemail : " + email +
    "\nroom number : " + roomnumber;
     
    if(confirm(txtConfirmation)){
        alert("Success");
    }
        
    }

    
}