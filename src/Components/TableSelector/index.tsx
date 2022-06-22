import React from "react"

interface columnProp {
    columns: any[],
    datasource: any[], // TODO: maybe student, class, license. need a way to generic type
    selectedCurrentIds: number[],
    disabledIds: number[],
    onChangeSelected: any // TODO: specify a type
}

const TableSelector: React.FC<columnProp> = (props: columnProp) => {
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
                                                // TODO: Hard code for checkbox, need more dynamic more
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

export default TableSelector;
