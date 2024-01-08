import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className='text-2xl text-center mt-8 font-semibold'>Hello from index page, this is a public route.</h1>
      <h2 className="text-xl text-center mt-2 font-medium">We need to update the UI of this page.</h2>
    </div>
  )
}
