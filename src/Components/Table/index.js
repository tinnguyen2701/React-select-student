import React, { useState } from 'react';

import Row from '../Row';
import Header from '../Header';


function Table() {
    const [students, setStudents] = useState([
        {id: 1, firstName: 'student', lastName: '01', isAssigned: true},
        {id: 2, firstName: 'student', lastName: '02', isAssigned: true},
        {id: 3, firstName: 'student', lastName: '03', isAssigned: true},
        {id: 4, firstName: 'student', lastName: '04', isAssigned: false},
        {id: 5, firstName: 'student', lastName: '05', isAssigned: true},
        {id: 6, firstName: 'student', lastName: '06', isAssigned: false},
        {id: 7, firstName: 'student', lastName: '07', isAssigned: false},
        {id: 8, firstName: 'student', lastName: '08', isAssigned: false},
        {id: 9, firstName: 'student', lastName: '09', isAssigned: false},
        {id: 10, firstName: 'student', lastName: '10', isAssigned: true}
    ]);

    const [selectedIds, setSelectedIds] = useState([1, 2, 3, 5, 10]);

    function handlechangeSelected(id) {
        if (selectedIds.indexOf(id) >= 0) {
            setSelectedIds(selectedIds => selectedIds.filter(selectedId => selectedId !== id));
        }
        else {
            setSelectedIds([...selectedIds, id]);
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <Header />
                </thead>

                <tbody>
                    {students.map(student => (
                        <Row 
                            key={student.id} 
                            student={student} 
                            isChecked = {selectedIds.indexOf(student.id) >= 0} 
                            changeSelected = {handlechangeSelected} />
                    ))}
                </tbody>
            </table>
            
            <div className='total-student-selected'>{selectedIds.length} {selectedIds.length > 0 ? "students" : "student"} have selected</div>
        </div>
    );
}

export default Table;