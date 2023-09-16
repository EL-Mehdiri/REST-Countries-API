'use client'
import { useState } from 'react'
import { Countries, SearchBar } from '@/components'

export default function Home() {
  const [results, setresults] = useState([])

  return (
    <main className='flex flex-col'>
      <div className='flex justify-between items-center py-10'>
        <SearchBar setresults={setresults} />
      </div>
      <div className='flex py-10 gap-16 flex-wrap justify-center'>
        {results.map((countrie) => (
          <Countries countrie={countrie} />
        ))}
      </div>
    </main>
  )
}

