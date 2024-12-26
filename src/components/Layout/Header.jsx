import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import ThemeMode from "../ui/ThemeMode";
import { AuthContext } from "@/context/AuthContext";
import { Skeleton } from "../ui/skeleton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CiLogout } from "react-icons/ci";
import { Logout } from '../../hooks/Logout';

const Header = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const { authInfo, isLoading } = useContext(AuthContext)

    return (
        <>
            <header className="w-full fixed flex justify-center border-b dark:border-border-1 dark:bg-bg-1 bg-white z-[9999]">
                <div className="w-primary px-5 py-4 flex justify-between items-center">
                    <Link 
                        to={'/'}
                        className="flex items-center gap-3 text-2xl font-medium dark:text-white text-black lg:w-2/12"
                    >   
                        <svg xmlns="http://www.w3.org/2000/svg"  version="1.2" viewBox="0 0 1326 1326" width="30" height={30}>
                            <style />
                            <path className="dark:fill-white" d="m971.5 128c12.9 4.5 25.5 9.3 37.7 14.7q109.6 48.7 168.1 139.7c7.4 11.5 13.8 23.5 19.8 35.8v-190.2zm-687.7 0v1069.1h-155.8v-1069.1zm709.9 729.5l203.4 290.5v-470.3c-7.1 14.4-14.9 28.4-23.9 41.7q-62.5 92.6-179.5 138.1zm-42.2-190.9q71.4-59.3 71.5-168.1c0-72.6-23.9-128.4-71.5-167.4q-71.5-58.5-209.6-58.5h-246.9v453.3h246.9c92 0 161.9-19.7 209.6-59.3zm-199.9 233.1h-256.6v297.4h509.1l-208.6-299q-14.6 1.7-43.9 1.6z" />
                        </svg>
                        Razels
                    </Link>
                    <menu className={`dark:bg-bg-1 hidden flex-col lg:flex-row w-full fixed left-0 justify-center backdrop-blur-3xl top-[79px] text-sm border-b dark:border-border-1 lg:!animate-none ${menuIsOpen && '!flex'} lg:flex lg:static lg:border-none lg:!w-7/12`}>
                        <nav className="flex  flex-col w-full mb-5 px-2 lg:p-0 lg:flex-row lg:justify-center lg:mb-0 gap-1 lg:gap-2 lg:mr-5">
                            {
                                MenuData && MenuData.map((li, index) => ( 
                                    <NavLink 
                                        key={index}
                                        to={li.path}
                                        className={({isActive}) => `${isActive && `text-sky-600 font-semibold`} w-full  px-3 py-2 hover:text-sky-800 rounded-md lg:w-fit transition-colors`}
                                    >{li?.pathName}</NavLink>
                                ))
                            }
                        </nav>
                        <div className="w-full py-5 border-t sm:hidden dark:border-border-1 px-5">
                        {
                                isLoading
                                    ? (
                                        <Skeleton className={`w-[187px] h-[32px] rounded-full !bg-slate-400`}/>
                                    )
                                    : (
                                        !authInfo
                                          ? (
                                            <div className="flex flex-col w-full gap-1">
                                                <Link to={'/auth/login'}
                                                >
                                                    <button className="bg-sky-600 text-white px-5 py-1 rounded-md w-full hover:bg-white hover:text-black transition-colors">
                                                        Login
                                                    </button>
                                                </Link>
                                                <Link to={'/auth/register'}
                                                >
                                                    <button className="bg-sky-800 text-white px-5 py-1 rounded-md w-full hover:bg-white hover:text-black  transition-colors">
                                                        Register
                                                    </button>
                                                </Link>
                                            </div>
                                          )
                                          : (
                                            <div className="w-full p-2 py-1 rounded-lg flex items-center gap-2">
                                                    <Avatar className="scale-75 ring-2 ring-sky-600 hover:ring-4">
                                                        <AvatarImage src={authInfo?.photoURL} alt={authInfo?.displayName} />
                                                        <AvatarFallback>{authInfo?.displayName?.toUpperCase()?.slice(0, 2)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex justify-between w-full items-center">
                                                        <div>
                                                            <p className="dark:text-white font-medium capitalize">{authInfo?.displayName}</p>
                                                            <p className="text-[10px]">{authInfo?.email}</p>
                                                        </div>
                                                        <button onClick={Logout}>
                                                            <CiLogout className="cursor-pointer outline-none" data-tooltip-id="tooltip" data-tooltip-content="Logout" size={20}/>
                                                        </button>
                                                    </div>
                                            </div>
                                          )
                                    )
                            }
                        </div>
                    </menu>
                    <div className="flex items-center gap-5 lg:w-2/12 lg:h-10 justify-end z-20">
                        <div>
                            <ThemeMode />
                        </div>
                        <div className="hidden sm:block">
                            {
                                isLoading
                                    ? (
                                        <Skeleton className={`w-[192px] h-[32px] rounded-full !bg-slate-400`}/>
                                    )
                                    : (
                                        !authInfo
                                          ? (
                                            <div className="flex items-center">
                                                <Link to={'/auth/login'}
                                                >
                                                    <button className="bg-sky-600 text-white px-5 py-1 rounded-l-full hover:bg-black hover:dark:bg-white hover:dark:text-black transition-colors">
                                                        Login
                                                    </button>
                                                </Link>
                                                <Link to={'/auth/register'}
                                                >
                                                    <button className="bg-sky-800 text-white px-5 py-1 hover:bg-black rounded-r-full hover:dark:bg-white hover:dark:text-black  transition-colors">
                                                        Register
                                                    </button>
                                                </Link>
                                            </div>
                                          )
                                          : (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="outline-none cursor-pointer" data-tooltip-id="tooltip" data-tooltip-content="Click">
                                                        <Avatar className="scale-75 ring-2 mt-1 ring-sky-600 hover:ring-4">
                                                            <AvatarImage src={authInfo?.photoURL} alt={authInfo?.displayName} />
                                                            <AvatarFallback>{authInfo?.displayName?.toUpperCase()?.slice(0, 2)}</AvatarFallback>
                                                        </Avatar>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="dark:bg-bg-1 border dark:border-border-1 z-[9999999999999999]">
                                                    <DropdownMenuLabel className="dark:text-text-1 text-sm px-2 py-0 font-normal capitalize text-text-2">{authInfo?.displayName}</DropdownMenuLabel>
                                                    <DropdownMenuSeparator className="dark:!bg-border-1 !bg-border-2"/>
                                                    <button onClick={Logout} className="w-full text-start px-2 text-sm flex items-center gap-2 dark:hover:bg-slate-800 rounded-md">
                                                        <CiLogout />
                                                        Logout
                                                    </button>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                          )
                                    )
                            }
                        </div>
                        <div data-tooltip-id="tooltip" data-tooltip-content="Navbar" className="lg:hidden">
                            <Hamburger size={25} onToggle={toggled => {
                                toggled
                                    ? setmenuIsOpen(true)
                                    : setmenuIsOpen(false)
                            }} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header


const MenuData = [
    {pathName: 'Home', path: '/'},
    {pathName: 'All Campaign', path: '/campaigns'},
    {pathName: 'Add New Campaign', path: '/addcampaign'},
    {pathName: 'My Campaign', path: '/mycampaign'},
    {pathName: 'My Donations', path: '/mydonations'},
]