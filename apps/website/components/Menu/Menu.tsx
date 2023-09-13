import Link from 'next/link';

export const Menu = () => {
  return (
    <nav className="container border-b-slate-800">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/about" className="text-lg text-black">
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/employees" className="text-lg text-black">
            Employees
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/people" className="text-lg text-black">
            People
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/reviews" className="text-lg text-black">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};
