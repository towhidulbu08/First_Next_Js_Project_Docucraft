import Link from "next/link";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          alt="Logo"
          width={100}
          height={24}
          src="/logo.svg"
          className="h-6 w-auto"
        ></Image>
      </Link>
    </div>
  );
}
