import { Student } from "../Components/StudentSelector"

export const dataSourceStudent: Student[] = [
    {
        studentId: 1,
        firstName: 'student',
        lastName: '01',
        isAssigned: true
    },
    {
        studentId: 2,
        firstName: 'student',
        lastName: '02',
        isAssigned: false
    },
    {
        studentId: 3,
        firstName: 'student',
        lastName: '03',
        isAssigned: false
    },
    {
        studentId: 4,
        firstName: 'student',
        lastName: '04',
        isAssigned: true
    },
    {
        studentId: 5,
        firstName: 'student',
        lastName: '05',
        isAssigned: false
    },
    {
        studentId: 6,
        firstName: 'student',
        lastName: '06',
        isAssigned: false
    }
]

export const selectedStudentIds: number[] = [1, 4, 5];