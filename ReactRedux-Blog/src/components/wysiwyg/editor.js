import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Editor =  (params) => {
  return (
    <ReactQuill
      {...params}
      onChange={(newValue, delta, source) => {
        if (source === 'user') {
            params.onChange(newValue);
        }
      }}
      onBlur={(range, source, quill) => {
        params.onBlur(quill.getHTML());
      }}
    />
  )
}

export default Editor;
