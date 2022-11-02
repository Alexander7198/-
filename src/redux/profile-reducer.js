const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 14 },
        { id: 2, message: 'It\'s my first post', likesCount: 8 },
        { id: 3, message: 'Blabla', likesCount: 9 },
        { id: 4, message: 'Ditch', likesCount: 1 }
    ],
    newPostText: 'sasha-top' }



const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state; 
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;