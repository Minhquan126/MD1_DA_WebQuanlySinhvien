class UserData{
    userName;
    userEmail;
    userPassword;
    repeatPassword;

    constructor(userName, userEmail, userPassword, repeatPassword) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.repeatPassword = repeatPassword;
    }
    setUsername(userName){
        this.userName = userName
    }
    getUserName(){
        return this.userName
    }
    setUseremail(userEmail){
        this.userEmail = userEmail
    }
    getUseremail(){
        return this.userEmail
    }
    setUserpassword(userPassword){
        this.userPassword = userPassword
    }
    getUserpassword(){
        return this.userPassword
    }
    setRepeatpassword(repeatPassword){
        this.repeatPassword = repeatPassword
    }
    getRepeatpassword(){
        return this.repeatPassword
    }
}
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let repeatPasswordInput = document.getElementById('repeatpassword')
let isCheck
let user
let arr = JSON.parse(localStorage.getItem('listUser'))
console.log(typeof arr)
if (arr == null){
    arr = []
}
function checkValidate(){
let check = true
    let userName = nameInput.value
    let userEmail = emailInput.value
    let userPassword = passwordInput.value
    let userRepeatpassword = repeatPasswordInput.value
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (userName.trim() === ''){
        document.getElementById('failname').innerText = 'The name is required'
        check = false
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (userName==arr[i].userName){
                document.getElementById('failname').innerText = 'Your account already exists'
                return
            }
        }
        document.getElementById('failname').innerText = ''
    }
    if (userEmail.trim() === ''){
        document.getElementById('failemail').innerText = 'The email is required'
        check = false
    }
     else if (checkEmail.test(userEmail)){
        document.getElementById('failemail').innerText = ''
    } else {
        document.getElementById('failemail').innerText = 'invalid email address'
        check = false
    }
     if (userPassword.trim() === ''){
         document.getElementById('failpassword').innerText = 'The password is required'
         check = false
     } else if(userPassword.length < 6){
         document.getElementById('failpassword').innerText = 'The password is short'
         check = false
     } else {
         document.getElementById('failpassword').innerText = ''
     }
     if (userRepeatpassword == userPassword){
         document.getElementById('failrepeatpassword').innerText = ''

     } else {
         document.getElementById('failrepeatpassword').innerText = 'the repeat password is not exist'
         check = false
     }
     if (check){
         isCheck = true
         user = new UserData(userName, userEmail,userPassword,userRepeatpassword)
     } else {
         isCheck = false
     }
     checkUserName()
}
function submitData(){
    if (isCheck){
        arr.push(user)
        // localStorage.setItem()('listUser',JSON.stringify(arr))
        localStorage.setItem('listUser',JSON.stringify(arr))
        alert('successful rigister')
        location.href = '../login/login.html'
    }
}
