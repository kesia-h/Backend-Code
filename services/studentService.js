import * as studentModel from '../models/studentModel.js';
import ValidationError from '../utils/ValidationError.js';

export const fetchAllStudents = async () => {
    const student = await studentModel.fetchAllStudents();
    return student;
}

const doesStudentExist = async (student) => {
    let existing;
    if(Object.hasOwn(student, "id")){
        existing = await studentModel.findStudentById(student.id);
    } else {
        existing = await studentModel.findStudentByNameAndSrCodeAndProgram(student);
    }

    if (existing.length > 0) {
        return true;
    }
    return false;
}

export const createStudent = async (student) => {
    if(!student.name || !student.srCode || !student.program){
        throw new ValidationError(404, "Name, SrCode, and Program are required!");
    }

    const studentExists = await doesStudentExist(student);

    if (!studentExists) {
        throw new ValidationError(409, "Student already exists!");
    }
    const studentId = await studentModel.insert(student);
    return studentId;
}

export const updateStudent = async(student) => {
    if (!student.name || !student.srCode || !student.program) {
        throw new ValidationError(404, "Name, SrCode, and Program are required!");
    }

    const studentExists = await doesStudentExist(student);

    if (!studentExists) {
        throw new ValidationError(404, "Student does not exist!");
    }

    const updatedStudent = await studentModel.update(student);
    return updatedStudent;
}

export const deleteStudent = async(id) =>{
    const existing = await studentModel.findStudentById(id);

    if(!studentExists){
        throw new ValidationError(404, "Student does not exist!");
    }

    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}