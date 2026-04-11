import React, { Component, useState } from "react";
import clsx from "clsx";

// TableRow for all Students listed
const TableRow = () => {
    return (
        <>
        </>
    )
}
const TableHead = () => {
    return (
        <>
        </>
    )
}
// Main UsersPage
const Users = () => {
    return (
        <>
            <section className={clsx("users", "max-[1000px]:p-2 p-8 max-w-7xl mx-auto space-y-8")}>
                {/* <!-- Statistics Bento Section --> */}
                <section className="flex flex-wrap gap-6">
                    <div
                        className="flex-1 min-w-[250px] bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 relative overflow-hidden group">
                        <div className="">
                            <span className="label-sm text-tertiary uppercase tracking-widest font-bold text-[10px]">Total Users</span>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-extrabold tracking-tighter">14,284</span>
                                <span className="text-xs text-green-400 font-bold">+%</span>
                            </div>
                            <p className="text-[11px] text-outline mt-1 italic">Increase from last semester</p>
                        </div>
                    </div>
                    <div
                        className="flex-1 min-w-[250px] bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 relative overflow-hidden group">
                        <div className="">
                            <span className="label-sm text-tertiary uppercase tracking-widest font-bold text-[10px]">New Signups
                                (Today)</span>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-extrabold tracking-tighter">142</span>
                                <span className="material-symbols-outlined text-green-400 text-sm">trending_up</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex-1 min-w-[250px] bg-surface-container p-6 rounded-xl relative overflow-hidden group ">
                        <div className="">
                            <span
                                className="label-sm text-on-primary-container uppercase tracking-widest font-bold text-[10px] opacity-80">Active
                                Now</span>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-extrabold tracking-tighter text-white">2,841</span>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-xs text-on-primary-container/80 mt-2 font-medium">Real-time system load: 42%</p>
                        </div>
                        <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-white opacity-10 rotate-12"
                            data-icon="bolt">bolt</span>
                    </div>
                </section>
            </section>
            {/* <!-- Main Data Table Container --> */}
            <section class="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10">
                {/* <!-- Table Header / Actions --> */}
                <div class="p-6 border-b border-outline-variant/10 flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <h2 class="text-xl font-bold tracking-tight">Student Directory</h2>
                        <div
                            class="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter">
                            1,240 results</div>
                    </div>
                    <div class="flex items-center gap-3">
                        {/* <!-- Bulk Actions --> */}
                        <div class="flex gap-[10px] items-center bg-surface-container rounded-lg p-1">
                            <button
                                class="p-2 hover:bg-surface-container-highest bg-surface-container-high rounded flex items-center gap-2 text-xs font-bold transition-all text-on-surface-variant">
                                <span class="material-symbols-outlined text-sm">file_download</span> Export
                            </button>
                            <button
                                class="p-2 hover:bg-error/10 hover:text-error bg-surface-container-high rounded flex items-center gap-2 text-xs font-bold transition-all text-on-surface-variant">
                                <span class="material-symbols-outlined text-sm">delete</span> Delete
                            </button>
                        </div>
                        <button
                            class="bg-white text-surface px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-primary-fixed duration-300">
                            <span class="material-symbols-outlined text-sm">person_add</span> Add New Student
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Users }