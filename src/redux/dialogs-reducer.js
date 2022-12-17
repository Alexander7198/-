const SAND_MESSAGE = 'SAND_MESSAGE';

let initialState = {

    dialogs: [
        { id: 1, name: 'Sanya' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Serega' },
        { id: 4, name: 'Misha' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Katya' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'What you name?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ],

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SAND_MESSAGE, newMessageBody })

export default dialogsReducer;