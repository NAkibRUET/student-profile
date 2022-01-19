import React from 'react';
import { useState } from 'react';
import { IStudent } from '../../DataSource/GetStudentsData';
import './style.css';

function calculateAverage(grades: String[]): number{
    let sum:number = 0;
    for(let i=0; i<grades.length; i++){
        let num:number = Number(grades[i]);
        sum += num;
    }
    return sum / grades.length;
}

export const StudentComponent = (props:{ student : IStudent}) => {
    const [isExpanded, setExpand] = useState(false);
    const { student } = props;

    return (
        <>
            <div className="layout">
                <div className='leftLayout'>
                    <div className='studentImage'>
                        <img src={student.pic} height={80} alt='studentimage'/>
                    </div>
                </div>
                
                <div className='centerLayout'>
                    <span className='studentName'>{student.firstName} {student.lastName}</span>
                    <div className='otherInfo'>
                        <h6>Email: {student.email}</h6>
                        <h6>Company: {student.company}</h6>
                        <h6>Skill: {student.skill}</h6>
                        <h6>Average: {calculateAverage(student.grades)}%</h6>
                    
                        {
                            isExpanded?
                            <div className='testMarks'>
                                {
                                    student.grades.map((item, index)=>{
                                        return <h6 key={index}>Test {index + 1}: &emsp; {item}%</h6>;
                                    })
                                }
                                
                            </div>
                            : null
                        }
                    </div>
                    
                </div>
                <div className='rightLayout'>
                    {
                        isExpanded?
                        <div className='iconClass' onClick={()=> setExpand(!isExpanded)}>&#8722;</div>
                        :
                        <div className='iconClass' onClick={()=> setExpand(!isExpanded)}>&#x2b;</div>
                    }
                </div>
            </div>
            
            
        </>
    );
}
