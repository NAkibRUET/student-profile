import { render, screen } from '@testing-library/react';
import { StudentComponent } from '.';
import { IStudent } from '../../DataSource/GetStudentsData';
import { calculateAverage } from '.';

const student: IStudent = {
  city: "Fushë-Muhurr",
  company: "Yadel",
  email: "iorton0@imdb.com",
  firstName: "Ingaberg",
  grades: [
    "78",
    "100",
    "92",
    "86",
    "89",
    "88",
    "91",
    "87"
  ],
  id: "1",
  lastName: "Orton",
  pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
  skill: "Oracle",
  tags: [],
}

const addTag = (id:string, name:string)=>{}

test('renders StudentComponent', () => {
  render(<StudentComponent student={student} addtag={addTag} />);
  const element = screen.getByTestId('studentName');
  expect(element.innerHTML).toEqual(student.firstName + " " + student.lastName);
});

test('calculate average of grades', () =>{
  expect(calculateAverage(student.grades)).toBe(88.875);
})