'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image 
      alt="Logo" 
      src="/images/logo.png" 
      width={100} 
      height={100}
      className="hidden md:block cursor-pointer"
    />
  )
}

export default Logo;