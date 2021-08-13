import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Note from "../components/Note.jsx";
import Notes from "../notes";


function createEntry(noteinfo) {
    return  <Note 
    title={noteinfo.title}
    content = {noteinfo.content}
    />
}


function App(){
    return <div>
        <Header />
        <Footer / >
        {Notes.map(createEntry)}
    </div> 
}


export default App;
