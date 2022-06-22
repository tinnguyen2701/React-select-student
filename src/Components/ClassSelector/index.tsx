import React, { useState } from "react";
import { dataSourceClass, selectedClassIds } from "../../Data/index.tsx";
import TableSelector from "../TableSelector/index.tsx";

export interface Class {
    id: number,
    code: string,
    className: string,
    status: boolean
}

// TODO: need types columnsType<Student>
export const columnClasses = [
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
        key: "code",
        title: "Code",
        dataIndex: "code"
    },
    {
        key: "className",
        title: "Class Name",
        dataIndex: "className"
    },
    {
        key: "status",
        title: "Status",
        dataIndex: "status"
    }
]

const ClassSelector: React.FC = () => {
    const [disabledIds] = useState<number[]>(dataSourceClass.filter(_ => _.status === false).map(_ => _.id));
    
    const [selectedCurrentIds, setSelectedCurrentIds] = useState<number[]>(selectedClassIds);
    
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
                columns={columnClasses} 
                datasource={dataSourceClass} 
                selectedCurrentIds={selectedCurrentIds}
                disabledIds={disabledIds}
                onChangeSelected={onChangeSelected} />
        </>
    )
}


export default ClassSelector;