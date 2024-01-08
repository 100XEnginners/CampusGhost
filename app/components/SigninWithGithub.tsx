"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export default function SigninWithGithub() {
  return (
    <Button onClick={() => signIn("github", { callbackUrl: `${window.location.origin}` })} className="mt-4">
      Login with Github
    </Button>
  )
}
