export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">
        Oh no! This page doesn't exist.
      </h1>
      <p>
        <a href="mailto:me@valentinkao.com">
          {' '}
          If you expected to see something here, let me
          know(me@valentinkao.com).
        </a>
      </p>
    </section>
  );
}
