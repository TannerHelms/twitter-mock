import { redirect } from "next/navigation"


// Build a landing page here
export default function Landing() {
    return redirect("/signin")
}