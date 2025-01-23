'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { Hamburger } from "./icons/Hamburger";

const NavLinks = ({ closeSidebar }: { closeSidebar?: () => void }) => {
    const handleClick = () => {
        if (closeSidebar == null) return;
        closeSidebar();
    }
    return (<>
        <Link onClick={handleClick} href='/'>Home</Link>
        <a onClick={handleClick} href='https://subsplash.com/encounternation/app' target="_blank">Get the app</a>
        <Link onClick={handleClick} href='/prayer'>Prayer Request</Link>
        <a onClick={handleClick} href='https://www.churchofficegiving.com/App/Form/aad0d564-e23c-4c4b-9e02-ae0a4afb90fa' target="_blank">Give</a>
        <a onClick={handleClick} href='https://www.pjmlive.com/shop' target="_blank">Store</a>
        <Link onClick={handleClick} href='/outreach'>Outreach</Link>
    </>)
}


const Sidebar = ({ handleClick }: { handleClick: () => void }) => {

    const [x, setX] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setX(true);
        }, 1)
    }, [])

    const closeSidebar = () => {
        setX(false);
        setTimeout(handleClick, 350)
    }
    return (<div className={`flex flex-col fixed left-0 top-0 bottom-0 bg-orange-100 z-20 px-10 transition-all duration-500 transform  ${x ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="self-end my-4 -mr-4 hover:cursor-pointer" onClick={closeSidebar}>
            &larr;
        </div>
        <div className={`flex flex-col gap-8`}>
            <NavLinks closeSidebar={closeSidebar} />
        </div>
    </div>)
}

export const Navbar = () => {
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const handleClick = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <nav className='bg-orange-100 fixed z-10 top-0 w-full px-2 h-10 text-black'>
            <div className="md:hidden flex items-center h-full">
                <Hamburger open={hamburgerOpen} handleClick={handleClick} />
            </div>
            <div className="hidden md:flex uppercase font-bold items-center h-full px-5 justify-center gap-10">
                <NavLinks />
            </div>
            {hamburgerOpen && <Sidebar handleClick={handleClick} />}
        </nav>
    )
}