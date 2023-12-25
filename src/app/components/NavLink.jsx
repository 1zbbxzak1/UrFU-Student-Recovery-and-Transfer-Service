import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="relative block py-2 pl-3 pr-4 text-white sm:text-xl lg:text-[14px] lg:leading-[17.07px] rounded md:p-0 group">
        <span
          className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"
        ></span>
        {title}
      </div>
    </Link>
  );
};

export default NavLink;