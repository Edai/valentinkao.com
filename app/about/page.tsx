import Image from 'next/image';
import Link from 'next/link';
import Divider from 'app/components/divider';
import ProfileImage from '../me.png';

export default function Page() {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row items-start gap-8">
        <div className="flex-1">
          <h1 className="font-bold text-2xl mb-4 tracking-tight">
            Valentin Kao
          </h1>
          <p className="mb-4">
            <strong>Senior Software Engineer</strong> and{' '}
            <strong>AWS Solutions Architect</strong> based in Taiwan, originally
            from Toulouse, France. I build production systems from scratch:
            serverless backends, cloud infrastructure, and AI-powered
            applications.
          </p>
          <p className="mb-4">
            I've built an IoT platform that scaled to{' '}
            <strong>2M devices</strong> at 500+ req/s, a FinTech app backend
            serving handling real money transactions, and production AI systems
            including voice interview agents and automated data extraction.
          </p>
          <p className="mb-4">
            I work as a freelance engineer and consultant. If you need someone
            to own your backend, infrastructure, and AI stack end-to-end, from
            architecture to production, that's what I do.
          </p>
          <p>
            When I'm not building software, I'm recharging with Muay Thai,
            lifting, or running.
          </p>
        </div>
        <div className="shrink-0">
          <Image
            alt="Valentin Kao"
            src={ProfileImage}
            width={200}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </div>

      <Divider />

      <h2 className="font-bold text-xl mb-4 tracking-tight">What I do</h2>
      <p className="mb-2">
        <strong>Cloud & serverless backends:</strong> AWS Lambda, DynamoDB, API
        Gateway, ECS Fargate, SQS/SNS, EventBridge, Step Functions
      </p>
      <p className="mb-2">
        <strong>AI in production:</strong> OpenAI, Claude, AWS Bedrock, Google
        Gemini, LiveKit voice agents, RAG pipelines, multi-LLM routing
      </p>
      <p className="mb-2">
        <strong>Infrastructure as Code:</strong> Terraform + Terragrunt, AWS
        CDK, SAM, CloudFormation
      </p>
      <p className="mb-2">
        <strong>Backend:</strong> Node.js, NestJS, FastAPI, Python, TypeScript,
        WebSocket APIs, event-driven systems
      </p>
      <p className="mb-2">
        <strong>Frontend & mobile:</strong> React, Next.js, React Native + Expo,
        Tailwind CSS
      </p>
      <p>
        <strong>Data & integrations:</strong> PostgreSQL, DynamoDB, Kinesis, IoT
        (LoRaWAN, Sigfox, BLE), Stripe, third-party APIs
      </p>

      <Divider />

      <h2 className="font-bold text-xl mb-4 tracking-tight">Experience</h2>
      <div className="mb-3">
        <strong>Senior Developer & Solutions Architect</strong>
        {' at '}
        <a
          href="https://www.germen.io"
          className="text-blue-600 dark:text-blue-400"
        >
          Germen / Garance Group
        </a>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          FinTech platforms (Cagn'Up, DealBreaker). NestJS, ECS Fargate,
          Terraform
        </p>
      </div>
      <div className="mb-3">
        <strong>Principal Software Engineer</strong>
        {' at '}
        <a
          href="https://infodeck.io"
          className="text-blue-600 dark:text-blue-400"
        >
          Infodeck
        </a>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Multi-tenant IoT SaaS with Bedrock AI. Led team of 4, AWS CDK, 31
          nested stacks
        </p>
      </div>
      <div className="mb-3">
        <strong>Software Engineering Lead</strong>
        {' at '}
        <a
          href="https://unabiz.com"
          className="text-blue-600 dark:text-blue-400"
        >
          UnaBiz
        </a>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          IoT middleware for 2M devices. Built and led team of 7, ISO 27001
          certified
        </p>
      </div>
      <div>
        <strong>Founder</strong>
        {' of '}
        <a
          href="https://gitreviewed.com"
          className="text-blue-600 dark:text-blue-400"
        >
          GitReviewed
        </a>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          AI code review SaaS. Multi-LLM routing, 40% cost reduction vs.
          single-provider
        </p>
      </div>

      <Divider />

      <h2 className="font-bold text-xl mb-4 tracking-tight">Education</h2>
      <div className="mb-2">
        <strong>Master's in Computer Science</strong>
        {', '}
        EPITECH Paris
        <span className="text-neutral-500 dark:text-neutral-400">
          {' (Valedictorian)'}
        </span>
      </div>
      <div className="mb-2">
        <strong>Master's in Entrepreneurship & Innovation</strong>
        {', '}
        University of Haute-Alsace
        <span className="text-neutral-500 dark:text-neutral-400">
          {' (Highest Honors)'}
        </span>
      </div>
      <div>
        <strong>Graduate Studies in Advanced Computing</strong>
        {', '}
        Tsinghua University, Beijing
      </div>

      <Divider />

      <p>
        Available for freelance projects and consulting.{' '}
        <Link href="mailto:me@valentinkao.com">Reach out</Link>, or check out my{' '}
        <Link href="/work">work</Link>.
      </p>
    </section>
  );
}
