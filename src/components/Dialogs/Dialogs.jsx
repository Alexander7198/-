import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs = (props) => {

    let newDialogsElement = React.createRef();

    let addDialogs = () => {

        let text =  newDialogsElement.current.value;
        alert(text);

    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);
    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            
            <div className={s.messages}>
                {messagesElements}
                <div>
                <textarea ref={ newDialogsElement}></textarea>
            </div>
            <div>
                <button onClick={addDialogs}>Add dialogs</button>
            </div>
            </div>
            
        </div>
    )
}

export default Dialogs;