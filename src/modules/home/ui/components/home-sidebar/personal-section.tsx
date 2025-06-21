"use client"

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useAuth, useClerk } from "@clerk/nextjs";
import { FlameIcon, HistoryIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from "lucide-react"
import Link from "next/link";

const items=[
    {
        title: "History",
        icon: HistoryIcon,
        url: "/playlists/history",
        auth:true
    },
    {
        title: "Liked videos",
        icon: ThumbsUpIcon,
        url: "/playlists/liked",
        auth:true
    },
    {
        title: "All playlists",
        icon: ListVideoIcon,
        url: "/playlists",
        auth:true
    },
];

export const PersonalSection=()=>{
    const {isSignedIn}=useAuth()
    const clerk=useClerk()
    return(
        <SidebarGroup>
            <SidebarGroupLabel>Personal</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}//TODO - Change to look at current pathname
                                onClick={(e)=>{
                                    if(!isSignedIn && item.auth){
                                        e.preventDefault()
                                        return clerk.openSignIn()
                                    }
                                }}//TODO - do something on click
                            >
                                <Link 
                                    href={item.url}
                                    className="flex items-center gap-4"
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

