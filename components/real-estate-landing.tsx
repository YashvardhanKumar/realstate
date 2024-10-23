'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function RealEstateLandingComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">DreamHome Realty</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Properties
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Agents
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Dream Home
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the perfect property that fits your lifestyle and budget.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Enter location, property type, or keywords" type="text" />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Image
                      alt="Property"
                      className="w-full h-48 object-cover rounded-md mb-4"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300`}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                    <h3 className="text-xl font-bold mb-2">Beautiful Family Home</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">123 Main St, Anytown, USA</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Spacious 4-bedroom house with a modern kitchen and large backyard.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">$450,000</span>
                      <Button>View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "DreamHome Realty made finding our perfect home a breeze. Their team was professional, knowledgeable,
                      and always available to answer our questions."
                    </p>
                    <div className="flex items-center">
                      <Image
                        alt="Client"
                        className="rounded-full mr-4"
                        height="40"
                        src={`/placeholder.svg?height=40&width=40`}
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="font-semibold">Jane Doe</p>
                        <p className="text-sm text-muted-foreground">Happy Homeowner</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Find Your Dream Home?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Let our expert agents guide you through the process and help you discover the perfect property.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Contact an Agent
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 DreamHome Realty. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}