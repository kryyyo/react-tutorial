import React from "react";

const Hello = () => {
    // return (
    //     <div className = "dummyClass">
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )

    //Without JSX 
    //.createElement('elementName', additional prop/attribs, 'children'.....)
    // return React.createElement('div', null, '<h1>Hello Vishwas</h1>') //wrong! //should nest if you will create an element
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Vishwas')
    )
}

export default Hello