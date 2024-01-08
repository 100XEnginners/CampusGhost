import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <CardContent className="flex flex-col">
          <SigninWithGithub />
        </CardContent>
      </Card>
    </div>
  )
}
