let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let mail=document.getElementById("mail");
let password=document.getElementById("password");

let first_err=document.getElementById("f-err");
let sec_err=document.getElementById("s-err");
let mail_err=document.getElementById("mail-err");
let pass_err=document.getElementById("pass-err");

let first_suj=document.getElementById("f-suj");
let sec_suj=document.getElementById("s-suj");
let mail_suj=document.getElementById("mail-suj");
let pass_suj=document.getElementById("pass-suj");

let submit=document.getElementById("submit");

    submit.addEventListener('click', function(e){
        e.preventDefault();
        if(!fname.value.match(/[A-Za-z]/ig)){
            first_err.style.display="block";
            first_suj.style.display="block";   
             fname.addEventListener('click', function(e){
                first_err.style.display="none";
                first_suj.style.display="none";
             }) 
             return false;
        }
    })
    submit.addEventListener('click', function(e){
        e.preventDefault();
        if(!lname.value.match(/[A-Za-z]/ig)){
            sec_err.style.display="block";
            sec_suj.style.display="block"; 
             lname.addEventListener('click', function(e){
                sec_err.style.display="none";
                sec_suj.style.display="none";  
             })    
             return false; 
        }
    })
    submit.addEventListener('click', function(e){
        if(!mail.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.+[com]+$/)){
            mail_err.style.display="block";
            mail_suj.style.display="block";      
             mail.addEventListener('click', function(e){
                mail_err.style.display="none";
                mail_suj.style.display="none"; 
             })
             return false;
        }
    })
    submit.addEventListener('click', function(e){
        if(!password.value.match(/[A-Za-z0-9]/ig) ||password.value.length<8){
            pass_err.style.display="block";
            pass_suj.style.display="block";  
             password.addEventListener('click', function(e){
                pass_err.style.display="none";
                pass_suj.style.display="none"; 
             })
             return false;
        }
    })

