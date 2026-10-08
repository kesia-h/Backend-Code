import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
    const student = await studentModel.fetchAllStudents();
    return student;
}

export const createStudent = async (student) => {
    const studentId = await studentModel.insert(student);
    return studentId;
}