class Student {
    id
    name
    age

    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }
    setId(id) {
        this.id = id
    }
    getId() {
        return this.id
    }
    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setAge(age) {
        this.age = age
    }
    getAge() {
        return this.age
    }
}
let listStudent = JSON.parse(localStorage.getItem('listStudent'))
if (listStudent == null) {
    listStudent = []
}
function showHome(){
    let studentName = localStorage.getItem('studentName')
    let teacherName = localStorage.getItem('teacherName')
    let bntChange = document.getElementsByClassName('bnt-change')
    if (teacherName != null) {
document.getElementById('rigister').innerHTML = name
        document.getElementById('login').innerHTML = ''
    } else {
        for (let i = 0; i < bntChange.length; i++) {
            bntChange[i].style.display = 'none'
        }
    }
}
function logout(){
localStorage.removeItem('membername')
    location.reload()
}

function showListStudent() {
    let nameStudent = ''
    let classTR = ''
    for (let i = 0; i < listStudent.length; i++) {
        if (i % 2 == 0) {
            classTR = 'table-warning'
        } else {
            classTR = 'table-success'
        }
        nameStudent += `
            <tr>
           <td>${i + 1}</td>
           <td>${listStudent[i].name}</td>
           <td>${listStudent[i].age}</td>
           <td class="bnt-change"><button onclick="showUpdate(${listStudent[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="bi bi-pen-fill"></i></button></td>
            <td class="bnt-change"><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModalDelete" onclick="showUpdate(${listStudent[i].id})"><i class="bi bi-bag-x"></i></button></td>
            </tr>
            `
    }
    document.getElementById('drawtable').innerHTML = nameStudent
}

showListStudent()

function createStudent() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    if (listStudent.length == 0) {
        id = 1
    } else {
        id = listStudent[listStudent.length - 1].id + 1
    }
    let user = new Student(id, name, age)
    listStudent.push(user)
    localStorage.removeItem(`listStudent`)
    localStorage.setItem('listStudent', JSON.stringify(listStudent))
    showListStudent()
}

function findByid(id) {
    for (let i = 0; i < listStudent.length; i++) {
        if (id == listStudent[i].id) {
            return listStudent[i]
        }
    }
    localStorage.setItem('idKey',id)
    showListStudent()
}

let idUpdate = 0

function showUpdate(id) {
    idUpdate = id
    findByid(id)
    console.log('ID++++++++++++++++++++++++++', id)
let student = findByid(id)
    student.name = document.getElementById('name').value
    student.age = document.getElementById('age').value
}

function updateListStudent() {
    let student = findByid(idUpdate)
    let name = document.getElementById('updatename ').value
    let age = document.getElementById('updateage').value
    student.name = name
    student.age = age
    alert('update is successful')
    localStorage.setItem('listStudent', JSON.stringify(listStudent))
    showListStudent()
}
function deleteData(){
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].id == idUpdate){
            listStudent.splice(i,1)
        }
        localStorage.setItem('listStudent',JSON.stringify(listStudent))
    }
    showListStudent()
}
//Modal Edit