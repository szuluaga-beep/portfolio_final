'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useTheme } from "next-themes";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const menuItems = [
    {
        id: 1,
        name: "Home page",
        href: '/'
    },
    {
        id: 2,
        name: "About me",
        href: '/about'
    },
    {
        id: 3,
        name: "Portfolio",
        href: '/portfolio'
    },

];


const CustomNavbar = () => {

    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    const themeLocalStorage = localStorage.getItem("theme")

    useEffect(() => {
        setMounted(true)
        if (themeLocalStorage!==null && themeLocalStorage == 'light') {
            setIsSelected(true)
            setTheme(themeLocalStorage)
            return
        }
        setTheme('dark')

    }, [setTheme, themeLocalStorage])

    if (!mounted) return null

    const toggleSwitch = () => {
        setIsSelected((prev) => !prev)
        localStorage.setItem("theme", isSelected ? 'dark' : 'light')
        setTheme(isSelected ? 'dark' : 'light')
    }

    const closeMenu = () => {

        setIsMenuOpen((prev) => !prev)
    }

    return (
        <>
            
            <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>

                        <p className="font-bold text-inherit">STEVENDEV</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {
                        menuItems.map((item) => (
                            <NavbarMenuItem key={item.id}>
                                <Link
                                    // color='primary'
                                    className={`link ${pathname === item.href ? 'text-blue-700 font-bold' : ''}`}
                                    href={item.href}
                                // size="lg"
                                >
                                    {item.name}
                                </Link>
                            </NavbarMenuItem>
                        ))
                    }
                </NavbarContent>

                <Switch
                    isSelected={isSelected}
                    onValueChange={toggleSwitch}
                    color='success'
                    size="lg"
                    startContent={<SunIcon />}
                    endContent={<MoonIcon />}
                >

                </Switch>

                {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}
                <NavbarMenu>
                    {menuItems.map((item) => (
                        <NavbarMenuItem key={item.id}>
                            <Link
                                onClick={closeMenu}
                                className="w-full"
                                href={item.href}
                            // size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}

export default CustomNavbar