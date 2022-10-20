import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
      <Section 
        title = "Model X"
        description = "Order Online for Touches delivery"
        bgImage = "Model-X.jpg"
        leftBut = "Custom Order"
        rightBut = "Existing Inventory"
      /> 

<Section 
        title = "Mode Y"
        description = "Order Online for Touches delivery"
        bgImage = "ModelY.jpg"
        leftBut = "Custom Order"
        rightBut = "Existing Inventory"
      /> 

<Section 
        title = "Mode Z"
        description = "Order Online for Touches delivery"
        bgImage = "Model-S.jpg"
        leftBut = "Custom Order"
        rightBut = "Existing Inventory"
      /> 
    </div>
  )
}

export default Home