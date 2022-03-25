import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked')
    }

  return (
    <div>
        {/* Do not use () in function. It is not a function call */}
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick