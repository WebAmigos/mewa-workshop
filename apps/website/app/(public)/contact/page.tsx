import Image from 'next/image';

import { Header } from '@ems/common-ui';

export default function ContactPage() {
  return (
    <div>
      <Header>Contact</Header>
      <p>Contact us</p>
      <Image src="/nachos.png" alt="Nachos" width={600} height={400} />
    </div>
  );
}
