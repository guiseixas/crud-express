const StudentModel = require('../../models/student/StudentModel')

let students = [
    {_id:0, name:"Jefferson", course:"SI", ira:4.5},
    {_id:1, name:"Guilherme", course:"CC", ira:8},
]
let _id = 2

class StudentService{

    //retornar lista de estudantes
    static list(){
        return students;
    }

    //metodo criar estudante
    static create(data){
        let student = new StudentModel(_id++, data.name, data.course, data.ira);
        console.log(student._id)
        students.push(student)
        return student;
    }

    //metodo para atualizar estudante
    static update(_id, data) {
        for (let student of students) {
            if (student._id == _id) {
                student.name = data.name
                student.course = data.course
                student.ira = data.ira
                return student;
            }
        }
        //estudante com o id especificado nao exite
        return null;
    }

    //metodo para deletar estudante
    static delete(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1); //removendo um elemento da posição i
                return true;
            }
        }
        return false;
    }

    //metodo para buscar estudante por id
    static retrieve(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i];
            }
        }
        //estudante nao encontrado
        return {};
    }
}   

module.exports = StudentService