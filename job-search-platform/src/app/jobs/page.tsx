import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export default function JobsPage() {
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
                <Link href="/jobs" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
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

      {/* Search and Filter Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="search"
              placeholder="Job title, company, or keyword"
              className="bg-white rounded-md flex-grow"
            />
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="City or location"
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
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white p-4 rounded-md border mb-4">
              <h3 className="font-medium mb-3">Salary Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Up to 100,000 ₸</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">100,000 - 200,000 ₸</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">200,000 - 400,000 ₸</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">400,000 - 700,000 ₸</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Over 700,000 ₸</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border mb-4">
              <h3 className="font-medium mb-3">Work Experience</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">No experience</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">1-3 years</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">3-6 years</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">More than 6 years</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border">
              <h3 className="font-medium mb-3">Employment Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Full-time</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Part-time</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Remote</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Internship</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Project work</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">3,642 jobs found</h2>
              <div className="flex items-center">
                <span className="text-sm mr-3">Sort by:</span>
                <select className="text-sm border rounded p-1">
                  <option>Date (newest)</option>
                  <option>Salary (highest)</option>
                  <option>Relevance</option>
                </select>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                <TabsTrigger value="applied">Applied Jobs</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="space-y-4">
                  {jobListings.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="saved">
                <div className="text-center py-8">
                  <p className="text-gray-500">You have no saved jobs</p>
                  <p className="text-sm text-gray-400 mt-2">Save jobs to view them later</p>
                </div>
              </TabsContent>
              <TabsContent value="applied">
                <div className="text-center py-8">
                  <p className="text-gray-500">You have not applied to any jobs</p>
                  <p className="text-sm text-gray-400 mt-2">Jobs you apply to will appear here</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-center">
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
          </div>
        </div>
      </div>

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

function JobCard({ job }: { job: JobListing }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-200 rounded-md mr-4 flex-shrink-0"></div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <Link href={`/jobs/${job.id}`} className="text-lg font-medium text-blue-600 hover:underline">
                  {job.title}
                </Link>
                <div className="text-sm text-gray-600 mt-1">{job.company}</div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </Button>
            </div>
            <div className="text-sm mt-3">
              <div className="flex gap-3 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  {job.location}
                </Badge>
                <Badge variant="outline" className="text-xs font-normal">
                  {job.jobType}
                </Badge>
                {job.remote && (
                  <Badge variant="outline" className="text-xs font-normal">
                    Remote
                  </Badge>
                )}
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {job.description}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm font-medium">{job.salary}</div>
              <div className="text-xs text-gray-500">
                Posted {job.postedDate}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

type JobListing = {
  id: number
  title: string
  company: string
  location: string
  salary: string
  jobType: string
  remote: boolean
  postedDate: string
  description: string
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Freedom Finance",
    location: "Almaty",
    salary: "400,000 - 650,000 ₸",
    jobType: "Full-time",
    remote: true,
    postedDate: "2 days ago",
    description: "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. You will be responsible for developing and implementing user interface components."
  },
  {
    id: 2,
    title: "Sales Manager",
    company: "Kaspi Bank",
    location: "Astana",
    salary: "200,000 - 350,000 ₸",
    jobType: "Full-time",
    remote: false,
    postedDate: "1 day ago",
    description: "As a Sales Manager, you will be responsible for developing and maintaining relationships with clients, identifying new business opportunities, and meeting sales targets."
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Magnum",
    location: "Almaty",
    salary: "250,000 - 380,000 ₸",
    jobType: "Full-time",
    remote: false,
    postedDate: "3 days ago",
    description: "We are seeking a Marketing Specialist to execute marketing campaigns, analyze market trends, and assist in developing marketing strategies to increase brand awareness."
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Air Astana",
    location: "Almaty",
    salary: "450,000 - 700,000 ₸",
    jobType: "Full-time",
    remote: true,
    postedDate: "Just now",
    description: "Join our tech team as a Backend Developer to design and implement server-side applications and databases. Experience with Node.js and PostgreSQL is required."
  },
  {
    id: 5,
    title: "Customer Service Representative",
    company: "Telecontact",
    location: "Astana",
    salary: "120,000 - 180,000 ₸",
    jobType: "Full-time",
    remote: false,
    postedDate: "1 week ago",
    description: "We are looking for a Customer Service Representative to handle customer inquiries, resolve complaints, and provide information about our products and services."
  }
]
