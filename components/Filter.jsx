'use client'
import data from '../countries-api/data.json'
import { useState, useEffect } from 'react'
const Filter = ({ setresults }) => {
    const [search, setsearch] = useState('')



    const fetchData = (value) => {
        const result = data.filter((countrie) => {
            return value && countrie && countrie.region.toLowerCase().includes(value)
        })
        setresults(result)
    }
    const handlesearch = (value) => {
        setsearch(value);
        fetchData(value)
    }
    useEffect(() => {
        fetchData('africa')
    }, [])

    return (
        <div>
            <select className='lg:w-[300px] w-[60vw] border-none dark:bg-slate-800  p-4 rounded-sm bg-white shadow-xl '>
                <option onClick={() => handlesearch('africa')} value='Africa'>Africa</option>
                <option onClick={() => handlesearch('america')} value='America'>America</option>
                <option onClick={() => handlesearch('asia')} value='Asia'>Asia</option>
                <option onClick={() => handlesearch('europe')} value='Europe'>Europe</option>
                <option onClick={() => handlesearch('oceania')} value='Oceania'>Oceania</option>
            </select>
        </div>
    )
}

export default Filter