/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useEffect, useState } from "react";
import { StudentComponent } from "../StudentComponent";
import { getStudents } from "../../DataSource";
import { IStudent, IStudentList } from "../../DataSource/GetStudentsData";

const StudentListComponent = () => {
    const [studentList, setStudentList] = useState<IStudent[]>([]);
    const [filteredStudentList, setFilteredStudentList] = useState<IStudent[]>([]);
    const [nameFilterKey, setNameFilterKey] = useState("");
    const [tagFilterKey, setTagFilterKey] = useState("");
    const filterStudentList = () =>{
        const filteredList = studentList.filter((e) => {
            // Name = FirstName + LastName
            let name = e.firstName.toLocaleLowerCase() + " " + e.lastName.toLocaleLowerCase();

            // Making a string with all the tag list to make it easier to search
            let tag = "";
            if(e.tags){
                for(let i=0; i<e.tags.length; i++){
                    tag += e.tags;
                    tag += " "; 
                }
            }
            return name.includes(nameFilterKey.toLocaleLowerCase()) && tag.includes(tagFilterKey.toLocaleLowerCase()) ;
        })
        setFilteredStudentList(filteredList);
    }

    const addTag=(id:string, name:string)=>{
        const i = studentList.findIndex(e=> e.id === id);
        let tempList = [...studentList];
        if(tempList[i].tags === undefined)tempList[i].tags = [];
        tempList[i].tags.push(name);

        setStudentList(tempList);
    }

    // Fetching Data from student API
    useEffect(() => {
        getStudents().then((data)=>{
            if(data){
                let student:IStudentList = data; 
                setStudentList(student.students);
            }
        });
    },[]);

    // Checking if there is any change in "Search by name" and "Search by tag" input field
    useEffect(()=>{
        filterStudentList();
    }, [nameFilterKey]);

    useEffect(()=>{
        filterStudentList();
    }, [tagFilterKey]);


    
    return (
        <div className="studentList center">
            <div className="group" >
                <input required type="text" onChange={(e)=> setNameFilterKey(e.target.value)}/>
                <span className="highlight">
                </span><span className="bar"></span>
                <label>Search by name</label>
            </div>
            <div className="group" >
                <input required type="text" onChange={(e)=> setTagFilterKey(e.target.value)} />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Search by tag</label>
            </div>
            
            {nameFilterKey === "" && tagFilterKey === ""?
            // Showing Full List
            studentList.length > 0?
                studentList.map((item)=>{
                    return <StudentComponent key={item.id} student={item} addtag={addTag} />
                })
                :null
            : // Showing Filtered List
            studentList.length > 0?
                filteredStudentList.map((item)=>{
                    return <StudentComponent key={item.id} student={item} addtag={addTag}/>
                }): null
            }
        </div>
    );
}
export default StudentListComponent;