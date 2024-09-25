import MobileSidebar from '@/components/sidebar/mobile-sidebar';
import Sidebar from '@/components/sidebar/sidebar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <main
      className="flex overflow-hidden
      h-screen
      w-screen
  "
    >
      <Sidebar params={params} />
      <MobileSidebar>
        <Sidebar
          params={params}
          className="w-screen inline-block sm:hidden"
        />
      </MobileSidebar>
      <div
        className="dark:boder-Neutrals-12/70
        border-l-[1px]
        w-full
        relative
        overflow-auto
        [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
      "
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
