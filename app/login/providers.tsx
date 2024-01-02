"use client"

import { redirect } from "next/navigation"
import { createClient as createBrowserClient } from '@/utils/supabase/client'
import { Button } from "@/components/ui/button"


export default function AuthProvider() {

    async function singInWithGoogle(){
        
        const supabase = createBrowserClient()
        
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            
        })

        console.log('authenticated', data);
        
        if (error) {
            return redirect('/login?message=Could not authenticate user')
        }

        
    }


  return (

    <Button onClick={() => {singInWithGoogle()}}
        className='w-full'
        variant="secondary"
    >
        Sing in with Google
    </Button>
  )
}
