import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="mt-auto bg-slate-900 text-white">
      <div className="container mx-auto p-4">
        <ul className="flex">
          <li className="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
