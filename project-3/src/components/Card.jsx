import React from 'react'

function Card({username,place,myObj,myArr}) {
    return (
        <>
        <div className='text-lg'>
            {/* {[props.username]} */}
            {username}
        </div>
        <div className='text-lg'>
            {/* {[props.place]} */}
            {myObj.city}
        </div>
        <div>
            {myObj.name}
        </div>
        <div>
            {myObj.age}
        </div>
        </>
    )
}
export default Card