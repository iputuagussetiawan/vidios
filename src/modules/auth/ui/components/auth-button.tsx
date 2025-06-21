"use client"
import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import React from 'react'
import {SignInButton,SignedIn, SignedOut, UserButton} from '@clerk/nextjs'

const AuthButton = () => {
    //TODO - Add different auth state
    return (
        <>
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton mode='modal'>
                <Button
                    variant="outline"
                    className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none'
                >
                    <UserCircleIcon className='size-5' />
                    Sign In
                </Button>
            </SignInButton>
        </SignedOut>
        </>
    )
}

export default AuthButton