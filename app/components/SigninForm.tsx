"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SigninForm() {
  const [email, setEmail] = useState<null | string>(null)
  async function signInWithEmail() {
    const signInResult = await signIn("email", { email: email, callbackUrl: `${window.location.origin}` })
  }
  return (
    <form action={signInWithEmail} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input onChange={event => setEmail(event.target.value)} type="email" placeholder="example@email.com" />
      </div>
      <Button type="submit"><Mail className="mr-2 w-4 h-4" /> Sign In with Email</Button>
    </form>
  )
}

// Signin using email is under development. This file is not being used and should not be used anywhare in the project.
