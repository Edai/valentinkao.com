import TextComponent from 'app/components/text';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '../me.png';

// Content constants for easier maintenance
const ABOUT_CONTENT = {
  hero: {
    title: "👋 I'm Valentin Kao",
    description1:
      'Senior Software Engineer with a focus on AWS cloud solutions, serverless backends, and AI-driven applications. I architect and deliver robust, scalable platforms, leveraging AWS (Lambda, DynamoDB, API Gateway), Node.js, and Next.js to solve real business problems.',
    description2:
      'Originally from Toulouse, France 🇫🇷, I help teams move fast by integrating AI (custom assistants, code reviewers, simulators) and building future-proof cloud infrastructure.',
  },
  skills: {
    sectionTitle: 'Technical Expertise',
    technicalStack: {
      title: '🚀 Technical Stack',
      items: {
        cloud:
          'AWS (Lambda, DynamoDB, S3, API Gateway, ECS), Serverless Architecture, CI/CD',
        ai: 'OpenAI API, Claude, ChatGPT, Custom AI assistants, AI code review tools, LiveKit',
        backend:
          'Node.js, NestJS, FastAPI, Python, WebSocket APIs, Event-driven systems',
        frontend: 'React, Next.js, TypeScript, Tailwind CSS, PWA',
        integration:
          'Bluetooth, IoT, Third-party APIs, Real-time data pipelines',
        apps: 'Mobile (React Native), Real-time & data-driven applications',
      },
    },
    services: {
      title: '💼 What I Offer',
      items: [
        'AWS cloud & serverless backend development',
        'Design and build custom AI-powered tools and assistants',
        'Conversational simulators & code review automation',
        'Cloud infrastructure & DevOps',
        'Mobile and real-time app development',
      ],
    },
  },
  experience: {
    sectionTitle: 'Experience Highlights',
    enterprise: {
      icon: '☁️',
      title: 'Cloud & Backend Solutions',
      description:
        'Architected and shipped production-ready cloud applications using AWS serverless and Node.js. Currently solving real-world challenges at Germen (InsurTech); previously built IoT platforms at UnaBiz and Infodeck.',
    },
    startup: {
      icon: '🚀',
      title: 'AI Application Development',
      description:
        'Founder of GitReviewed, a SaaS with AI-driven code reviews. Deep experience designing, building, and scaling custom AI assistants, conversational agents, and developer tools.',
    },
  },
  personal: {
    title: '🌱 Outside of Tech',
    description:
      'When I’m not building software, I’m recharging with Muay Thai 🥊, lifting, or running.',
  },
  callToAction: {
    title: 'Let’s Build Smarter Apps',
    description:
      'Ready to scale up your business with modern cloud and AI solutions? I’m open to new projects, let’s turn your next idea into reality.',
    primaryButton: 'Contact Me',
    secondaryButton: 'See My Work →',
  },
};

export default function Page() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
        <div className="flex-1">
          <h1 className="font-bold text-3xl lg:text-4xl mb-6 text-gray-900 dark:text-white">
            {ABOUT_CONTENT.hero.title}
          </h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <TextComponent>{ABOUT_CONTENT.hero.description1}</TextComponent>
            <TextComponent>{ABOUT_CONTENT.hero.description2}</TextComponent>
            <TextComponent>{ABOUT_CONTENT.personal.description}</TextComponent>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              alt="Valentin Kao"
              src={ProfileImage}
              width={280}
              height={280}
              className="rounded-2xl shadow-lg dark:shadow-gray-900/50"
            />
          </div>
        </div>
      </div>

      {/* Skills & Expertise */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {ABOUT_CONTENT.skills.sectionTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
              {ABOUT_CONTENT.skills.technicalStack.title}
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div>
                <strong>Cloud:</strong>{' '}
                {ABOUT_CONTENT.skills.technicalStack.items.cloud}
              </div>
              <div>
                <strong>AI:</strong>{' '}
                {ABOUT_CONTENT.skills.technicalStack.items.ai}
              </div>
              <div>
                <strong>Apps:</strong>{' '}
                {ABOUT_CONTENT.skills.technicalStack.items.apps}
              </div>
              <div>
                <strong>Frontend:</strong>{' '}
                {ABOUT_CONTENT.skills.technicalStack.items.frontend}
              </div>
              <div>
                <strong>Backend:</strong>{' '}
                {ABOUT_CONTENT.skills.technicalStack.items.backend}
              </div>
              <div>
                <strong>Integration:</strong>{' '}
                {ABOUT_CONTENT.skills.technicalStack.items.integration}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
              {ABOUT_CONTENT.skills.services.title}
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              {ABOUT_CONTENT.skills.services.items.map((item, index) => (
                <div key={index}>• {item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Highlights */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {ABOUT_CONTENT.experience.sectionTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/25 transition-shadow">
            <div className="text-3xl mb-3">
              {ABOUT_CONTENT.experience.enterprise.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              {ABOUT_CONTENT.experience.enterprise.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {ABOUT_CONTENT.experience.enterprise.description}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/25 transition-shadow">
            <div className="text-3xl mb-3">
              {ABOUT_CONTENT.experience.startup.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              {ABOUT_CONTENT.experience.startup.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {ABOUT_CONTENT.experience.startup.description}
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800/40 dark:to-indigo-800/40 p-10 rounded-2xl text-center border-2 border-blue-200 dark:border-blue-600/50 shadow-lg dark:shadow-blue-900/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {ABOUT_CONTENT.callToAction.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
            {ABOUT_CONTENT.callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="mailto:me@valentinkao.com"
              className="inline-flex items-center bg-blue-600 dark:bg-blue-500 !text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl !no-underline"
            >
              {ABOUT_CONTENT.callToAction.primaryButton}
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
            <Link
              href="/work"
              className="inline-flex items-center !text-gray-700 dark:!text-white hover:!text-gray-900 dark:hover:!text-gray-200 font-semibold text-lg transition-colors !no-underline"
            >
              {ABOUT_CONTENT.callToAction.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
