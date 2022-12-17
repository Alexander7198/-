import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
       props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessagesFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessagesFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessagesForm)

export default Dialogs;