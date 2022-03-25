import React from 'react'; 

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }

// named export example: (import the EXACT variable)
// export const Greet = () => <h1>Hello Vishwas</h1>

const Greet = (props) => {

    const {name, heroName} = props

    //props.name = '' ---> result to an error because props are immutable!
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet;