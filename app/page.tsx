import Navbar from "@/components/navigation/navbar";
import useUser from "@/hooks/useContext";
import Link from 'next/link'
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import Logo from "./logo.png"
import Image from "next/image";

export default async function HomePage() {
  
  const user = await useUser();

  if (user) {
    return redirect('/dashboard');
  }

  return (
    <div className="flex-1 w-full flex flex-col justify-center gap-5 items-center m-5">
      
      <div className="flx flex-col items-center gap-2">
        <div className="w-52 h-52 opacity-70">
          <Image
            src={Logo}
            alt="DOrmHive Logo"
          />
        </div>
        <h1 className="text-4xl font-bold text-center">Dormhive</h1>
      </div>
      
      <h2 className="text-xl">Connecting dorms with their tenants</h2>
      <Link href="/dashboard">
        <Button>Get Started</Button>
        
      </Link>
    </div>
  )
}
