import Image from "next/image";

import BarsIcon from "@/components/icons/BarsIcon";
import BellIcon from "@/components/icons/BellIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ChevronIcon from "@/components/icons/ChevronIcon";
import DocumentsIcon from "@/components/icons/DocumentsIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import ProjectsIcon from "@/components/icons/ProjectsIcon";
import ReportsIcon from "@/components/icons/ReportsIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import UsersIcon from "@/components/icons/UsersIcon";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-6 h-6 shrink-0 text-indigo-200 " />,
  },
  {
    name: "Patients",
    href: "/patients",
    icon: <UsersIcon className="w-6 h-6 shrink-0 text-indigo-200 " />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <ProjectsIcon className="w-6 h-6 shrink-0 text-indigo-200 " />,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6 shrink-0 text-indigo-200 " />,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: <ReportsIcon className="w-6 h-6 shrink-0 text-indigo-200 " />,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: <DocumentsIcon className="w-6 h-6 shrink-0 text-indigo-200 " />,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex flex-1 flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                alt="Your Company"
                src="./vercel.svg"
                className="invert"
                width={100}
                height={24}
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="flex flex-col gap-1 -mx-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white [&>svg]:hover:text-white"
                        >
                          {item.icon}
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-200 bg-white gap-x-6 py-4 px-6 shadow-sm sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
                Open sidebar
              </span>
              <BarsIcon className="w-6 h-6" />
            </button>
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-900/0.1 lg:hidden"
            ></div>
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="relative flex flex-1">
                <SearchIcon className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" />
                <input
                  id="search-field"
                  name="search"
                  type="search"
                  placeholder="Search..."
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus-visible:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-1.5 p-1.5 text-gray-400">
                  <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
                    View notifications
                  </span>
                  <BellIcon className="w-6 h-6 shrink-0 text-gray-400" />
                </button>
                <div
                  aria-hidden="true"
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                ></div>
                <div className="relative">
                  <button
                    className="-m-2.5 flex items-center p-2.5"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
                      Open user menu
                    </span>
                    <Image
                      alt=""
                      src="./vercel.svg"
                      className="h-8 w-8 rounded-full border bg-gray-50"
                      width={40}
                      height={40}
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                      >
                        Tom Cook
                      </span>
                      <ChevronIcon className="ml-2 h-5 w-5 text-gray-400" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <main className="py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
