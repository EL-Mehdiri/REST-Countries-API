
'use client'

import { useTheme } from 'next-themes'
const Nav = () => {
    const { theme, setTheme } = useTheme()
    return (
        <header className="flex shadow-xl px-4 md:px-10 lg:px-16 py-5 justify-between h-10dvh items-center">
            <a href='/' className="font-bold leading-normal sm:text-xl lg:text-2xl">Where in the world?</a>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="flex items-center gap-2">
                <img width="28" height="28" src="https://img.icons8.com/hatch/64/bright-moon.png" alt="bright-moon" />                <span className="font-semibold text-xm lg:text-[18px]">Dark Mode</span>
            </button>
        </header>
    )
}

export default Nav