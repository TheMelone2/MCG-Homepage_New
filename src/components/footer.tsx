export default function Footer() {
  return (
    <footer className="text-white">
      <section className="flex gap-36 bg-header py-16">
        <div className="ml-auto">
          <h2 className="mt-0">Adresse</h2>
          <p className="mb-0">
            Marie-Curie-Gymnasium
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.openstreetmap.org/directions?from=&to=52.54148%2C13.04493#map=15/52.5421/13.0568"
            >
              Marie-Curie-Straße 1<br />
              14624 Dallgow-Döberitz
            </a>
          </p>
        </div>
        <div className="mr-auto">
          <h2 className="mt-0">Kontakt</h2>
          <p className="mb-0">
            E-Mail: <a href="mailto:mcg@mcg-dallgow.de">mcg@mcg-dallgow.de</a>
            <br />
            Telefon: <a href="tel:03322852520">+49 (0)3322 85 25 20</a>
            <br />
            Fax: <a href="tel:033228525227">+49 (0)3322 85 25 227</a>
            <br />
          </p>
        </div>
      </section>
      <section className="bg-nav py-8">
        <p className="mb-0 text-center">© 2023 Marie-Curie-Gymnasium</p>
      </section>
    </footer>
  );
}