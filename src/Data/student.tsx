import { Student } from "../Components/StudentSelector"

export const dataSourceStudent: Student[] = [
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

export const selectedStudentIds: number[] = [1, 4, 5];