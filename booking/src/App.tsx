import { useState } from 'react'

function App() {
  const style: React.CSSProperties = { width: 'max-width', height: '100px', background: 'pink' };
  return (
    <>
      hej<div style={style}>aaa</div>hej
    </>
  )
}

export default App
