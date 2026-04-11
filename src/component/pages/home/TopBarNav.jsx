import React, { Component, useState } from "react";

const TopBarNav = () => {
    return (
        <>
            <header
                class="bg-[#13121b]/60 backdrop-blur-xl fixed top-0 right-0 left-64 h-16 z-50 border-b border-[#464555]/15 shadow-[0_10px_rgba(79,70,229,0.8)] flex justify-between items-center px-8 font-['Plus_Jakarta_Sans'] text-sm">
                <div class="flex items-center gap-6 flex-1">
                    <div class="relative w-full max-w-md">
                        <span class="material-symbols-outlined absolute left-3 top-1/4.7 -translate-y-1/4.7 text-outline text-lg"
                            data-icon="search">search</span>
                        <input
                            class="w-full bg-surface-container-highest/50 border-none rounded-full py-2 pl-10 pr-4 focus:ring-1 focus:ring-primary text-xs transition-all placeholder:text-outline"
                            placeholder="Search platform intelligence..." type="text" />
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-4">
                        <button class="text-[#89ceff] hover:text-white transition-colors relative">
                            <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
                            <span class="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border border-surface"></span>
                        </button>
                        <button class="text-[#89ceff] hover:text-white transition-colors">
                            <span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                        </button>
                    </div>
                    <div class="h-8 w-[1px] bg-outline-variant/20"></div>
                    <div class="flex items-center gap-3">
                        <span class="font-medium text-[#c3c0ff]">Hi Admin</span>
                        <img alt="Admin user profile picture"
                            class="w-8 h-8 rounded-lg bg-primary-container/20 border border-primary/20"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaOopClgqw1_xNo3e3f5J2Ku9rC0GKDSRQcgx8gl2nJaZpCZdIf7XByZGckG9-aAojiOxfAJoPtBiRmJbl8KtPVyw177YzH-J0OZcgpzjSkXhMPr-jvMOqUbh1JA6wCe0pQTPvklIgpFDK6jQWKa_CiE7dDO20-AR9Sars0y39IeHuqD4SnUzU3l4toBx4jDKElbgQ2PUqrhfmipp3tGgX39S0SMvJuhXHY2Lik5JD743zpaK5osH9-MofSWKIx8YHl8ywqAOvFPgm" />
                    </div>
                </div>
            </header>
        </>
    )
}

export{TopBarNav}