export default function(state=[],action) {
    if(action.type === 'SET_EMPLOYEE_LIST') {
        return action.payload;
    }
    if(action.type === 'DELETE_EMPLOYEE') {
        let filteredData = state.filter((emp)=> {
            return (emp.id !== action.payload)
        });
        console.log(filteredData);
        debugger;
        return filteredData;
    }
    return state;
}