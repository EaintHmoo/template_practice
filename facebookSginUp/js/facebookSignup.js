var fname = document.getElementById('fname')
var fmessage = document.getElementById('fnamemsg')
fname.addEventListener('focus',function(e){
    fmessage.innerText = ''
})
fname.addEventListener('blur',function(e){
    console.log('input name is not focus')
    if(fname.value.length<=0){
        fmessage.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Enter first name'
        fmessage.style.color = 'red'
    }
})
var lname = document.getElementById('lname')
var lmessage = document.getElementById('lnamemsg')
lname.addEventListener('focus',function(e){
    lmessage.innerHTML = ''
})
lname.addEventListener('blur',function(e){
    console.log('input name is not focus')
    if(lname.value.length<=0){
        lmessage.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Enter last name'
        lmessage.style.color = 'red'
    }
})
var gmail = document.getElementById('gmailadd')
var gmessage = document.getElementById('gmailmsg')
gmail.addEventListener('blur',function(e){
    console.log('input name is not focus')
    if(gmail.value.length<=0){
        gmessage.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Enter Mobile number or email'
        gmessage.style.color = 'red'
    }
})
gmail.addEventListener('focus',function(e){
    gmessage.innerHTML = ''
})
var password = document.getElementById('password')
var pmessage = document.getElementById('passwordmsg')
password.addEventListener('blur',function(e){
    console.log('input name is not focus')
    if(password.value.length<=0){
        pmessage.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Enter a password'
        pmessage.style.color = 'red'
    }
})
password.addEventListener('focus',function(e){
    pmessage.innerHTML = ''
})