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
                <ResponsiveNav/>
            </div>
            <Outlet />
        </>
    )
}

export { NavLayout }