import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SigninWithGithub from "../components/SigninWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/")
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="min-w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Sign In here</CardTitle>
          <CardDescription className="text-center">Become a part of Campus Ghost Social Network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email-id">Email:</label>
              <Input type="email" id="email-id" placeholder="username@email.com" />
            </div>
            <Button className="mt-4">Login with Email</Button>
            <SigninWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
