import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Input from "./Input";

function App() {

    const [notes, setNotes] = React.useState([]);
    function addNote(note) {
        setNotes((preNotes) => {
            return [...preNotes, note];
        })
    }

    function deleteNote(id){
        setNotes( (preNotes) => {
            return preNotes.filter( (item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <Input onAdd={addNote} />
            {
                notes.map((noteItem, index) => {
                    return (
                        <Note 
                            key={index} 
                            id={index} 
                            title={noteItem.title} 
                            content={noteItem.content} 
                            deleteNote={deleteNote}
                        />
                    );
                })
            }
            <Footer />
        </div>
    );
}

export default App;
