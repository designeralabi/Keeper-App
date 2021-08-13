import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Notes from "../components/notes.jsx";

console.log(Notes)
function createNotes(noteEntry){
    return <Notes title = {noteEntry.title}
        content = {noteEntry.content}
    />
}

function App(props){
    return <div>
        <Header />
        <Footer / >
        {Notes.map(createNotes)}
    </div> 
}


export default App;
