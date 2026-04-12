import React, { Component, useState } from "react";
import clsx from "clsx";
import { thTexts, studentInfo } from "./usersList";

// TableRow for all Students listed
const TableRow = ({ stuName, stuEmail, stuImgUrl, level }) => {
    return (
        <>
            <tr className="hover:bg-surface-container/30 transition-colors">
                <td className="py-4 px-6">
                    <input
                        className="rounded bg-surface-container-highest border-outline-variant text-primary focus:ring-primary/50"
                        type="checkbox" />
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                        <img alt="Student" className="w-10 h-10 rounded-full"
                            data-alt="professional portrait of a middle-aged man in business attire"
                            src={stuImgUrl} />
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">{stuName}</span>
                            <span className="text-xs text-outline italic">{stuEmail}</span>
                        </div>
                    </div>
                </td>
                <td className="py-4 px-6">
                    <span className="text-xs">{level}</span>
                </td>
                <td className="py-4 px-6">
                    <span className="text-xs text-outline">2 mins ago</span>
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Active</span>
                    </div>
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center  gap-2">
                        <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-all" title="Edit Profile">
                            <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="p-2 hover:bg-tertiary/10 text-tertiary rounded-lg transition-all"
                            title="View Statistics">
                            <span className="material-symbols-outlined text-lg">bar_chart</span>
                        </button>
                        <button className="p-2 hover:bg-outline-variant/10 text-outline rounded-lg transition-all"
                            title="Reset Password">
                            <span className="material-symbols-outlined text-lg">key</span>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}
const TableHead = ({ text }) => {
    return (
        <>
            <th className="py-4 px-6 border-b border-outline-variant/10 py-4 px-6 border-b border-outline-variant/10 text-[11px] font-bold text-outline uppercase tracking-wider">
                {text}
            </th>
        </>
    )
}
// Main UsersPage
const Users = () => {
    let thElements = thTexts.map(head => <TableHead text={head} />)
    let studentListElements = studentInfo.map(student => <TableRow stuName={student.stuName} stuEmail={student.stuEmail} stuImgUrl={student.stuImgUrl} level={student.level} />)
    return (
        <>
            <section className={clsx("users", "py-8  max-w-7xl mx-auto space-y-8")}>
                {/* <!-- Statistics Bento Section --> */}
                <section className="flex flex-wrap gap-6">
                    <div
                        className="flex-1 min-w-[200px] bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 relative overflow-hidden group">
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
                        className="flex-1 min-w-[200px] bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 relative overflow-hidden group">
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
                        className="flex-1 min-w-[200px] bg-surface-container p-6 rounded-xl relative overflow-hidden group ">
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
            <section className="overflow-x-auto bg-surface-container-low rounded-2xl border border-outline-variant/10">
                {/* <!-- Table Header / Actions --> */}
                <div className="p-8 border-b border-outline-variant/10 min-w-[900px] flex justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold tracking-tight">Student Directory</h2>
                        <div
                            className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter">
                            1,240 results</div>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* <!-- Bulk Actions --> */}
                        <div className="flex gap-[10px] items-center bg-surface-container rounded-lg p-1">
                            <button
                                className="p-2 hover:bg-surface-container-highest bg-surface-container-high rounded flex items-center gap-2 text-xs font-bold transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm">file_download</span> Export
                            </button>
                            <button
                                className="p-2 hover:bg-error/10 hover:text-error bg-surface-container-high rounded flex items-center gap-2 text-xs font-bold transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm">delete</span> Delete
                            </button>
                        </div>
                        <button
                            className="bg-white text-surface px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-primary-fixed duration-300">
                            <span className="material-symbols-outlined text-sm">person_add</span> Add New Student
                        </button>
                    </div>
                </div>
                {/* List Of enrooled students Table */}
                <div className="min-w-[900px]">
                    <table className="min-w-[900px] w-full text-left border-collapse">
                        <thead>
                            <tr className={clsx("bg-surface-container/50")}>
                                {thElements}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/5">
                            {studentListElements}
                        </tbody>
                    </table>
                </div>
                {/* <!-- Pagination --> */}
                <div className="p-6 border-t border-outline-variant/10 flex min-w-[900px] items-center justify-between">
                    <p className=" text-xs text-outline">Showing <span className="text-on-surface font-bold">1-10</span> of <span
                        className="text-on-surface font-bold">1,240</span> students</p>
                    <div className="justify-end flex items-center gap-1">
                        <button className="p-2 rounded-lg hover:bg-surface-container-highest text-outline disabled:opacity-30"
                            disabled="">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-primary-container text-white text-xs font-bold">1</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs text-outline">2</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs text-outline">3</button>
                        <span className="text-outline mx-1 text-xs">...</span>
                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs text-outline">124</button>
                        <button className="p-2 rounded-lg hover:bg-surface-container-highest text-outline">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>
            {/* <!-- Advanced Filter Floating Area (Bento Footer) --> */}
            <section className="gap-4 py-6">
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/5">
                    <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-3">Quick Filter</p>
                    <div className="flex flex-wrap gap-2">
                        <span
                            className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">All
                            Students</span>
                        <span
                            className="px-3 py-1 bg-surface-container-highest text-outline text-[10px] font-bold rounded-full border border-outline-variant/15 hover:text-white transition-colors cursor-pointer">Level</span>
                        <span
                            className="px-3 py-1 bg-surface-container-highest text-outline text-[10px] font-bold rounded-full border border-outline-variant/15 hover:text-white transition-colors cursor-pointer">A-Z</span>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Users }