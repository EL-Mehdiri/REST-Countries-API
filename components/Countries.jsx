import React from 'react'

const Countries = ({ countrie }) => {

    return (
        <div className='w-[300px] rounded shadow-lg'>
            <img src={countrie.flag} alt="flag" className='fill rounded-t' />
            <div className='px-4 py-10'>
                <h2 className='font-bold text-lg pb-2'>{countrie.name}</h2>
                <p><span className='font-semibold'>Population:</span>  {countrie.population}</p>
                <p><span className='font-semibold'>Region:</span>  {countrie.region}</p>
                <p><span className='font-semibold'>Capital: </span>{countrie.capital}</p>
            </div>
        </div>
    )
}

export default Countries