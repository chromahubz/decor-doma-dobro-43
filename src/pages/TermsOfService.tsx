import Layout from "@/components/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Uslovi Korišćenja
            </h1>

            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Prihvatanje uslova</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pristupanjem i korišćenjem veb sajta Dekor Kuće, automatski prihvatate sve
                  uslove korišćenja navedene u ovom dokumentu. Ovi uslovi predstavljaju pravno
                  obavezujući ugovor između vas i naše kompanije.
                </p>
                <p className="text-gray-600 text-sm">
                  Zadržavamo pravo da menjamo ove uslove bez prethodnog obaveštenja.
                  Vaša odgovornost je da redovno proveravate izmene.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Opis usluga</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dekor Kuća je online platforma za prodaju dekorativnih predmeta. Naše usluge uključuju:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Online katalog proizvoda</li>
                  <li>Sistem za naručivanje</li>
                  <li>Dostavu proizvoda</li>
                  <li>Korisničku podršku</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne garantujemo dostupnost, tačnost ili kvalitet bilo kog proizvoda ili usluge.
                  Sve informacije su date "kakve jesu" bez ikakvih garancija.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Korisnički nalog</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Za korišćenje nekih funkcija sajta možda će biti potrebno da napravite korisnički nalog.
                  Obavezujete se da:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Pružite tačne i potpune informacije</li>
                  <li>Čuvate bezbednost svojih pristupnih podataka</li>
                  <li>Obavestite nas o neovlašćenom korišćenju</li>
                  <li>Prihvatite odgovornost za sve aktivnosti na svom nalogu</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Zadržavamo pravo da suspendujemo ili brišemo bilo koji nalog bez objašnjenja.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Plaćanja i cene</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sve cene su izražene u srpskim dinarima (RSD) i uključuju PDV. Prihvaćamo sledeće načine plaćanja:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Plaćanje pouzeće (gotovina)</li>
                  <li>Bankovni transfer</li>
                  <li>Kartica (gde je dostupno)</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Cene se mogu menjati bez obaveštenja. Ne odgovaramo za greške u cenama
                  ili tehničke probleme sa platnim sistemima.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Dostava</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dostavu vršimo putem kurirskih službi na teritoriji Srbije. Rokovi dostave su informativni
                  i mogu varirati zbog spoljnih faktora.
                </p>
                <p className="text-gray-600 text-sm">
                  Ne garantujemo tačne rokove dostave. Ne odgovaramo za kašnjenja, oštećenja
                  ili gubitak pošiljki tokom transporta.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Intelektualna svojina</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sav sadržaj na ovom sajtu (tekstovi, slike, logo, dizajn) je zaštićen autorskim pravima
                  i predstavlja našu intelektualnu svojinu ili svojinu naših partnera.
                </p>
                <p className="text-gray-600 text-sm">
                  Zabranjeno je korišćenje, kopiranje ili distribucija bilo kog sadržaja bez pisane dozvole.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Zabranjeno ponašanje</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zabranjeno je:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Korišćenje sajta u protivzakonite svrhe</li>
                  <li>Pokušaji hakovanja ili narušavanja sigurnosti</li>
                  <li>Deljenje lažnih ili štetnih informacija</li>
                  <li>Uznemiravanje drugih korisnika</li>
                  <li>Korišćenje automatizovanih sistema (botovi, crawleri)</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Kršenje ovih pravila može rezultovati trajnim banovanjem i pravnim posledicama.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Prekid usluga</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zadržavamo pravo da u bilo kom trenutku:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Privremeno ili trajno prekinemo rad sajta</li>
                  <li>Modificiramo ili ukinemo bilo koju funkciju</li>
                  <li>Ograničimo pristup određenim korisnicima</li>
                  <li>Promenimo uslove korišćenja</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne dugujemo objašnjenje ili kompenzaciju za bilo koji prekid usluga.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Primenjivo pravo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ovi uslovi se tumače u skladu sa zakonima Republike Srbije. Svi sporovi se rešavaju
                  pred nadležnim sudovima u Beogradu.
                </p>
                <p className="text-gray-600 text-sm">
                  Odričete se prava na grupne tužbe i insistirate na individualnom rešavanju sporova.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Ograničavanje odgovornosti</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Koristeći naše usluge, prihvatate da ne snosimo nikakvu odgovornost za bilo kakve direktne, indirektne, slučajne ili posledične štete,
                  ne garantujemo tačnost, pouzdanost ili dostupnost usluga, koristite usluge na sopstveni rizik i odgovornost,
                  ne odgovaramo za rad trećih lica, kurirskih službi ili banaka, ne pružamo nikakve garancije, eksplicitne ili implicitne
                  i snosićete sve troškove i posledice svog korišćenja usluga.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Finalna klauzula</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Korišćenjem ovog sajta potvrđujete da ste pročitali, razumeli i prihvatili
                  sve navedene uslove. Ovi uslovi predstavljaju potpun i jedini ugovor između
                  vas i naše kompanije. Ako bilo koji deo ovih uslova bude proglašen nevažećim, ostali delovi
                  zadržavaju punu pravnu snagu.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Kontakt informacije</h2>
                <p className="text-gray-700 leading-relaxed">
                  Za pitanja o ovim uslovima korišćenja možete nas kontaktirati putem
                  kontakt informacija dostupnih na našem sajtu.
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

export default TermsOfService;