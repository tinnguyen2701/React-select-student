import React, { useState } from "react";
import { dataSourceLicense, selectedLicenseIds } from "../../Data/index.tsx";
import TableSelector from "../TableSelector/index.tsx";

export interface License {
    licenseId: number,
    order: number,
    activeDate: string,
    expiredDate: string,
    available: number
}

// TODO: need types columnsType<Student>
export const columnLicenses = [
    {
        key: "",
        title: "",
        dataIndex: ""
    },
    {
        key: "licenseId",
        title: "Id",
        dataIndex: "licenseId"
    },
    {
        key: "order",
        title: "Order",
        dataIndex: "order"
    },
    {
        key: "activeDate",
        title: "Active Date",
        dataIndex: "activeDate"
    },
    {
        key: "expiredDate",
        title: "Expired Date",
        dataIndex: "expiredDate"
    },
    {
        key: "available",
        title: "Available",
        dataIndex: "available"
    }
]

const LicenseSelector: React.FC = () => {
    const [disabledIds] = useState<number[]>(dataSourceLicense.filter(_ => _.available === 0 || new Date(_.expiredDate).getTime() < (new Date()).getTime()).map(_ => _.licenseId));
    
    const [selectedCurrentIds, setSelectedCurrentIds] = useState<number[]>(selectedLicenseIds);
    
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
                columns={columnLicenses} 
                datasource={dataSourceLicense} 
                selectedCurrentIds={selectedCurrentIds}
                disabledIds={disabledIds}
                onChangeSelected={onChangeSelected} 
                getRowKey={(record: License) => record.licenseId} />
        </>
    )
}


export default LicenseSelector;