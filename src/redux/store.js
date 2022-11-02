import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 14 },
                { id: 2, message: 'It\'s my first post', likesCount: 8 },
                { id: 3, message: 'Blabla', likesCount: 9 },
                { id: 4, message: 'Ditch', likesCount: 1 }
            ],
            newPostText: 'sasha-top' },

        dialogsPage: {
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
            newMessageBody: "" },
        
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State change');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        
    },
}

export default store;

