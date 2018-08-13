import React from 'react'
import ReactDom from 'react-dom'

const App = function(){
    return <div>Test</div>;
}

ReactDom.render(<App />, document.querySelector(".container"));