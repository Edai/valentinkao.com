import TextComponent from 'app/components/text';
import Image from 'next/image';
import ProfileImage from '../me.jpg';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">👋</h1>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
        <div className="md:w-3/5">
          <TextComponent>
            I'm Valentin Kao, but feel free to call me Val! I am a Software
            Engineer, Solopreneur, and Freelance enthusiast, with a passion for
            exploring new technologies.
          </TextComponent>
          <br />
          <TextComponent>
            I am originally from Toulouse, France 🇫🇷 but since 2019, I am based
            in Taiwan 🇹🇼 !
          </TextComponent>
          <br />
          <TextComponent>
            When I am not coding, I love traveling around the world — I've
            checked off 15 countries so far! I also love bouldering, weight
            lifting at home, and I have recently learnt how to ride an electric
            unicycle!
          </TextComponent>
          <br />
          <a href="mailto:me@valentinkao.com">
            <TextComponent className={'font-bold'}>
              I currently offer freelance services as a Software Engineer and am
              always open to new opportunities.
            </TextComponent>
            <br />
            <TextComponent className={'font-bold'}>
              Feel free to reach out at me@valentinkao.com—I'd love to connect!
            </TextComponent>
          </a>
        </div>
        <div className="md:w-2/5 mb-4 md:mb-0 md:ml-8">
          <Image alt="Valentin Kao" src={ProfileImage} />
        </div>
      </div>
    </section>
  );
}
