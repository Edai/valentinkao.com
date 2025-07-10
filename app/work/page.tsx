import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import UnaConnectApp from '../../public/images/projects/unaconnect.png';
import InfodeckImage from '../../public/images/projects/infodeck-sage.png';
import KonvoyImage from '../../public/images/projects/konvoy.png';

const projects = [
  {
    name: 'GitReviewed',
    description:
      'A SaaS platform that transforms code reviews by letting you review code faster with AI assistance, under your own name instead of using generic bots. Built from the ground up with Next.js, Tailwind CSS, and Clerk for seamless authentication.',
    link: 'https://gitreviewed.com',
    company: 'Personal Project',
    type: 'Startup',
    frame: (
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/JTHSJTE8F_0?si=D9dw60B3orhxNdH4&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    name: 'UnaConnect',
    description:
      'A massive IoT platform connecting millions of devices worldwide. Built with a robust AWS Serverless backend using Lambda and DynamoDB, plus sleek React and React Native frontends.',
    link: 'https://una.bz/unaconnect',
    company: 'UnaBiz',
    type: 'Enterprise IoT',
    image: UnaConnectApp,
  },
  {
    name: 'Infodeck Sage',
    description:
      'An intelligent AI assistant for facilities management that leverages AWS ECS, ExpressJS, and AWS Bedrock to provide smart building insights and automation.',
    link: 'https://infodeck.io/sage-ai',
    company: 'Infodeck',
    type: 'AI Assistant',
    image: InfodeckImage,
  },
  {
    name: 'KegScan',
    description:
      'A React Native mobile app that revolutionizes beer keg tracking for Konvoy using IoT sensors, Bluetooth connectivity, and QR code scanning technology.',
    link: 'https://apps.apple.com/au/app/kegscan/id1486519700',
    company: 'UnaBiz',
    type: 'Mobile App',
    image: KonvoyImage,
  },
];

export default function Page() {
  return (
    <section className="space-y-12">
      {/* Experience Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Experience Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">💼 Recent Roles</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  Senior Software Engineer
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href="https://www.germen.io"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Germen
                  </a>{' '}
                  - French InsurTech
                </div>
              </div>

              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  Principal Engineer
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href="https://infodeck.io"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Infodeck
                  </a>{' '}
                  - AI & Facilities Management
                </div>
              </div>

              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  Software Engineering Lead
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href="https://unabiz.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    UnaBiz
                  </a>{' '}
                  - IoT Platform
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">🚀 Startup Founder</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Founded{' '}
              <a
                href="https://gitreviewed.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                GitReviewed
              </a>
              , a SaaS platform revolutionizing code reviews with personalized
              AI assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Here are some of the exciting projects I've worked on, spanning from
          IoT platforms to AI assistants and mobile applications.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-lg dark:hover:shadow-gray-900/25 transition-shadow ${
                project.frame
                  ? 'flex flex-col gap-6'
                  : `flex flex-col lg:flex-row items-center gap-6 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`
              }`}
            >
              <div
                className={
                  project.frame ? 'w-full' : 'flex-1 text-center lg:text-left'
                }
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-3">
                  <Link href={project.link} className="group">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                  </Link>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Built at {project.company}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              {project.image && !project.frame && (
                <div className="flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={280}
                    height={280}
                    className="rounded-lg object-cover shadow-md dark:shadow-gray-900/50"
                  />
                </div>
              )}

              {project.frame && (
                <div className="w-full">
                  <Suspense
                    fallback={
                      <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    }
                  >
                    <div className="aspect-video w-full max-w-4xl mx-auto">
                      {project.frame}
                    </div>
                  </Suspense>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800/40 dark:to-indigo-800/40 p-10 rounded-2xl text-center border-2 border-blue-200 dark:border-blue-600/50 shadow-lg dark:shadow-blue-900/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
            Interested in collaborating on a project or learning more about my
            experience? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="mailto:me@valentinkao.com"
              className="inline-flex items-center bg-blue-600 dark:bg-blue-500 !text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl !no-underline"
            >
              Get In Touch
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
