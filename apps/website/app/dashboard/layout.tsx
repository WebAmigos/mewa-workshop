import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-row">
      <div className="px-4 text-sm">
        <Link href="/">Back to home</Link>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
}
