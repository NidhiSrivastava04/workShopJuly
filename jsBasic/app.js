document.getElementById('loginBtn').addEventListener('click' , function(){
    console.log(document.getElementById('username').value);
    console.log(document.getElementById('password').value);

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    document.getElementById('username_errMsg').innerText = '';
    document.getElementById('email_errMsg').innerText = '';
    document.getElementById('password_errMsg').innerText = '';

    let emailregex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(username == ''){
        // alert('username is required');
        // document.getElementById('username_errMsg').innerText = 'username is required';
        let user = document.getElementById('username_errMsg');
            user.innerText = "username is required";
            user.style.color = "red";
    }else if(email == ''){
        // alert('email is required');
        let email = document.getElementById('email_errMsg');
        email.innerText = "email is required";
        email.style.color = "red";
    }else if(!email.match(emailregex)){
        // alert('Email format is wrong');
        document.getElementById('email_errMsg').innerText = 'Email format is wrong';
        document.getElementById('email_errMsg').style.color = 'red';
    }
    else if(password == ''){
        // alert('Password is required');
        document.getElementById('password_errMsg').innerText = 'Password is required';
    }else{
        alert('submitted')
    }
});
