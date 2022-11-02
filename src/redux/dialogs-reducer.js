const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SAND_MESSAGE = 'SAND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'What you name?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ],
    dialogs: [
        { id: 1, name: 'Sanya' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Serega' },
        { id: 4, name: 'Misha' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Katya' },
    ],
    newMessageBody: "" }

const dialogsReducer = (state = initialState, action ) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SAND_MESSAGE:
            let body = state.newMessageBody; 
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SAND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;