import Link from 'next/link';

export const Menu = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <ul className="flex">
            <li className="mr-6">
              <Link href="/about" className="text-lg">
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/job-offers" className="text-lg">
                Job offers
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/reviews" className="text-lg">
                Reviews
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact" className="text-lg">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center"></div>
        </div>
      </div>
    </nav>
  );
};
