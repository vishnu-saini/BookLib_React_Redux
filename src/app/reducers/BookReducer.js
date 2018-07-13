const BookReducer = (state = [{
    isbn: 1,
    name: "name",
    category: "Default Category",
    noOfBooksIssued: 1,
    noOfBooksAvailable: 14,
    publisherName: "Default Publisher"
}], action) => {
    var newState = state.slice();
    switch (action.type) {
        case 'ADD_BOOK':
            newState.push(action.payload);
            break;
    }
    return newState;
}

export default BookReducer;