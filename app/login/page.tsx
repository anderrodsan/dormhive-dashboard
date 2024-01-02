"use client"

import React from 'react'

import { Auth } from '@supabase/auth-ui-react'

import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'

import { createClient } from '@/utils/supabase/client'

export default function Login() {

  const { theme } = useTheme()
  const supabase = createClient();

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <Card className='p-5 w-full sm:w-1/2'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#4a5568',
                  brandAccent: '#718096',
                },
              },
            }, 
          }}
          providers={['google', 'facebook', 'twitter']}
          theme={theme == 'light'? 'light' : 'dark'}
          redirectTo='http://localhost:3000/auth/callback'
        />
      </Card>
      
    </div>
  )
}
