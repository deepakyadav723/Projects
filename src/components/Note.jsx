import React from "react";
import DeleteIcon from "@mui/icons-material/Delete"
import Fab from "@mui/material/Fab";//Floating button
import Zoom from "@mui/material/Zoom";//For transition, we use zoom

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Zoom in={true}>
                <Fab onClick={ () => {
                        props.deleteNote(props.id);
                    }} >
                    <DeleteIcon />
                </Fab>
            </Zoom>
        </div>
    );
}

export default Note;
