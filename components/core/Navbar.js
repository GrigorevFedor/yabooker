import React, {Children, useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_colored from '../../public/logo_colored.png'
import {useRouter} from "next/router";
import PropTypes from 'prop-types'
import {AiOutlineAlignRight} from "react-icons/ai";


const ActiveLink = ({children, activeClassName, ...props}) => {
    const {asPath} = useRouter()

    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export const NavItem = ({title, address}) => {
    return (
        <ActiveLink activeClassName='font-bold text-primary-300' href={address}>
            {/*<a className={home === 'True' ? 'px-3 py-2 hover:font-bold text-white hover:text-yellow-100' : 'px-3 py-2 hover:font-bold hover:text-primary-900'}>*/}
            <a className='px-4 py-2 hover:text-primary-200 text-gray-600'>
                {title}
            </a>
        </ActiveLink>
    )
}

export const NavMobItem = ({title, address}) => {
    return (
        <ActiveLink activeClassName='font-bold text-primary-300' href={address}>
            {/*<a className={home === 'True' ? 'px-3 py-2 hover:font-bold text-white hover:text-yellow-100' : 'px-3 py-2 hover:font-bold hover:text-primary-900'}>*/}
            <a className='px-3 py-2 hover:text-primary-200 text-gray-600 mr-10'>
                {title}
            </a>
        </ActiveLink>
    )
}


export default function Navbar({home}) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    function onClick() {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const pageClickEvent = event => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(event.target)) {
                setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener('mousedown', pageClickEvent);
        }
        return () => {
            window.removeEventListener('mousedown', pageClickEvent);
        }
    }, [isActive]);

    return (
        <>
            <header ref={dropdownRef}>
                <nav className='mx-auto bg-transparent shadow-sm'>
                    <div className="box-content">
                        <div className="flex items-center justify-between sm:justify-center h-20 px-4">
                            <Link href="/">
                                <a className="flex items-center">
                                    <Image src={logo_colored}
                                           width={200}
                                           height={45}
                                           alt="logo"
                                    />
                                </a>
                            </Link>
                            <button type="button"
                                    className="sm:hidden block inline-flex items-center p-2 rounded-xl text-primary-300 text-2xl hover:bg-primary-300 hover:text-white"
                                    onClick={onClick}>
                                <AiOutlineAlignRight/>
                            </button>
                            <div className="hidden sm:block sm:ml-6 w-full">
                                <div className="flex justify-end sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:block sm:ml-6 w-full">
                                        <div className="flex justify-start">
                                            <NavItem home={home} title='Главная' address="/"/>
                                            <NavItem home={home} title='Туры' address="/tours"/>
                                            <NavItem home={home} title='FAQ' address="/#faq"/>
                                            <NavItem home={home} title='Блог' address="/blogs"/>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-64 hidden lg:block">
                                        <Link href="/#contact">
                                            <a>
                                                <button
                                                    className="rounded-lg p-2 hover:bg-primary-100 text-white h-10 font-bold bg-primary-300 hover:bg-primary-200 py-2 md:px-8 px-24 mt-4 md:mt-0 ring-4 ring-primary-300 ring-opacity-50">
                                                    Заказать тур
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={dropdownRef} className={`${isActive ? 'active' : 'hidden'} sm:hidden`} id="mobile-menu">
                        <div className="flex flex-col px-4 pt-2 pb-4 border-t border-gray-100">
                            <NavMobItem home={home} title='Главная' address="/"/>
                            <NavMobItem home={home} title='Туры' address="/tours"/>
                            <NavMobItem home={home} title='FAQ' address="/#faq"/>
                            <NavMobItem home={home} title='Блог' address="/blogs"/>
                            <Link href='/#contact'>
                                <button
                                    className="rounded-lg w-full p-2 hover:bg-primary-100 text-white h-10 font-bold bg-primary-300 hover:bg-primary-200
                                    py-2 md:px-8 px-24 mt-4 md:mt-0 ring-4 ring-primary-300 ring-opacity-50">
                                    Заказать тур
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}