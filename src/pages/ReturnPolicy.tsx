import Layout from "@/components/Layout";

const ReturnPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Povrat Robe
            </h1>

            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Opšta politika</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dekor Kuća primenjuje politiku koja ne dozvoljava povrat robe za sve proizvode prodane kroz
                  naš online katalog. Ova politika je konačna i važi bez izuzetaka.
                </p>
                <p className="text-gray-600 text-sm">
                  Kupovinom bilo kog proizvoda sa našeg sajta, automatski prihvatate
                  da ne možete vratiti, zameniti ili dobiti refundaciju.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Razlozi za neprimanje povrata</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Našu politiku neprimanja povrata opravdavamo sledećim razlozima:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Priroda dekorativnih predmeta (lako oštećivanje)</li>
                  <li>Troškovi ponovnog pakovanja i kontrole kvaliteta</li>
                  <li>Higijenski razlozi</li>
                  <li>Operativna efikasnost</li>
                  <li>Održavanje niskih cena</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne smatramo da dugujemo objašnjenje za svaku individualnu odluku o neprimanju povrata.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Što se smatra finalnom prodajom</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sve sledeće situacije se smatraju finalnim prodajama bez mogućnosti povrata:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Promene mišljenja o proizvodu</li>
                  <li>Neočekivane boje ili teksture</li>
                  <li>Veličina različita od očekivane</li>
                  <li>Proizvod ne odgovara vašem dekoru</li>
                  <li>Finansijske teškoće</li>
                  <li>Greška u naručivanju</li>
                  <li>Dupliciranje porudžbine</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Nijedan od navedenih razloga neće biti prihvaćen kao osnov za povrat.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Oštećena roba</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Čak i u slučaju oštećene robe tokom transporta, naša politika je restriktivna:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Oštećenja morate prijaviti u roku od 24 sata od dostave</li>
                  <li>Potrebne su jasne fotografije oštećenja</li>
                  <li>Zadržavamo pravo da odbijemo reklamaciju</li>
                  <li>Eventualnu zamenu vršimo SAMO ako imamo identičan proizvod</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne garantujemo zamenu ni u slučaju oštećenja. Svaki zahtev se razmatara
                  individualno i može biti odbačen bez objašnjenja.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Postupak reklamacije</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ako smatrate da imate valjan razlog za reklamaciju (što je krajnje retko):
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                  <li>Kontaktirajte nas ODMAH nakon dostave</li>
                  <li>Pošaljite detaljne fotografije problema</li>
                  <li>Opišite problem jasno i koncizno</li>
                  <li>Sačekajte našu odluku (konačnu i nepromenjenu)</li>
                </ol>
                <p className="text-gray-600 text-sm">
                  Naša odluka je konačna. Ne prihvatamo žalbe, dodatne zahteve ili ponavljanje
                  istih reklamacija.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Refundacija</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refundacija novca se ne vrši ni pod kojim okolnostima:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Ne vraćamo novac za kupljene proizvode</li>
                  <li>Ne izdajemo voucheri ili kupone</li>
                  <li>Ne omogućavamo kreditiranje za buduće kupovine</li>
                  <li>Ne kompenzujemo troškove dostave</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Jednom obavljena transakcija je nepovratna bez obzira na okolnosti.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Preporuke kupcima</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Budući da ne prihvatamo povrate, preporučujemo da:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Pažljivo proučite sve fotografije proizvoda</li>
                  <li>Pročitajte dimenzije i opise</li>
                  <li>Razmislite da li vam proizvod odgovara</li>
                  <li>Proverite svoju adresu za dostavu</li>
                  <li>Budite sigurni u svoju odluku</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Vaša je odgovornost da donesete informisanu odluku o kupovini.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Pravne posledice</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pokušaji nepriznanih povrata ili dispute preko banaka će rezultovati:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Trajnim banovanjem sa naše platforme</li>
                  <li>Pokretanjem pravnih postupaka</li>
                  <li>Naplaćivanjem pravnih troškova</li>
                  <li>Prijavljivanjem nadležnim organima</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Zaštićeni smo protiv neovlašćenih chargeback zahteva i žusno ćemo se braniti.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Odricanje odgovornosti</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Koristeći naše usluge, izričito prihvatate da ne snosimo odgovornost za vašu nezadovoljnost proizvodom,
                  ne garantujemo da će proizvod odgovarati vašim očekivanjima, snosićete sve posledice svoje odluke o kupovini,
                  nemate pravo na bilo kakvu kompenzaciju ili nadoknadu, ne možete tražiti povrat novca kroz banku ili kartične kompanije
                  i prihvatate našu politiku kao konačnu i obavezujuću.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Konačna napomena</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kupovinom sa našeg sajta potvrđujete da ste pročitali i razumeli
                  ovu politiku povrata i da je u potpunosti prihvatate.
                </p>
                <p className="text-gray-600 text-sm">
                  Ako se ne slažete sa bilo kojim delom ove politike, nemojte kupovati
                  naše proizvode. Sve prodaje su finalne. Nema povrata. Nema izuzetaka.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Kontakt</h2>
                <p className="text-gray-700 leading-relaxed">
                  Za dodatna pitanja o ovoj politici možete nas kontaktirati, ali molimo
                  vas da ne šaljete zahteve za povrat jer će biti automatski odbačeni.
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  Datum poslednje izmene: Septembar 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;