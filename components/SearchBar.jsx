'use client'
import { useState } from 'react'
import data from '../countries-api/data.json'
import { Filter } from '@/components'



const SearchBar = ({ setresults }) => {
    const [search, setsearch] = useState('')

    const fetchData = (value) => {
        const result = data.filter((countrie) => {
            return value && countrie && countrie.name.toLowerCase().includes(value)
        })
        setresults(result)
    }

    const handlesearch = (value) => {
        setsearch(value);
        fetchData(value)
    }

    return (
        <>
            <div className='flex gap-4 px-5 py-4 shadow-xl w-[500px]  rounded items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
                <input onChange={(e) => handlesearch(e.target.value)} value={search} className='outline-none' type="text" placeholder='Search for a movie' />
            </div>

        </>
    )
}

export default SearchBar