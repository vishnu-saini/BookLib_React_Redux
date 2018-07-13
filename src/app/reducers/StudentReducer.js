const StudentReducer = (state = [], action) => {
    var newState = state.slice();
    switch (action.type) {
        case 'ADD_STUDENT':
            newState.push(action.payload);
            break;
    }
    return newState;
}

export default StudentReducer;