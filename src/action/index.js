export function setEmployeeList(employeeList) {
    return {
        type: 'SET_EMPLOYEE_LIST',
        payload: employeeList
    }
}
export function deleteEmployee(employeeId) {
    debugger;
    return {
        type: 'DELETE_EMPLOYEE',
        payload: employeeId
    }
}