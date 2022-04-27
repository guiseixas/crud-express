const ProfessorModel = require('../../models/professor/ProfessorModel')

let professors = [
    {_id:0, name:"Livia Almada", university:"UFC", degree:"Mestrado"},
    {_id:1, name:"Francisco Aragão", university:"UFC", degree:"Graduação"}
]
let _id = 2

class ProfessorService  {

    //retornar lista de professores
    static list(){
        return professors;
    }

    //metodo criar professor
    static create(data){
        let professor = new ProfessorModel(_id++, data.name, data.university, data.degree);
        console.log(professor)
        professors.push(professor)
        return professor;
    }

    //metodo para atualizar professor
    static update(_id, data) {
        for (let professor of professors) {
            if (professor._id == _id) {
                professor.name = data.name
                professor.university = data.university
                professor.degree = data.degree
                return professor;
            }
        }
        //professor com o id especificado nao exite
        return null;
    }

    //metodo para deletar professor
    static delete(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                professors.splice(i, 1); //removendo um elemento da posição i
                return true;
            }
        }
        return false;
    }

    //metodo para buscar professor por id
    static retrieve(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                return professors[i];
            }
        }
        //professor nao encontrado
        return {};
    }
}

module.exports = ProfessorService