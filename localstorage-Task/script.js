function user(){
    let control =document.getElementById("control");
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let pswd = document.getElementById("paswd");
    let cnpswd = document.getElementById("cnpswd");
    if(pswd.value != cnpswd.value){
        let el = document.createElement("span");
        let brk = document.createElement("br");
        el.textContent = "password is not matched";
        el.style.color = "red";
       cnpswd.parentNode.insertBefore(el,control.lastElementChild);
       el.parentNode.insertBefore(brk,control.lastElementChild);
    }
    let LS_fname = localStorage.setItem("firstName",fname.value);
    let LS_lname = localStorage.setItem("LastName",lname.value);
    let LS_email = localStorage.setItem("Email", email.value);
    let userinfo = document.getElementById("userinfo");
    let head = document.getElementById("head");
    let photo = document.getElementById("file")
    let profileimg = document.getElementById("profileimg");
    let freader = new FileReader();
    freader.readAsDataURL(photo.files[0]);
    freader.onloadend = function(event){
        profileimg.style.display ="block"
        profileimg.src = event.target.result;
        localStorage.setItem("url",event.target.result);
        console.log(event.target)
    }
    control.style.display ="none";
    head.style.display = "block";
    let h1 = document.createElement("h1");
    h1.textContent = `${fname.value} ${lname.value}`;
    head.appendChild(h1);
    h1.style.textAlign = "center";
    h1.style.color = "white"
    let h2 = document.createElement("h2");
    h2.textContent = `Dear ${fname.value} ${lname.value}! You have successfully logged in`
    userinfo.appendChild(h2)
    
}