import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const ResponsiveNav = () => {

    const [menuState, updateState] = useState(false)
    let linkActiveState = "flex items-center gap-3 px-4 py-3 text-[#c3c0ff] font-bold bg-[#35343e] rounded-xl scale-95 duration-150 active:scale-90"
    let linkInActiveState = "flex items-center gap-3 px-4 py-3 text-[#89ceff] opacity-70 hover:opacity-100 transition-all hover:bg-[#1f1f28] hover:translate-x-1 duration-200"
    const buttonClickForMenu = () => {
        updateState(prev => !prev)      
    }
    return (
        <>
            <header
                className="bg-[#13121b]/60 backdrop-blur-xl fixed top-0 right-0 left-0 h-16 z-50 border-b border-[#464555]/15 shadow-[0_10px_rgba(79,70,229,0.8)] flex justify-between items-center px-8 font-['Plus_Jakarta_Sans'] ">
                <div className="px-4">
                    <span className="text-2xl font-bold tracking-tighter text-[#c3c0ff]">AcademiX</span>
                    <p className="text-xs text-[#89ceff] opacity-60 uppercase tracking-widest mt-1">Editorial Intelligence</p>
                </div>
                <span onClick={()=>buttonClickForMenu()} className="material-symbols-outlined  text-2xl cursor-pointer">
                    menu
                </span>
            </header>

            <section className={clsx("bg-[#1b1b24] top-[60px] p-4 right-0 left-0 transform transition-transform duration-300 ease-in-out fixed z-10", menuState ? "translate-y-0" : "-translate-y-full") }>
                <div className="flex items-center gap-6 flex-1 p-4">
                    <div className="relative w-[100%] ">
                        <span className="material-symbols-outlined absolute left-3 top-1/4.7 -translate-y-1/4.7 text-outline text-lg"
                            data-icon="search">search</span>
                        <input
                            className="w-[100%] bg-surface-container-highest/50 border-none rounded-full py-2 pl-10 pr-4 focus:ring-1 focus:ring-primary text-xs transition-all placeholder:text-outline"
                            placeholder="Search platform intelligence..." type="text" />
                    </div>
                </div>
                <nav className="flex-1 space-y-2">
                    <NavLink className={({ isActive }) => clsx("", (isActive ? linkActiveState : linkInActiveState))}
                        to={"."}>
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => clsx("", (isActive ? linkActiveState : linkInActiveState))}
                        to={"users"}>
                        <span className="material-symbols-outlined" data-icon="group">group</span>
                        <span>Users</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => clsx("", (isActive ? linkActiveState : linkInActiveState))}
                        to={"courses"}>
                        <span className="material-symbols-outlined" data-icon="school">school</span>
                        <span>Courses</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => clsx("", (isActive ? linkActiveState : linkInActiveState))}
                        to={"materials"}>
                        <span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
                        <span>Materials</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => clsx("", (isActive ? linkActiveState : linkInActiveState))}
                        to={"analytics"}>
                        <span className="material-symbols-outlined" data-icon="insights">insights</span>
                        <span>AI Analytics</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => clsx("", (isActive ? linkActiveState : linkInActiveState))}
                        to={"settings"}>
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                        <span>Settings</span>
                    </NavLink>
                </nav>
                <div className="my-[20px] px-4 ">
                    <button
                        className=" bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                        <span>New Entry</span>
                    </button>
                </div>
                <hr />
                <div className="flex items-center gap-6 p-4">
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-[#c3c0ff]">Hi Admin</span>
                        <img alt="Admin user profile picture"
                            className="w-8 h-8 rounded-lg bg-primary-container/20 border border-primary/20"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaOopClgqw1_xNo3e3f5J2Ku9rC0GKDSRQcgx8gl2nJaZpCZdIf7XByZGckG9-aAojiOxfAJoPtBiRmJbl8KtPVyw177YzH-J0OZcgpzjSkXhMPr-jvMOqUbh1JA6wCe0pQTPvklIgpFDK6jQWKa_CiE7dDO20-AR9Sars0y39IeHuqD4SnUzU3l4toBx4jDKElbgQ2PUqrhfmipp3tGgX39S0SMvJuhXHY2Lik5JD743zpaK5osH9-MofSWKIx8YHl8ywqAOvFPgm" />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-[#89ceff] hover:text-white transition-colors relative">
                            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border border-surface"></span>
                        </button>
                        <button className="text-[#89ceff] hover:text-white transition-colors">
                            <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export { ResponsiveNav }