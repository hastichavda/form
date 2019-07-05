function validation(){

    var user = document.getElementById('user').value;
    var emails = document.getElementById('emails').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var Contact = document.getElementById('Contact').value;
    var Address = document.getElementById('Address').value;

    if(user === "")
    {
        document.getElementById('username').innerHTML = " ** Please fill the name field ";
        return false;
    }
    if((user.length<=2) || (user.length > 20))
    {
        document.getElementById('username').innerHTML = " ** user length must be between 2 and 20";
    }
    if(!isNaN(user))
    {
        document.getElementById('username').innerHTML = " ** only characters are allowed ";
    }
    if(emails == "")
    {
        document.getElementById('email').innerHTML = " ** Please fill the email field ";
        return false;
    }
    if(emails.indexOf('@')<= 0)
    {
        document.getElementById('email').innerHTML = " ** @Invalid position";
        return false;
    }
    if((emails.charAt(emails.length-4)!='.')&&(emails.charAt(emails.length-3)!='.'))
    {
        document.getElementById('email').innerHTML = " **Invalid Position";
        return false;
    }
    if(pass == "")
    {
        document.getElementById('password').innerHTML = " ** Please fill the password field ";
        return false;
    }
    if((pass.length <= 5) || (pass.length >20))
    {
        document.getElementById('password').innerHTML = " ** password length must be between 5 and 20";
        return false;
    }
    if(pass != conpass)
    {
        document.getElementById('password').innerHTML =" ** password are not matched";
        return false;
    }
    if(conpass === "")
    {
        document.getElementById('conpassword').innerHTML = " ** Please re enter the password field ";
        return false;
    }
    if(Contact == "")
    {
        document.getElementById('contact').innerHTML = " ** Please fill the contact field ";
        return false;
    }
    if(isNaN(Contact))
    {
        document.getElementById('contact').innerHTML = " ** user must write disgits only not characters";
        return false;
    }
    if(Contact.length!=10)
    {
        document.getElementById('contact').innerHTML = " ** user must write 10 digits";
        return false;
    }
    if(Address ==         "")
    {
        document.getElementById('add').innerHTML = " ** Please fill the address field ";
        return false;
    }
}