import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Editor =  (params) => {
  return (
    <ReactQuill
      {...params}
      onChange={(newValue, delta, source) => {
        let val = "";
        if (source === 'user') {
          if (newValue != "<p><br></p>" && newValue != "<p></p>") {
            val = newValue;
          }
          params.onChange(val);
          
        }
      }}
      onBlur={(range, source, quill) => {
          let newValue = "";
          if(quill.getHTML().toString() != "<p><br></p>" && quill.getHTML().toString() !="<p></p>"){
            newValue = quill.getHTML();
          }
          params.onBlur( newValue);
        } 
      }
    />
  )
}

export default Editor;
