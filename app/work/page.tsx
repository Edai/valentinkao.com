import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Divider from 'app/components/divider';
import UnaConnectApp from '../../public/images/projects/unaconnect.png';
import InfodeckImage from '../../public/images/projects/infodeck-sage.png';
import KonvoyImage from '../../public/images/projects/konvoy.png';

const projects = [
  {
    name: 'UnaConnect',
    description:
      'IoT middleware platform handling 2M+ devices at 500+ req/s. Fully serverless AWS backend (Lambda, DynamoDB, API Gateway, AppSync). Multi-protocol support across Sigfox, LTE-M, NFC, and BLE. ISO 27001 certified. Built and led a team of 7 engineers.',
    link: 'https://una.bz/unaconnect',
    company: 'UnaBiz',
    type: 'Enterprise IoT',
    image: UnaConnectApp,
  },
  {
    name: "Cagn'Up",
    description:
      'FinTech mobile app with handling real money transactions. NestJS monorepo backend with 14+ shared libraries, PayPlug payments with KYC verification, gift card fulfillment, and cashback system. ECS Fargate, Aurora Serverless v2, Terraform + Terragrunt.',
    link: 'https://play.google.com/store/apps/details?id=com.cagnotte.garance',
    company: 'Germen / Garance Group',
    type: 'FinTech',
  },
  {
    name: 'DealBreaker',
    description:
      'AI-powered data extraction for French investment portfolio documents. TDD-driven approach: defined expected outputs first, iterated prompts until tests passed. FastAPI + Google Gemini, compliance-grade accuracy across 6+ financial institutions.',
    link: 'https://dealbreaker.germen.io',
    company: 'Germen / Garance Group',
    type: 'AI Data Extraction',
  },
  {
    name: 'GitReviewed',
    description:
      'AI code review SaaS. Multi-LLM aggregation strategy delivering reviews at 40% lower cost than single-provider approaches. You review under your own name instead of a generic bot. Next.js, OpenRouter, multi-model routing.',
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
    name: 'Infodeck Sage',
    description:
      'AI assistant for facilities management built on AWS Bedrock with multi-region setup. Natural language queries on IoT assets, automatic dashboard creation, 12+ action group Lambdas. Led a team of 4 engineers, 31 nested CDK stacks.',
    link: 'https://infodeck.io/sage-ai',
    company: 'Infodeck',
    type: 'AI Assistant',
    image: InfodeckImage,
  },
  {
    name: 'KegScan',
    description:
      'React Native mobile app for tracking beer kegs using IoT sensors, Bluetooth connectivity, and QR code scanning.',
    link: 'https://apps.apple.com/au/app/kegscan/id1486519700',
    company: 'UnaBiz',
    type: 'Mobile App',
    image: KonvoyImage,
  },
];

export default function Page() {
  return (
    <section>
      <p className="mb-8">
        Production systems I've built, from IoT platforms at 2M device scale to
        AI voice agents and FinTech apps handling real transactions.
      </p>

      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex items-baseline gap-3 mb-2">
              <Link href={project.link}>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {project.name}
                </h3>
              </Link>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                {project.type}
              </span>
            </div>

            <p className="mb-2">{project.description}</p>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
              Built at {project.company}
              {' · '}
              <Link
                href={project.link}
                className="text-blue-600 dark:text-blue-400"
              >
                View Project
              </Link>
            </p>

            {project.image && !project.frame && (
              <Image
                src={project.image}
                alt={project.name}
                width={280}
                height={280}
                className="rounded-lg"
              />
            )}

            {project.frame && (
              <Suspense
                fallback={
                  <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                }
              >
                <div className="aspect-video w-full max-w-4xl">
                  {project.frame}
                </div>
              </Suspense>
            )}
          </div>
        ))}
      </div>

      <Divider />

      <p>
        Available for freelance projects and consulting.{' '}
        <Link href="mailto:me@valentinkao.com">Get in touch</Link>.
      </p>
    </section>
  );
}
