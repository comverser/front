import type { ReactNode } from 'react';

import { Navbar, Sidebar } from '@/layouts';

interface MainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = ({ meta, children }: MainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {meta}

    <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>

      <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        <Navbar />
        {children}
      </div>
    </div>
  </div>
);

export { Main };
