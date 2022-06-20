import React from 'react';

function Row({student, isChecked, changeSelected}) {
    const { id, firstName, lastName, isAssigned } = student;

    return (
        <tr>
            <td>
                <input disabled={isAssigned} type="checkbox" onChange={() => changeSelected(id)} checked={isChecked}></input>
            </td>
            <td>
                {id}
            </td>
            <td>
                {firstName}
            </td>
            <td>
                {lastName}
            </td>
            <td>
                {isAssigned ? "Assigned" : ""}
            </td>
        </tr>
    );
}

export default Row;