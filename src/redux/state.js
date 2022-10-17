import { rerenderEntireTree } from "../render";


let state = { 
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 14 },
            { id: 2, message: 'It\'s my first post', likesCount: 8 },
            { id: 3, message: 'Blabla', likesCount: 9 },
            { id: 4, message: 'Ditch', likesCount: 1 }
        ],
        newPostText: 'sasha-top' 
       
    },

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
    }

};

export let addPost = () => {
    let newPost = {
       id: 5, 
       message: state.profilePage.newPostText,
       likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree (state);

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);

}

export default state;
