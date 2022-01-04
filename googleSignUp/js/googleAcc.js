form = document.getElementById('createform');
form.addEventListener('submit',function(e){
    fname = document.getElementById('fname')
    lname = document.getElementById('lname')
    msgname = document.getElementById('namemsg')
    msggmail = document.getElementById('gmailmsg')
    msgpass = document.getElementById('passwordmsg')
    if(fname.value.length<=0 || lname.value.length<=0){
        msgname.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Enter first name and last name';
        msgname.style.color = 'red';
    }
    else{
        msgname.innerHTML = ''
    }

    gmail = document.getElementById('gmailadd')
    if(gmail.value.length<=0){
        msggmail.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Choose a Gmail address'
        msggmail.style.color = "red"
    }
    else{
        msggmail.innerHTML = '';
    }

    password = document.getElementById('password')
    if(password.value.length<=0){
        msgpass.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Enter a password'
        msgpass.style.color = "red"
    }
    else{
        msgpass.innerHTML = '';
    }
    e.preventDefault();
})