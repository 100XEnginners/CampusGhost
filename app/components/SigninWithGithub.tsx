"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { signIn } from "next-auth/react"

export default function SigninWithGithub() {
  return (
    <Button onClick={() => signIn("github", { callbackUrl: `${window.location.origin}` })} className="mt-4">
      <Github className="mr-2 h-4 w-4" />
      Sign In with Github
    </Button>
  )
}
