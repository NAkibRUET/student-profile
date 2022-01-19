import axios from "axios";
import { base_url } from "../config";

export interface IStudent {
    city: string;
    company: string;
    email: string;
    firstName: string;
    grades: string[];
    id: string;
    lastName: string;
    pic: string;
    skill: string;
    tags: string[];
}
export interface IStudentList {
    students: IStudent[];
}
export async function getStudents() : Promise<IStudentList|void> {
    try{
        const response = await axios.get<IStudentList>(`${base_url}/assessment/students`);
        if(response.status >=200 && response.status < 300){
            let students: IStudentList = response.data;
            return students;
        } 
    } catch(error){
        console.log(error);
    }   
}