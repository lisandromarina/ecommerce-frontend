import React, { useState } from 'react'
import LayoutComponent from './LayoutComponent'

function LayoutContainer() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleOnCloseSidebar = () => setIsSidebarOpen(false);
    const handleOnOpenSidebar = () => setIsSidebarOpen(true);

    return (
        <LayoutComponent
            isSidebarOpen={isSidebarOpen}
            handleOnCloseSidebar={handleOnCloseSidebar}
            handleOnOpenSidebar={handleOnOpenSidebar}
        />
    )
}

export default LayoutContainer
