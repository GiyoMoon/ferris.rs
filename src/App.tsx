import ferris from './assets/ferris.jpg'
import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div class='flex flex-col justify-center items-center h-full bg-[#fefadc] select-none'>
      <img class='pointer-events-none' src={ferris} alt='ferris' />
      <p class='mt-10 text-xs'>
        by{' '}
        <a
          class='text-blue-400'
          href='https://twitter.com/whoisaldeka/status/1165147725542785025'
          target='_blank'
          rel='noopener noreferrer'
        >
          @whoisaldeka
        </a>
      </p>
    </div>
  )
}

export default App
