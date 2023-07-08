

let persons = [{
   name: "babar",
   email: "babar@gmail.com",
   pass : "123",
   imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZZYSsnncqDhroX4Ud9rgHCxpDeyLSN5PdG71BuDAk-ulL4CQCFtjL4lKVH26UIW9EOo&usqp=CAU" 
}]
function login_submit(){
    var userEmail = document.getElementById("user_email").value;
    var userPass = document.getElementById("user_pwd").value;
    
    

    var users = persons.find(person => person.email === userEmail && person.pass === userPass);
    
    if(users){
        userString =JSON.stringify(users);
        window.location.href ="profile.html?users =" + encodeURIComponent(userString);
        console.log("Login Successfully");
        
        console.log(users.name);   
        clr();  
    }
    else{
        console.log("Invalid Email or Password");
    }
    
}




function clr(){
    for( let i = 0; i<document.getElementsByTagName("input").length; i++){
    document.getElementsByTagName("input")[i].value="";
    document.getElementById("empty_error").innerText=""
}
}

function signup_submit(){
    userName = document.getElementById("user_name");
    userLName = document.getElementById("user_Lname");
    userAge = document.getElementById("user_age");
    userEmail = document.getElementById("user_email");
    userPwd = document.getElementById("user_pwd");
    userRPwd = document.getElementById("user_repwd");
    

    if( userName.value != "" && userLName.value != "" && userAge.value != "" && userEmail.value != "" && userPwd.value != ""&& userRPwd.value != ""){
        
        document.getElementById("empty_error").innerText="";
        document.getElementById("signup hd").innerText="SIGN IN";
        document.getElementById("chng").innerText="Hello Friends";
        document.getElementById("chng2").innerText="Welcome";
        
        
        

        result = persons.find(obj => obj.email== document.getElementById("user_email").value),
        console.log(result)
        if(result){
    
            document.getElementById("empty_error").innerText="User already exist";
        
    }
        else{
            confirm("Sign Up form successfully submitted");
            persons.push({
                name: document.getElementById("user_name").value,
                lname: document.getElementById("user_Lname").value,
                age: document.getElementById("user_age").value,
                email: document.getElementById("user_email").value,
                pass: document.getElementById("user_pwd").value,
                repass: document.getElementById("user_repwd").value,
                })
                console.log(persons);
            clr();
            document.getElementById("user_name").style.display="none";
            document.getElementById("user_Lname").style.display="none";
            document.getElementById("user_age").style.display="none";
            document.getElementById("user_repwd").style.display="none";
            document.getElementById("LogIn_btn").style.display = "none";
            document.getElementById("SignUp_btn").style.display = "inline";
            document.getElementById("submit_btn").style.display = "none";
            document.getElementById("login_btn2").style.display = "inline";
            
            
        }
    }
    else{
        
        document.getElementById("empty_error").innerText="Fill all the inputs";
    };

}
        function pwd_visible(){
        let pwdInput = document.getElementById("user_pwd");
        let pwdToggle = document.getElementById("pwd_visibility");
        
        document.getElementById("pwd_visibility").style.display="none";
        document.getElementById("pwd2_visibility").style.display="inline";

        if(pwdInput.type === "password"){
            pwdInput.type = "text";
            pwdToggle.classList.remove("fa-regular fa-eye");
            pwdToggle.classList.add("fa-regular fa-eye-slash");
        }
        else{
            pwdInput.type = "password";
            pwdToggle.classList.remove("fa-regular fa-eye-slash");
            pwdToggle.classList.add("fa-regular fa-eye");
        }
        
    }
        function pwd2_visible(){
            let pwdInput = document.getElementById("user_pwd");
            let pwdToggle = document.getElementById("pwd2_visibility");
            document.getElementById("pwd2_visibility").style.display="none";
            document.getElementById("pwd_visibility").style.display="inline";

            if(pwdInput.type === "text"){
                pwdInput.type = "password";
                pwdToggle.classList.remove("fa-regular fa-eye");
                pwdToggle.classList.add("fa-regular fa-eye-slash");
            }
            else{
                pwdInput.type = "password";
                pwdToggle.classList.remove("fa-regular fa-eye-slash");
                pwdToggle.classList.add("fa-regular fa-eye");
            }
        }

    function logIn(){
        document.getElementById("signup hd").innerText="SIGN IN";
        document.getElementById("chng").innerText="Hello Friends";
        document.getElementById("chng2").innerText="Welcome";
        document.getElementById("LogIn_btn").innerText="SIGN IN";
        document.getElementById("b2").style.paddingTop="150px";

        document.getElementById("user_name").style.display="none";
        document.getElementById("user_Lname").style.display="none";
        document.getElementById("user_age").style.display="none";
        document.getElementById("user_repwd").style.display="none";
       
        document.getElementById("LogIn_btn").style.display = "none";
        document.getElementById("SignUp_btn").style.display="inline";
        document.getElementById("submit_btn").style.display="none";
        document.getElementById("login_btn2").style.display="inline"
        
        clr();
        }

        function signUp() {
        document.getElementById("signup hd").innerText = "SIGN UP";
        document.getElementById("chng").innerText = "Start your journey";
        document.getElementById("chng2").innerText = "today";
        document.getElementById("submit_btn").innerText="SUBMIT";
        document.getElementById("b2").style.paddingTop="0";
            
        document.getElementById("user_name").style.display="inline";
        document.getElementById("user_Lname").style.display="inline";
        document.getElementById("user_age").style.display="inline";
        document.getElementById("user_repwd").style.display="inline";
        document.getElementById("user_repwd").style.display="inline";
        document.getElementById("SignUp_btn").style.display="none";
        document.getElementById("LogIn_btn").style.display = "inline";
        document.getElementById("submit_btn").style.display="inline";
        document.getElementById("login_btn2").style.display="none"
        
        clr();  
            
          }

          var urlParams = new URLSearchParams(window.location.search);
          var userString = decodeURIComponent(urlParams.get('persons'));
          var users = JSON.parse(userString);
          document.getElementById("profileName").value = persons.name;
          document.getElementById("profileImg1").src = persons.imgUrl;


          function logout_btn(){
            window.location.href="index.html"
            history.replaceState(null,null,"http://127.0.0.1:5500/index.html");
        }
          

    