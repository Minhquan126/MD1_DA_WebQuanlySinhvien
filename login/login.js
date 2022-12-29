let checkValidate = true;
let arr = JSON.parse(localStorage.getItem('listUser'))
let userName = document.getElementById('username')
let userPassword = document.getElementById('userpassword')
let teacherPassword = document.getElementById('teacherpassword')
console.log(arr)
if (arr == null) {
    arr = []
}

function validate() {
   let name = userName.value
  let   password = userPassword.value

    if (name.trim() === '' || password.trim() === '') {
        document.getElementById('failall').innerText = 'Is required'
        checkValidate = false
    } else {
        document.getElementById('failall').innerText = ''
        checkValidate = true
    }
}
function login() {
    let name = userName.value
    let   password = userPassword.value
    let  teacherPass = teacherPassword.value
    if (checkValidate) {
        let checkLogin = false

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userName == name && arr[i].userPassword == password && teacherPass == 'minhquan') {
                checkLogin = true
                let teacherName = arr[i].userName
                localStorage.setItem('teacherName ', teacherName)
                alert('hello teacher' + teacherName)
                break;
            } else if (arr[i].userName == name && arr[i].userPassword == password){
                checkLogin = true
                let studentName = arr[i].userName
                localStorage.setItem('studentName',studentName)
                alert('login is successful')
                break;
            } else {
                checkLogin = false
            }
        }
        console.log('checklogin=============================',checkLogin)
        if (checkLogin){
            location.href = '../listStudent/listStudent.html'
        }
    }
}

function showHome(){
    let teacherName = localStorage.getItem('teacherName')
    let studentName = localStorage.getItem('studentName')
    let bntChange = document.getElementsByClassName('bnt-change')
    if (teacherName != null){
        console.log('teachername+++++++++++++++++++',teacherName)
        document.getElementById('teacher').innerHTML = teacherName
    } else if( studentName != null){
        document.getElementById('student').innerHTML = studentName
        for (let i = 0; i < bntChange.length; i++) {
            bntChange[i].style.display = 'none'
        }
    }
    // if (checkDisplay){
    //     document.getElementById('member').innerText = teacherName
    // } else {
    //     document.getElementById('member').innerText = studentName
    // }
}
showHome()
function logout(){
    localStorage.removeItem('teacherName')
    localStorage.removeItem('studentName')
    location.reload()
}
