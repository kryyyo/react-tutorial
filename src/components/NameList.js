import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    //please include key per person to eliminate the warning
    //this is for efficiency (matching of components so react will not have to tear down the entire lists if there are any matching keys)
    //key props are not accessible in child components! 
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

  return <div>{nameList}</div>
}

export default NameList