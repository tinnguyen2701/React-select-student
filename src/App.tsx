import React, { useEffect, useState } from "react";

export type columnsType<RecordType = unknown> = (columnsType<RecordType>)[];

interface Student {
    id: number,
    firstName: string,
    lastName: string,
    isAssigned: boolean
}

// TODO: need types columnsType<Student>
const columns = [
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

const selectedIds: number[] = [1, 4, 5];

const datasource: Student[] = [
    {
        id: 1,
        firstName: 'student',
        lastName: '01',
        isAssigned: true
    },
    {
        id: 2,
        firstName: 'student',
        lastName: '02',
        isAssigned: false
    },
    {
        id: 3,
        firstName: 'student',
        lastName: '03',
        isAssigned: false
    },
    {
        id: 4,
        firstName: 'student',
        lastName: '04',
        isAssigned: true
    },
    {
        id: 5,
        firstName: 'student',
        lastName: '05',
        isAssigned: false
    },
    {
        id: 6,
        firstName: 'student',
        lastName: '06',
        isAssigned: false
    }
]


interface columnProp {
    columns: any[],
    datasource: Student[],
    selectedCurrentIds: number[],
    disabledIds: number[],
    onChangeSelected: any // TODO: specify a type
}

export const Table: React.FC<columnProp> = (props: columnProp) => {
    const columns = props.columns;
    const datasource = props.datasource;
    const selectedCurrentIds = props.selectedCurrentIds;
    const disabledIds = props.disabledIds;

    let arrValue2Ds: any[] = [];

    const getTData = (indexRow: number, indexCol: number) : any => {
        return arrValue2Ds[indexCol][indexRow];
    }

    const isDisabled = (id: number) : boolean => {
        return disabledIds.indexOf(id) >= 0;
    }

    const isSelection = (id: number) : boolean => {
        return selectedCurrentIds.indexOf(id) >= 0;
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map(column => {
                            if (column.title === "") {
                                return <th key={column.key}></th>
                            }
                            else {
                                return <th key={column.key}>{column.title}</th>
                            }
                        })}
                    </tr>
                </thead>

                <tbody>
                    <>
                        {
                            columns.map((column, index) => {
                                arrValue2Ds[index] = [];

                                const dataIndex = column.dataIndex;

                                const arr = datasource.map((row, indexj) => 
                                    Object.entries(row).map(data => 
                                        data[0] === dataIndex ? data[1] : null
                                    )
                                )

                                var values: any[] = [];
                                for (let i = 0; i< arr.length ; i++) {
                                    if (arr[i].filter(_ => _ != null).length > 0) {
                                        values.push(arr[i].filter(_ => _ != null)[0]);
                                    } 
                                    else {
                                        values.push(null);
                                    }
                                }

                                for (let i = 0; i < values.length; i++) {
                                    arrValue2Ds[index][i] = values[i];
                                }
                            })
                        }
                        {
                            datasource.map((row, index) =>
                                <tr key={index}>
                                    {
                                        columns.map((col, indexCol) => {
                                            let data: any = getTData(index, indexCol);

                                            if (data == null) {
                                                // TDO: Hard code for checkbox, need more dynamic more
                                                return <td key={indexCol}>
                                                    <input 
                                                        type="checkbox"
                                                        disabled={isDisabled(row.id)}
                                                        checked={isSelection(row.id)}
                                                        onChange={() => props.onChangeSelected(row.id)}
                                                    />
                                                </td>
                                            } else {
                                                return <td key={indexCol}>{data}</td>
                                            }
                                        })
                                    }
                                </tr>
                            )
                        }
                    </>
                </tbody>
            </table>
        </>
    )
}


const App: React.FC = () => {

    const [disabledIds] = useState<number[]>(datasource.filter(student => student.isAssigned === true).map(_ => _.id));
    
    const [selectedCurrentIds, setSelectedCurrentIds] = useState<number[]>(selectedIds);
    
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
            <h1>Student List</h1>

            <Table 
                columns={columns} 
                datasource={datasource} 
                selectedCurrentIds={selectedCurrentIds}
                disabledIds={disabledIds}
                onChangeSelected={onChangeSelected} />
        </>
    )
}

export default App;

