"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import Link from "next/link";

const items=[
    {
        title: "Home",
        icon: HomeIcon,
        url: "/",
    },
    {
        title: "Subscriptions",
        icon: PlaySquareIcon,
        url: "/feed/subscriptions",
        auth:true
    },
     {
        title: "Trending",
        icon: FlameIcon,
        url: "/feed/trending",
    },
];

export const MainSection=()=>{
    return(
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}//TODO - Change to look at current pathname
                                onClick={()=>{}}//TODO - do something on click
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

