import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function ExampleComponen() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Dive into React-js',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Dive into Javascript',
        1500,
        'Dive into Node-js',
        1500,
        'Dive into DSA',
        1500,
        'Dive into JAVA',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default ExampleComponen