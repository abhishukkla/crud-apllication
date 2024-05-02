
const form = document.getElementById('registration-form');
const studentNameInput = document.getElementById('student-name');
const studentClassInput = document.getElementById('student-class');
const studentAddressInput = document.getElementById('student-address');
const studentContactInput = document.getElementById('student-contact');
const studentList = document.getElementById('student-list');


const students = JSON.parse(localStorage.getItem('students')) || [];


function displayStudents() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>
            <p>Contact: ${student.contact}</p>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;
        studentList.appendChild(listItem);
    });
}


function addStudent(event) {
    event.preventDefault();
    const newStudent = {
        name: studentNameInput.value,
        class: studentClassInput.value,
        address: studentAddressInput.value,
        contact: studentContactInput.value,
    };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
    form.reset();
}

function editStudent(index) {
   
}


function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

form.addEventListener('submit', addStudent);


displayStudents();