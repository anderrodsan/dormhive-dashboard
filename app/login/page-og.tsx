import Link from 'next/link'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'


// Shadcn UI components
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/navigation/navbar'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {

  // Sing In with passsword
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/')
  }

  // Sign up with password
  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <div className='h-full'>
      <Navbar />
      <div className="relative flex justify-center items-center h-full">

        <Link
          href="/"
          className="absolute left-0 top-5 py-2 px-5 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{' '}
          Back
        </Link>

        <Card className='w-full md:w-1/3 py-10 px-5'>
          <h1 className='text-3xl text-center pb-4'>Log In</h1>
          <form
            className="animate-in flex flex-col justify-start"
            action={signIn}
          >
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
            />
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <Button className="mb-2">
              Log In
            </Button>
            <Button
              formAction={signUp}
              variant="secondary"
            >
              Sign Up
            </Button>
            {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
            </p>
            )}
          </form>
        </Card>
      </div>
    </div>
  )
}
