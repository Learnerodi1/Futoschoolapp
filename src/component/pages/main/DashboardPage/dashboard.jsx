import React, { Component, useState } from "react";
import { priorityTaskList } from "./dashboardInfo";
import clsx from "clsx";

const PriorityTask = ({ activity, status, description, activa }) => {
    let color = {
        "done": 'green-500',
        "undone": 'red-500',
        "pending": 'yellow-500'
    }[activa];

    return (
        <>
            <div
                className={clsx(`p-4 bg-surface-container rounded-xl border-l-4 border-${color} hover:bg-surface-container-high transition-colors cursor-pointer group`)}>
                <p className="text-xs font-bold flex justify-between">
                    {activity}
                    <span className={clsx(`text-[10px] text-${color}`)}>{status}</span>
                </p>
                <p className="text-[10px] text-on-surface-variant mt-1">{description}
                </p>
            </div>
        </>
    )
}

const DashBoard = () => {
    let priorityTaskListElement = priorityTaskList.map(elem => <PriorityTask key={elem.activa} activa={elem.activa} description={elem.description} status={elem.status} activity={elem.activity} />)
    return (
        <>
            <section>
                {/* <!-- Header Section --> */}
                <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold headline-font tracking-tight mb-1">Editorial Intelligence <span
                            className="text-primary">Overview</span></h1>
                        <p className="text-on-surface-variant text-sm">Real-time performance metrics and system activity across all
                            departments.</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 mb-8">
                    {/* <!-- Total Users Card --> */}
                    <div
                        className="flex-1 min-w-[200px] bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined" data-icon="groups">groups</span>
                            </div>
                            <div className="text-right">
                                <span
                                    className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded uppercase tracking-wider">+12.4%</span>
                            </div>
                        </div>
                        <h3 className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">Total Users
                        </h3>
                        <div className="flex items-end gap-3">
                            <p className="text-3xl font-bold headline-font">24,892</p>
                            {/* <!-- Micro sparkline --> */}
                            <div className="flex gap-1 h-6 items-end pb-1 mb-1">
                                <div className="w-1 bg-primary/20 h-2 rounded-full"></div>
                                <div className="w-1 bg-primary/40 h-3 rounded-full"></div>
                                <div className="w-1 bg-primary/60 h-5 rounded-full"></div>
                                <div className="w-1 bg-primary h-4 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Active Now Card --> */}
                    <div
                        className="flex-1 min-w-[200px] bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-xl bg-tertiary/10 text-tertiary">
                                <span className="material-symbols-outlined" data-icon="bolt">bolt</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live Now</span>
                            </div>
                        </div>
                        <h3 className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">Active AI
                            Sessions</h3>
                        <p className="text-3xl font-bold headline-font">1,402</p>
                        <p className="text-[11px] text-on-surface-variant mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span>
                            8% increase in last hour
                        </p>
                    </div>
                    {/* <!-- System Health Progress Ring --> */}
                    <div
                        className="flex-1 min-w-[200px] bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 flex items-center justify-between">
                        <div>
                            <h3 className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">System
                                Health</h3>
                            <p className="text-3xl font-bold headline-font">98.2<span className="text-lg opacity-50">%</span></p>
                            <p className="text-[11px] text-emerald-400 font-medium mt-2">Optimal Performance</p>
                        </div>
                        <div className="flex justify-center items-center rounded-[50%] border-primary border-4 w-15 h-15">
                            <div className="inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl"
                                    data-icon="check_circle">check_circle</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Actionable Insights: Urgent Tasks --> */}
                <div className="lg:col-span-4 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
                    <h2 className="text-xl font-bold headline-font mb-6 flex items-center justify-between">
                        Priority Tasks
                        <span className="text-[10px] bg-error-container/20 text-error px-2 py-0.5 rounded-full">3 Alert</span>
                    </h2>
                    <div className="space-y-4">
                        {priorityTaskListElement}
                    </div>
                    <button
                        className="w-full mt-6 py-3 border border-outline-variant/20 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-colors">
                        View Task Manager
                    </button>
                </div>
                <div
                    class="lg:col-span-8 bg-surface-container-low rounded-2xl mt-6 border border-outline-variant/5 overflow-hidden">
                    <div class="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                        <h2 class="text-lg font-bold headline-font">Recent Materials</h2>
                        <button class="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Full
                            Repository</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm">
                            <thead>
                                <tr
                                    class="text-on-surface-variant/60 uppercase tracking-widest text-[10px] font-bold border-b border-outline-variant/5">
                                    <th class="px-6 py-4">Resource</th>
                                    <th class="px-6 py-4">Department</th>
                                    <th class="px-6 py-4">Uploader</th>
                                    <th class="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/5">
                                <tr class="hover:bg-surface-container-high transition-colors group cursor-pointer">
                                    <td class="px-6 py-4 font-medium flex items-center gap-3">
                                        <span class="material-symbols-outlined text-primary"
                                            data-icon="description">description</span>
                                        Intro_to_Qiskit.pdf
                                    </td>
                                    <td class="px-6 py-4 text-[11px] text-on-surface-variant">Quantum Systems</td>
                                    <td class="px-6 py-4 text-[11px]">Dr. Aris Varma</td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="bg-emerald-400/10 text-emerald-400 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Published</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-surface-container-high transition-colors group cursor-pointer">
                                    <td class="px-6 py-4 font-medium flex items-center gap-3">
                                        <span class="material-symbols-outlined text-tertiary" data-icon="movie">movie</span>
                                        CRISPR_Ethics_04.mp4
                                    </td>
                                    <td class="px-6 py-4 text-[11px] text-on-surface-variant">Bio-Engineering</td>
                                    <td class="px-6 py-4 text-[11px]">Prof. Sarah Chen</td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="bg-primary/10 text-primary text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Reviewing</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-surface-container-high transition-colors group cursor-pointer">
                                    <td class="px-6 py-4 font-medium flex items-center gap-3">
                                        <span class="material-symbols-outlined text-on-surface-variant"
                                            data-icon="terminal">terminal</span>
                                        Matrix_Practice.ipynb
                                    </td>
                                    <td class="px-6 py-4 text-[11px] text-on-surface-variant">Mathematics</td>
                                    <td class="px-6 py-4 text-[11px]">Admin System</td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="bg-emerald-400/10 text-emerald-400 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Published</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-surface-container-high transition-colors group cursor-pointer">
                                    <td class="px-6 py-4 font-medium flex items-center gap-3">
                                        <span class="material-symbols-outlined text-error"
                                            data-icon="warning">warning</span>
                                        Policy_Update.docx
                                    </td>
                                    <td class="px-6 py-4 text-[11px] text-on-surface-variant">Digital Ethics</td>
                                    <td class="px-6 py-4 text-[11px]">Julian Thorne</td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="bg-error/10 text-error text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Draft</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </>
    )
}
export { DashBoard }