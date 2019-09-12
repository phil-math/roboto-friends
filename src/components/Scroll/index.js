import React from 'react'

export default function Scroll({children}){
    return (
        <div 
          style={{
              marginTop:'30px',
              overflowY:'scroll',
              border:'2px solid rgba(255,255,255,.3)',
              height:'550px'
          }}
        >{children}
        </div>    
    );
}