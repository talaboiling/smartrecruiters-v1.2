'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SmartRecruiters
            </Link>
          </div>
          <div>
            <Link href="/account/login">
              <Button variant="outline" size="sm">Log In</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-12">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="jobseeker" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
              <TabsTrigger value="employer">Employer</TabsTrigger>
            </TabsList>
            <TabsContent value="jobseeker">
              <SignupForm />
            </TabsContent>
            <TabsContent value="employer">
              <Card>
                <CardHeader>
                  <CardTitle>Employer Registration</CardTitle>
                  <CardDescription>
                    Create an account to post jobs and find talent
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-6">
                    <p className="text-sm text-gray-500 mb-4">
                      To register as an employer, please complete the company registration form.
                    </p>
                    <Button>
                      Continue to Company Registration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2025 SmartRecruiters. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function SignupForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log({ fullName, email, password })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Sign up to start your job search journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Password must be at least 6 characters long
              </p>
            </div>
            <Button type="submit" className="w-full mt-4">Create Account</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/account/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
