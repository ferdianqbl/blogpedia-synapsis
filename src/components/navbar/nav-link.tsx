"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  href: string;
};

const NavLink: React.FC<Props> = ({ href, title }) => {
  const pathname = usePathname();
  const isCurrent = pathname.split("/")[1] === href.split("/")[1];
  return (
    <Link
      href={href}
      className={`py-1 px-3 ${
        isCurrent ? "bg-gray-700 text-white rounded-md font-medium" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
