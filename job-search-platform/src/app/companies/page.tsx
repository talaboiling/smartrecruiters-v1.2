import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export default function CompaniesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SmartRecruiters
            </Link>
            <NavigationMenu>
              <nav className="flex items-center space-x-4">
                <Link href="/jobs" className="text-sm font-medium hover:text-blue-600">
                  Find Jobs
                </Link>
                <Link href="/companies" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  Companies
                </Link>
                <Link href="/remote" className="text-sm font-medium hover:text-blue-600">
                  Remote Work
                </Link>
              </nav>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/account/signup">
              <Button variant="outline" size="sm">Create Resume</Button>
            </Link>
            <Link href="/account/login">
              <Button size="sm">Log In</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Search section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="search"
              placeholder="Company name or industry"
              className="bg-white rounded-md flex-grow"
            />
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Location"
                className="bg-white rounded-md w-36 md:w-44"
              />
              <Button className="px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-6">Top Companies in Kazakhstan</h1>

        {/* Featured Companies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-32 bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Cover image</div>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <div className="w-16 h-16 bg-gray-200 rounded-md absolute -top-8 left-6 border-2 border-white"></div>
                <div className="mt-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link href={`/companies/${company.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                        {company.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{company.industry}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {company.openings} openings
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">{company.description}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {company.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Companies */}
        <h2 className="text-xl font-semibold mb-4">All Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-200 rounded-md mr-4 flex-shrink-0"></div>
                  <div>
                    <Link href={`/companies/${company.id}`} className="text-lg font-medium text-blue-600 hover:underline">
                      {company.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{company.industry}</p>
                    <p className="text-sm text-gray-600 mt-3">{company.location}</p>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs font-normal">
                        {company.openings} job openings
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <div className="flex">
            <Button variant="outline" size="sm" className="rounded-r-none">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="rounded-none bg-blue-50">
              1
            </Button>
            <Button variant="outline" size="sm" className="rounded-none">
              2
            </Button>
            <Button variant="outline" size="sm" className="rounded-none">
              3
            </Button>
            <Button variant="outline" size="sm" className="rounded-l-none">
              Next
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SmartRecruiters</h3>
              <p className="text-gray-400 text-sm">
                The leading job search platform in Kazakhstan helping professionals find their dream jobs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2">
                <li><Link href="/search" className="text-gray-400 hover:text-white text-sm">Search Jobs</Link></li>
                <li><Link href="/account/signup" className="text-gray-400 hover:text-white text-sm">Create Resume</Link></li>
                <li><Link href="/salary" className="text-gray-400 hover:text-white text-sm">Salary Guide</Link></li>
                <li><Link href="/career-advice" className="text-gray-400 hover:text-white text-sm">Career Advice</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2">
                <li><Link href="/employer" className="text-gray-400 hover:text-white text-sm">Post a Job</Link></li>
                <li><Link href="/employer/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
                <li><Link href="/employer/resources" className="text-gray-400 hover:text-white text-sm">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <p>© 2025 SmartRecruiters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data for featured companies
const featuredCompanies = [
  {
    id: 1,
    name: "Freedom Finance",
    industry: "Financial Services",
    description: "Freedom Finance is a financial services company specializing in investment banking, securities trading, and asset management.",
    location: "Almaty, Kazakhstan",
    openings: 46
  },
  {
    id: 2,
    name: "Kaspi Bank",
    industry: "Banking & Financial Services",
    description: "Kaspi Bank is a leading digital bank in Kazakhstan offering a wide range of financial services through its innovative digital platforms.",
    location: "Almaty, Kazakhstan",
    openings: 29
  },
  {
    id: 3,
    name: "Magnum",
    industry: "Retail & Consumer Goods",
    description: "Magnum is one of the largest retail chains in Kazakhstan operating hypermarkets, supermarkets, and convenience stores nationwide.",
    location: "Almaty, Kazakhstan",
    openings: 98
  }
]

// Sample data for all companies
const allCompanies = [
  {
    id: 4,
    name: "Air Astana",
    industry: "Aviation & Transportation",
    location: "Almaty, Kazakhstan",
    openings: 22
  },
  {
    id: 5,
    name: "Telecontact",
    industry: "Customer Service & Call Center",
    location: "Astana, Kazakhstan",
    openings: 36
  },
  {
    id: 6,
    name: "Orion Group",
    industry: "Construction & Engineering",
    location: "Almaty, Kazakhstan",
    openings: 19
  },
  {
    id: 7,
    name: "Beeline Kazakhstan",
    industry: "Telecommunications",
    location: "Almaty, Kazakhstan",
    openings: 31
  },
  {
    id: 8,
    name: "Kcell",
    industry: "Telecommunications",
    location: "Almaty, Kazakhstan",
    openings: 15
  },
  {
    id: 9,
    name: "KazMunayGas",
    industry: "Oil & Gas",
    location: "Astana, Kazakhstan",
    openings: 42
  }
]
