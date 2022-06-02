import NotesList from "./NotesList";
import Input from "./parts/Input";
import Button from "./parts/Button";
import Layout from "./layout/Layout";

import {showMessage} from "../services/Alerts";
import {isFieldEmpty} from "../services/Validate";
import {useState} from "react";

export default function NotesApp(props) {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const saveTitle = (event) => {
      setTitle(event.target.value);
    }
    
    const saveContent = (event) => {
      setContent(event.target.value);
    }
    
    const saveNote = () => {
  
      if (!isFieldEmpty(title) && !isFieldEmpty(content)) {
        let note = {
          title: title,
          content: content  
        }
    
        setNotes([...notes, note]);
  
        showMessage("Note successfully created.", "success", "center", 3000);
      } else {
        showMessage("Title or content are empty", "error", "center", 3000);
      }
    }

    return (
        <>
          <Layout isLoggedIn={props.isLoggedIn}>

            <NotesList notes={notes} />
            <hr />
            <div className="create-note">
                <Input 
                  fieldType="text" 
                  fieldPlaceholder="Enter title"
                  fieldOnChange={(event) => {saveTitle(event)}}
                />
                <Input 
                  fieldType="text" 
                  fieldPlaceholder="Enter content"
                  fieldOnChange={(event) => {saveContent(event)}}
                />
                <Button buttonOnSubmit={saveNote} buttonTitle="Create" />
            </div>

          </Layout>
        </>
    );
}