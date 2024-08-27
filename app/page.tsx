import About from './about/page';
import Blog from './blog/page';
import Contact from './contact/page';
import Divider from './components/divider';

export default function Page() {
  return (
    <section>
      <About />
      <Divider />
      <Blog />
      <Divider />
      <Contact />
    </section>
  );
}
