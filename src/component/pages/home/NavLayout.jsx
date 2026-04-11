import React, { Component, useState } from "react";
import { NavBar } from "./navigationbar";
import { TopBarNav } from "./TopBarNav";
import { Outlet } from "react-router-dom";
import { ResponsiveNav } from "./ResponsiveNav";

const NavLayout = () => {
    return (
        <>
            <div className="block max-[1000px]:hidden">
                <NavBar />
                <TopBarNav />
            </div>
            <div className="hidden max-[1000px]:block">
                <ResponsiveNav />
            </div>
            <main class="ml-64 max-[1000px]:ml-0 pt-24 pb-12 px-8 min-h-screen max-[1000px]:px-4">
                <Outlet />
            </main>
        </>
    )
}

export { NavLayout }