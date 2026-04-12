import React, { Component, useState } from "react";

const DashBoard = () => {
    return (
        <>
            <section>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* <!-- Total Users Card --> */}
                    <div
                        class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 relative overflow-hidden group">
                        <div class="flex justify-between items-start mb-4">
                            <div class="p-3 rounded-xl bg-primary/10 text-primary">
                                <span class="material-symbols-outlined" data-icon="groups">groups</span>
                            </div>
                            <div class="text-right">
                                <span
                                    class="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded uppercase tracking-wider">+12.4%</span>
                            </div>
                        </div>
                        <h3 class="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">Total Users
                        </h3>
                        <div class="flex items-end gap-3">
                            <p class="text-3xl font-bold headline-font">24,892</p>
                            {/* <!-- Micro sparkline --> */}
                            <div class="flex gap-1 h-6 items-end pb-1 mb-1">
                                <div class="w-1 bg-primary/20 h-2 rounded-full"></div>
                                <div class="w-1 bg-primary/40 h-3 rounded-full"></div>
                                <div class="w-1 bg-primary/60 h-5 rounded-full"></div>
                                <div class="w-1 bg-primary h-4 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Active Now Card --> */}
                    <div
                        class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 relative overflow-hidden">
                        <div class="flex justify-between items-start mb-4">
                            <div class="p-3 rounded-xl bg-tertiary/10 text-tertiary">
                                <span class="material-symbols-outlined" data-icon="bolt">bolt</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live Now</span>
                            </div>
                        </div>
                        <h3 class="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">Active AI
                            Sessions</h3>
                        <p class="text-3xl font-bold headline-font">1,402</p>
                        <p class="text-[11px] text-on-surface-variant mt-2 flex items-center gap-1">
                            <span class="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span>
                            8% increase in last hour
                        </p>
                    </div>
                    {/* <!-- System Health Progress Ring --> */}
                    <div
                        class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 flex items-center justify-between">
                        <div>
                            <h3 class="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">System
                                Health</h3>
                            <p class="text-3xl font-bold headline-font">98.2<span class="text-lg opacity-50">%</span></p>
                            <p class="text-[11px] text-emerald-400 font-medium mt-2">Optimal Performance</p>
                        </div>
                        <div class="relative w-20 h-20">
                            <svg class="w-full h-full" viewbox="0 0 36 36">
                                <path class="text-surface-container-highest"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none" stroke="currentColor" stroke-width="3"></path>
                                <path class="text-primary"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none" stroke="currentColor" stroke-dasharray="98.2, 100" stroke-linecap="round"
                                    stroke-width="3"></path>
                            </svg>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="material-symbols-outlined text-primary text-xl"
                                    data-icon="check_circle">check_circle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { DashBoard }