import React from "react";
import { useEffect, useState } from "react";
import { StudentComponent } from "../../Component/StudentComponent";
import { getStudents } from "../../DataSource";
import { IStudent, IStudentList } from "../../DataSource/GetStudentsData";

const Home = () => {
    const [studentList, setStudentList] = useState<IStudent[]>([]);
    useEffect(() => {
        getStudents().then((data)=>{
            if(data){
                let student:IStudentList = data; 
                setStudentList(student.students);
            }
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div className="" style={{width:"550px", height: "450px", margin: "200px auto", overflowY:"auto", overflowX:"hidden", borderRadius:"5px", boxShadow: "1px 1px 4px 0px rgba(71,71,71,0.75)"}}>
            {studentList.length > 0?
                studentList.map((item)=>{
                    return <StudentComponent key={item.id} student={item}/>
                })
            :null
            }
            
        </div>
    );
}
export default Home;