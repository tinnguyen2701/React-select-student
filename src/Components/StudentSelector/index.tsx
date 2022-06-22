import React, { useState } from "react";
import { dataSourceStudent, selectedStudentIds } from "../../Data/index.tsx";
import TableSelector from "../TableSelector/index.tsx";

export interface Student {
    id: number,
    firstName: string,
    lastName: string,
    isAssigned: boolean
}

// TODO: need types columnsType<Student>
export const columnStudents = [
    {
        key: "",
        title: "",
        dataIndex: ""
    },
    {
        key: "id",
        title: "Id",
        dataIndex: "id"
    },
    {
        key: "firstName",
        title: "First Name",
        dataIndex: "firstName"
    },
    {
        key: "lastName",
        title: "Last Name",
        dataIndex: "lastName"
    },
    {
        key: "assigned",
        title: "Assigned",
        dataIndex: "isAssigned"
    }
]

const StudentSelector: React.FC = () => {
    const [disabledIds] = useState<number[]>(dataSourceStudent.filter(student => student.isAssigned === true).map(_ => _.id));
    
    const [selectedCurrentIds, setSelectedCurrentIds] = useState<number[]>(selectedStudentIds);
    
    const onChangeSelected = (id: number) => {
        if (selectedCurrentIds.indexOf(id) >= 0) {
            setSelectedCurrentIds(selectedIds => selectedIds.filter(selectedId => selectedId !== id));
        }
        else {
            setSelectedCurrentIds([...selectedCurrentIds, id]);
        }
    }

    return (
        <>
            <TableSelector
                columns={columnStudents} 
                datasource={dataSourceStudent} 
                selectedCurrentIds={selectedCurrentIds}
                disabledIds={disabledIds}
                onChangeSelected={onChangeSelected} />
        </>
    )
}


export default StudentSelector;