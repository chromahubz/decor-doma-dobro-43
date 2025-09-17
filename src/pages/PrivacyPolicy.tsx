import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Politika Privatnosti
            </h1>

            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Opšte odredbe</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ova politika privatnosti se odnosi na veb sajt Dekor Kuće i objašnjava kako prikupljamo,
                  koristimo, čuvamo i štitimo vaše lične podatke. Korišćenjem našeg sajta, saglašavate se
                  sa uslovima navedenim u ovoj politici.
                </p>
                <p className="text-gray-600 text-sm">
                  Zadržavamo pravo da u potpunosti ograničimo odgovornost
                  za bilo kakve štete ili probleme koji mogu nastati korišćenjem naših usluga.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Prikupljanje podataka</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prikupljamo sledeće vrste podataka:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Lični podaci koje dobrovoljno unosite (ime, email, adresa)</li>
                  <li>Podaci o korišćenju sajta kroz kolačiće i analitiku</li>
                  <li>Informacije o uređaju i browseru</li>
                  <li>IP adresa i lokacija</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne snosimo odgovornost za način korišćenja ili zloupotrebe vaših podataka od strane
                  trećih lica.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Korišćenje podataka</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vaše podatke koristimo za:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Obradu i isporuku porudžbina</li>
                  <li>Komunikaciju sa kupcima</li>
                  <li>Poboljšanje korisničkog iskustva</li>
                  <li>Marketing aktivnosti (uz vašu saglasnost)</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne garantujemo potpunu sigurnost podataka i
                  ne snosimo odgovornost za eventualnu krađu ili zloupotrebe vaših informacija.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Deljenje podataka</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vaše podatke možemo podeliti sa:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Kurirskim službama za dostavu</li>
                  <li>Pružaocima platnih usluga</li>
                  <li>Marketinškim partnerima</li>
                  <li>Državnim organima kada je to zakonski obavezno</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ne kontrolišemo kako treća lica koriste vaše podatke nakon što ih podelimo sa njima.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Čuvanje podataka</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podatke čuvamo onoliko dugo koliko je potrebno za ispunjavanje svrha za koje su prikupljeni
                  ili koliko zakon nalaže. Nakon isteka roka, podaci se brišu ili anonimizuju.
                </p>
                <p className="text-gray-600 text-sm">
                  Ne garantujemo da će svi podaci biti obrisani u slučaju tehničkih problema
                  ili kvarova naših sistema.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Vaša prava</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Imate pravo da:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Zatražite pristup vašim podacima</li>
                  <li>Tražite ispravku netačnih podataka</li>
                  <li>Zatražite brisanje podataka</li>
                  <li>Povučete saglasnost za obradu</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Zadržavamo pravo da odbijemo zahteve koji su neosnovani ili tehnički neizvodljivi.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Sigurnost</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Primenjujemo razumne tehničke i organizacione mere za zaštitu vaših podataka,
                  ali ne možemo garantovati apsolutnu sigurnost.
                </p>
                <p className="text-gray-600 text-sm">
                  Ne snosimo odgovornost za štete nastale usled
                  neovlašćenog pristupa, hakovanja ili drugih bezbednosnih incidenata.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Izmene politike</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zadržavamo pravo da menjamo ovu politiku privatnosti u bilo kom trenutku bez
                  prethodnog obaveštenja. Izmene stupaju na snagu objavljivanjem na sajtu.
                </p>
                <p className="text-gray-600 text-sm">
                  Vaša odgovornost je da redovno proveravate ovu stranicu za izmene.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Ograničavanje odgovornosti</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Korišćenjem našeg sajta i usluga, prihvatate da ne snosimo nikakvu odgovornost za bilo kakve štete,
                  ne garantujemo tačnost, potpunost ili ažurnost informacija, ne odgovaramo za rad trećih lica i spoljnih servisa,
                  koristite naše usluge na sopstveni rizik i sva prava na ograničavanje i ukidanje usluga zadržavamo za sebe.
                </p>
              </div>

              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Kontakt</h2>
                <p className="text-gray-700 leading-relaxed">
                  Za pitanja o ovoj politici privatnosti možete nas kontaktirati putem email adrese
                  ili telefona navedenih na našem sajtu.
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

export default PrivacyPolicy;