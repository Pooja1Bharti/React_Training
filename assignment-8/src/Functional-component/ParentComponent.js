import React from 'react'

import LoginFunction from './LoginFunction'

function ParentComponent() {
   const buttonClicked = (value) => {
    console.log (value)
    }
        
    
  return (

    <div>

        <LoginFunction  Organization="UST" Location= "Bangalore"  onButtonClicked={buttonClicked}/>
    </div>
  )
}

export default ParentComponent