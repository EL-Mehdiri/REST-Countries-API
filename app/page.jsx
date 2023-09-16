'use client'
import { useState } from 'react'
import { Countries, Filter, SearchBar } from '@/components'

export default function Home() {
  const [results, setresults] = useState([])


  return (
    <main className='flex flex-col px-4 md:px-10 lg:px-16 py-5 '>
      <div className='flex justify-between px-10 items-center py-10'>
        <SearchBar setresults={setresults} />
        <Filter setresults={setresults} />
      </div>
      <div className='flex py-10 gap-16 flex-wrap justify-center'>
        {results.map((countrie) => (
          <Countries countrie={countrie} />
        ))}
      </div>
    </main>
  )
}

