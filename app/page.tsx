import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button variant="default">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="destructive">Click me</Button>
    </div>
  )
}