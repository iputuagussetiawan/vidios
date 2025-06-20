import {HomeLayout} from "@/modules/home/ui/layouts/home-layout"

interface LayoutProps {
    children: React.ReactNode;
}

import React from 'react'

const Layout = ({children}: LayoutProps) => {
    return (
        <HomeLayout>{children}</HomeLayout>
    )
}

export default Layout