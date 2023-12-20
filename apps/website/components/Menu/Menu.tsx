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
          <Link href="/job-offers" className="text-lg text-black">
            Job offers
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/reviews" className="text-lg text-black">
            Reviews
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact" className="text-lg text-black">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
