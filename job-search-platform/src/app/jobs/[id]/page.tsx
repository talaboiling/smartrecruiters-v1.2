'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { Card, CardContent } from "@/components/ui/card"

export default function JobDetailPage() {
  // In a real app, you would fetch the job details from a backend
  const job = jobDetails

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

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
            <span className="mx-2">/</span>
            <span>{job.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Details */}
          <div className="flex-grow">
            <div className="bg-white p-6 rounded-lg border mb-6">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-200 rounded-md mr-4 flex-shrink-0"></div>
                <div>
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-lg text-gray-600 mt-1">{job.company}</p>
                  <div className="flex gap-3 mt-4">
                    <Badge variant="secondary">
                      {job.location}
                    </Badge>
                    <Badge variant="outline">
                      {job.jobType}
                    </Badge>
                    {job.remote && (
                      <Badge variant="outline">
                        Remote
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-lg font-medium">Salary</h2>
                    <p className="text-gray-700 mt-1">{job.salary}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">Experience</h2>
                    <p className="text-gray-700 mt-1">{job.experience}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">Posted</h2>
                    <p className="text-gray-700 mt-1">{job.postedDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border mb-6">
              <h2 className="text-xl font-semibold mb-4">About the job</h2>
              <div className="space-y-4 text-gray-700">
                <p>{job.about}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border mb-6">
              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border mb-6">
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="sticky top-4">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <Button className="w-full mb-4">Apply Now</Button>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Save Job
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4">About the company</h2>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-md mr-3"></div>
                    <div>
                      <h3 className="font-medium">{job.company}</h3>
                      <Link href={`/companies/1`} className="text-sm text-blue-600 hover:underline">
                        View company profile
                      </Link>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <span className="font-medium">Industry:</span> {job.industry}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Company size:</span> {job.companySize}
                    </p>
                    <p>
                      <span className="font-medium">Founded:</span> {job.founded}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Similar Jobs */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Similar Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Link href={`/jobs/${job.id}`} className="text-lg font-medium text-blue-600 hover:underline">
                    {job.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-normal">
                      {job.jobType}
                    </Badge>
                  </div>
                  <p className="text-sm mt-4 text-gray-700">{job.salary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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

const jobDetails = {
  id: 1,
  title: "Frontend Developer",
  company: "Freedom Finance",
  location: "Almaty",
  salary: "400,000 - 650,000 ₸",
  jobType: "Full-time",
  remote: true,
  experience: "2-4 years",
  postedDate: "2 days ago",
  about: "We are looking for a skilled Frontend Developer with expertise in React.js to join our growing team. In this role, you will be responsible for developing and implementing user interface components using React.js and other frontend technologies. You will work with a team of designers and backend developers to create seamless user experiences.",
  responsibilities: [
    "Develop and implement user interface components using React.js and other frontend technologies",
    "Work with designers to implement visual elements and create responsive designs",
    "Optimize applications for maximum speed and scalability",
    "Collaborate with back-end developers for API integrations",
    "Write clean, maintainable, and reusable code",
    "Troubleshoot and debug applications",
    "Stay up-to-date with emerging trends and technologies in web development"
  ],
  requirements: [
    "2-4 years of experience in frontend development",
    "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
    "Thorough understanding of React.js and its core principles",
    "Experience with modern JavaScript frameworks and libraries like Next.js",
    "Familiarity with RESTful APIs and experience integrating with backend services",
    "Good understanding of HTML5, CSS3, and responsive design",
    "Experience with version control system (Git)",
    "Knowledge of code optimization and performance techniques",
    "Good problem-solving skills and attention to detail"
  ],
  benefits: [
    "Competitive salary: 400,000 - 650,000 ₸ (depending on experience)",
    "Flexible working hours",
    "Remote work options",
    "Health insurance",
    "Professional development opportunities",
    "Modern office space in Almaty",
    "Team building activities and events",
    "Friendly and collaborative work environment"
  ],
  industry: "Financial Services",
  companySize: "1,000-5,000 employees",
  founded: "2004"
}

const similarJobs = [
  {
    id: 2,
    title: "React Developer",
    company: "Kaspi Bank",
    location: "Astana",
    salary: "450,000 - 700,000 ₸",
    jobType: "Full-time"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Telecontact",
    location: "Almaty",
    salary: "500,000 - 800,000 ₸",
    jobType: "Full-time"
  },
  {
    id: 4,
    title: "JavaScript Developer",
    company: "Air Astana",
    location: "Almaty",
    salary: "350,000 - 550,000 ₸",
    jobType: "Full-time"
  }
]
