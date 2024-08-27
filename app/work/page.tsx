import Image from 'next/image';
import Link from 'next/link';
import UnaConnectApp from '../../public/images/projects/unaconnect.png';
import InfodeckImage from '../../public/images/projects/infodeck-sage.png';
import KonvoyImage from '../../public/images/projects/konvoy.png';

const projects = [
  {
    name: 'UnaConnect',
    description:
      'Platform to connect million of IoT devices with a AWS Serverless backend (Lambda, DynamoDB) and Frontend interfaces built with React and React Native',
    link: 'https://una.bz/unaconnect',
    company: 'UnaBiz',
    image: UnaConnectApp,
  },
  {
    name: 'Infodeck Sage',
    description:
      'AI Assistant for Facilities Management running on AWS ECS tasks with ExpressJS and AWS Bedrock',
    link: 'https://infodeck.io/sage-ai',
    company: 'Infodeck',
    image: InfodeckImage,
  },
  {
    name: 'KegScan',
    description:
      "React Native app made for UnaBiz for scanning Konvoy's Beer Kegs with IoT using Bluetooth and QR Code reader",
    link: 'https://apps.apple.com/au/app/kegscan/id1486519700',
    company: 'UnaBiz',
    image: KonvoyImage,
  },
];

export default function Page() {
  return (
    <section>
      <p className="mb-8">
        In the past, I worked on these projects as part of my work as Principal
        Engineer at Infodeck and Software Engineering Lead at UnaBiz
      </p>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div className="flex items-center space-x-4">
            <Image
              src={project.image}
              alt={project.name}
              width={250}
              height={250}
              className="rounded-lg object-cover"
            />
            <div>
              <Link href={project.link} key={project.name} className="group">
                <h2 className="font-semibold text-lg group-hover:text-blue-600">
                  {project.name}
                </h2>
              </Link>
              <p className="text-md">{project.description}</p>
              <p className="text-sm text-gray-500 mt-1">{project.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
