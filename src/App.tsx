import ferris from './assets/ferris.jpg'
import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div class='flex justify-center items-center h-full bg-[#fefadc] pointer-events-none select-none'>
      <img src={ferris} />
    </div>
  )
}

export default App
