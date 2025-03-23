import Link from "next/link"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              JobFinderKZ
            </Link>
            <NavigationMenu>
              <nav className="flex items-center space-x-4">
                <Link href="/jobs" className="text-sm font-medium hover:text-blue-600">
                  Find Jobs
                </Link>
                <Link href="/companies" className="text-sm font-medium hover:text-blue-600">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job</h1>
            <div className="flex flex-col md:flex-row gap-2 mb-8">
              <Input
                type="search"
                placeholder="Job title, company, or keyword"
                className="bg-white rounded-md"
              />
              <Button className="px-8">
                Search
              </Button>
            </div>
            <div className="stats flex gap-8 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-blue-600">648,613</span> vacancies
              </div>
              <div>
                <span className="font-semibold text-blue-600">41,557</span> companies
              </div>
              <div>
                <span className="font-semibold text-blue-600">124,527</span> resumes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Jobs by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category) => (
              <Card key={category.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{category.salary}</p>
                  <Badge variant="outline" className="text-xs">
                    {category.count} vacancies
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company) => (
              <Link href={`/companies/${company.id}`} key={company.id}>
                <div className="flex flex-col items-center p-4 bg-white rounded-md hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
                  <h3 className="text-sm font-medium text-center">{company.name}</h3>
                  <p className="text-xs text-gray-500 text-center">{company.vacancies} vacancies</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">JobFinderKZ</h3>
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
            <p>© 2025 JobFinderKZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const jobCategories = [
  { title: "IT Specialist", salary: "200,000 - 500,000 ₸", count: 3082 },
  { title: "Sales Manager", salary: "100,000 - 300,000 ₸", count: 2532 },
  { title: "Accountant", salary: "150,000 - 300,000 ₸", count: 1042 },
  { title: "Driver", salary: "100,000 - 200,000 ₸", count: 1928 },
  { title: "Marketing Specialist", salary: "200,000 - 400,000 ₸", count: 823 },
  { title: "Cashier", salary: "90,000 - 170,000 ₸", count: 712 },
]

const companies = [
  { id: 1, name: "Freedom Finance", vacancies: 46 },
  { id: 2, name: "Kaspi Bank", vacancies: 29 },
  { id: 3, name: "Magnum", vacancies: 98 },
  { id: 4, name: "Air Astana", vacancies: 22 },
  { id: 5, name: "Telecontact", vacancies: 36 },
  { id: 6, name: "Orion Group", vacancies: 19 },
]
