import React from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd"
import Fab from "@mui/material/Fab";//Floating button
import Zoom from "@mui/material/Zoom";//For transition of button

function CreateArea(props) {

    const [isExpended, setExpended] = React.useState(false);

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((preNote) => {
            return {
                ...preNote,
                [name]: value
            };
        });
    }

    function handleClick(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        setExpended(false);
        event.preventDefault();
    }

    function expand(){
        setExpended(true);
    }

    return (
        <div>
            <form className="create-note">
                {
                    isExpended && 
                    <input 
                    onChange={handleChange} 
                    value={note.title} 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    />
                }
                <textarea 
                    onClick={expand}
                    onChange={handleChange} 
                    value={note.content} 
                    name="content" 
                    type="text" 
                    placeholder="Take a note..." 
                    rows={isExpended ? "3":"1"} 
                />
                <Zoom in={isExpended}>
                    <Fab onClick={handleClick} > 
                        <NoteAddIcon /> 
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
