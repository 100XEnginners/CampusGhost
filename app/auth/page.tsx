import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AuthRoute() {
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
            <Button className="mt-4">Login with GitHub</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
