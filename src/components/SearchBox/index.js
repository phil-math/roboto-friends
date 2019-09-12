import React from 'react'

export default function SearchBox({searchChange}){
    return (
        <div>
            <input
              onChange={searchChange}
              className='pa3 ba b--green bg-lightest-blue'
              type='search' 
              placeholder='search Robotos'
            />
        </div>
    )
}