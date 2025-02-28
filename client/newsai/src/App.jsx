import React from 'react'
import {motion} from 'motion/react'

function App() {
  

  return (
    <>
     <motion.h2 initial ={{scale:0}}
     animate ={{scale:1}}
     whileHover={{scale:1}}
     transition={{duration:.5}}
     className='text-3xl text-red-500'>Hello
</motion.h2>
    </>
  )
}

export default App
