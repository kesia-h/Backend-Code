import * as studentService from '../services/studentService.js'

export const fetchAllStudents = async (request, response) => {
    const student = await studentService.fetchAllStudents();
    response.status(200).json(student);
}

export const createStudent = async (req, res) =>{
    const {name, srCode, program} = req.body
    const student = {name, srCode, program};
    

    try{
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}

export const editStudent = async (req, res) =>{
    const {name, srCode, program} = req.body;
    const { id } = req.params;
    const student = {id: parseInt(id), name, srCode, program};

    try {
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}

export const deleteStudent = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedStudent = await studentService.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedStudent
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}