import Link from "next/link";

const FooterLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="relative block py-2 pl-3 pr-4 text-white sm:text-sm rounded md:p-0 group">
        <span className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
        {title}
      </div>
    </Link>
  );
};

export default FooterLink;