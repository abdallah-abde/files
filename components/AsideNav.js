import React from "react";
import Link from "next/link";

const AsideNav = () => {
  const renderLink = ({ id, title, to, customStyle }) => {
    return (
      <Link href={`${to}`} key={id}>
        <a
          className={`p-2 hover:bg-gray-300 hover:text-gray-800 transition duration-500 ease-out ${customStyle}`}
        >
          {`${title}`}
        </a>
      </Link>
    );
  };

  const links = [
    { id: "1", title: "Files", to: "/files", customStyle: "" },
    { id: "2", title: "Clients", to: "#", customStyle: "" },
    { id: "3", title: "Daily", to: "#", customStyle: "" },
    { id: "4", title: "Tasks", to: "#", customStyle: "" },
    { id: "5", title: "Settings", to: "#", customStyle: "" },
  ];

  return (
    <aside className="h-screen w-1/6 bg-gray-800 text-gray-300 font-semibold flex flex-col sticky top-0 bottom-0 left-0">
      <div className="text-2xl p-2 border-b">
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <div className="flex flex-col flex-1 gap-3">
        {links.map((link) => renderLink(link))}
      </div>
      <div className="flex">
        {renderLink({
          id: "6",
          title: "Logout",
          to: "#",
          customStyle: "flex-1 border-t",
        })}
      </div>
    </aside>
  );
};

export default AsideNav;
