import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Next.js Geist Font Starter
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A modern starter template with Geist fonts and shadcn/ui components
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Geist Sans</CardTitle>
              <CardDescription className="font-sans">
                Beautiful sans-serif font by Vercel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm">
                This text uses the Geist Sans font family. It&apos;s clean, modern, and highly readable.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Geist Mono</CardTitle>
              <CardDescription className="font-mono">
                Perfect monospace font for code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="font-mono text-sm bg-muted px-2 py-1 rounded">
                console.log(&quot;Hello World&quot;);
              </code>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>
                Beautiful, accessible components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}