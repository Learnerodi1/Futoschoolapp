import React, { Component, useState } from "react";
import clsx from "clsx"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    let linkActiveState = "flex items-center gap-3 px-4 py-3 text-[#c3c0ff] font-bold bg-[#35343e] rounded-xl scale-95 duration-150 active:scale-90"
    let linkInActiveState = "flex items-center gap-3 px-4 py-3 text-[#89ceff] opacity-70 hover:opacity-100 transition-all hover:bg-[#1f1f28] hover:translate-x-1 duration-200"
    return (
        <>
            <aside
                className="bg-[#1b1b24] font-['Plus_Jakarta_Sans'] tracking-tight h-screen w-64 fixed left-0 top-0 overflow-y-auto border-r border-[#464555]/15 shadow-none flex flex-col py-8 px-4 z-50">
                <div className="mb-10 px-4">
                    <span className="text-2xl font-bold tracking-tighter text-[#c3c0ff]">AcademiX</span>
                    <p className="text-xs text-[#89ceff] opacity-60 uppercase tracking-widest mt-1">Editorial Intelligence</p>
                </div>
                <nav className="flex-1 space-y-2">
                    <NavLink className={ ({ isActive }) => clsx("", ( isActive ? linkActiveState : linkInActiveState))}
                        to={"."}>
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink className={ ({ isActive }) => clsx("", ( isActive ? linkActiveState : linkInActiveState))}
                        to={"users"}>
                        <span className="material-symbols-outlined" data-icon="group">group</span>
                        <span>Users</span>
                    </NavLink>
                    <NavLink className={ ({ isActive }) => clsx("", ( isActive ? linkActiveState : linkInActiveState))}
                        to={"courses"}>
                        <span className="material-symbols-outlined" data-icon="school">school</span>
                        <span>Courses</span>
                    </NavLink>
                    <NavLink className={ ({ isActive }) => clsx("", ( isActive ? linkActiveState : linkInActiveState))}
                        to={"materials"}>
                        <span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
                        <span>Materials</span>
                    </NavLink>
                    <NavLink className={ ({ isActive }) => clsx("", ( isActive ? linkActiveState : linkInActiveState))}
                        to={"analytics"}>
                        <span className="material-symbols-outlined" data-icon="insights">insights</span>
                        <span>AI Analytics</span>
                    </NavLink>
                    <NavLink className={ ({ isActive }) => clsx("", ( isActive ? linkActiveState : linkInActiveState))}
                        to={"settings"}>
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                        <span>Settings</span>
                    </NavLink>
                </nav>
                <div className="mt-auto px-4">
                    <button
                        className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                        <span>New Entry</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

export { NavBar }