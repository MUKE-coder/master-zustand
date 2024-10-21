'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface User {
  name: string
  email: string
  age: number
  image: string
  course: string
  role: string
}

// This is a mock function to simulate getting the user data
// In a real application, you would fetch this data from your backend
const getUser = (): User | null => {
  // Simulating an authenticated user
  // Return null if no user is logged in
  return {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    image: '/placeholder.svg?height=128&width=128',
    course: 'Computer Science',
    role: 'Student'
  }
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = getUser()
    setUser(userData)
  }, [])

  const handleLogout = () => {
    // Implement logout logic here
    // For now, we'll just clear the user state and redirect to home
    setUser(null)
    router.push('/')
  }

  const handleLogin = () => {
    router.push('/login')
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Not Logged In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">You need to log in to view your profile.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleLogin}>Log In</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image
            src={user.image}
            alt={user.name}
            width={128}
            height={128}
            className="rounded-full mb-4"
          />
          <div className="space-y-2 text-center">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Course:</strong> {user.course}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleLogout} variant="destructive">Log Out</Button>
        </CardFooter>
      </Card>
    </div>
  )
}