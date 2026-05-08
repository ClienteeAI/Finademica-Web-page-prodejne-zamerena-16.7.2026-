import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const RiskWarning = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (lang === 'cs') {
    return (
      <div className="text-[10px] text-white/20 font-sans font-light leading-relaxed text-center md:text-left max-w-7xl mx-auto">
        <span className="font-bold text-white/30">VAROVÁNÍ PŘED RIZIKEM:</span> Obchodování s finančními nástroji, jako je Forex, kryptoměny, akcie a komodity, zahrnuje vysokou míru rizika a nemusí být vhodné pro všechny investory. Můžete přijít o část nebo celý svůj investovaný kapitál. Minulá výkonnost nezaručuje budoucí výsledky. Tento obsah slouží pouze pro vzdělávací účely a nepředstavuje investiční poradenství.
      </div>
    );
  } else if (lang === 'pl') {
    return (
      <div className="text-[10px] text-white/20 font-sans font-light leading-relaxed text-center md:text-left max-w-7xl mx-auto">
        <span className="font-bold text-white/30">OSTRZEŻENIE O RYZYKU:</span> Handel instrumentami finansowymi, takimi jak Forex, kryptowaluty, akcje i towary, wiąże się z wysokim poziomem ryzyka i może nie być odpowiedni dla wszystkich inwestorów. Możesz stracić część lub całość zainwestowanego kapitału. Wyniki osiągnięte w przeszłości nie są gwarancją przyszłych wyników. Niniejsze treści służą wyłącznie celom edukacyjnym i nie stanowią porady inwestycyjnej.
      </div>
    );
  }

  return (
    <div className="text-[10px] text-white/20 font-sans font-light leading-relaxed text-center md:text-left max-w-7xl mx-auto">
      <span className="font-bold text-white/30">RISK WARNING:</span> Trading financial instruments such as Forex, cryptocurrencies, stocks, and commodities involves a high level of risk and may not be suitable for all investors. You can lose some or all of your invested capital. Past performance is not indicative of future results. This content is for educational purposes only and does not constitute investment advice.
    </div>
  );
};

export const LegalContent = ({ type }: { type: 'terms' | 'privacy' | 'cookies' | 'disclaimer' }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (type === 'terms') {
    if (lang === 'cs') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. Obecné informace</h3>
          <p>Tyto Všeobecné obchodní podmínky upravují používání webových stránek a služeb poskytovaných společností Ben Consult s.r.o., se sídlem Příčná 1892/4, Nové Město, 110 00 Praha 1, IČO: 14292475.</p>
          <p>Přístupem na tyto webové stránky nebo používáním našich služeb souhlasíte s těmito Podmínkami.</p>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Povaha služeb</h3>
          <p>Společnost poskytuje:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vzdělávací obsah týkající se tradingu a investování</li>
            <li>Online kurzy, videa a nástroje</li>
            <li>Obecné finanční informace</li>
          </ul>
          
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
            <p className="text-accent font-bold mb-2">⚠️ Důležité:</p>
            <p className="text-white/80">Veškerý obsah slouží výhradně pro vzdělávací účely a nepředstavuje finanční poradenství.</p>
          </div>
          
          <p>My NEPOSKYTUJEME:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Investiční doporučení</li>
            <li>Správu fondů</li>
            <li>Provádění obchodů jménem uživatelů</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Prohlášení o rizicích</h3>
          <p>Obchodování s finančními nástroji zahrnuje vysoké riziko.</p>
          <p>Berete na vědomí, že:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Můžete přijít o veškerý investovaný kapitál</li>
            <li>Minulá výkonnost nezaručuje budoucí výsledky</li>
            <li>Jste plně zodpovědní za svá rozhodnutí</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Povinnosti uživatele</h3>
          <p>Souhlasíte, že:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Budete používat webové stránky v souladu se zákonem</li>
            <li>Nebudete zneužívat nebo se pokoušet hacknout systém</li>
            <li>Nebudete dále šířit placený obsah bez povolení</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Duševní vlastnictví</h3>
          <p>Veškerý obsah je vlastnictvím společnosti Ben Consult s.r.o. Nesmíte jej kopírovat, distribuovat ani prodávat bez písemného souhlasu.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Platby a přístup</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Některé služby mohou být zpoplatněny</li>
            <li>Přístup může být omezen na základě předplatného</li>
            <li>Vyhrazujeme si právo na změnu cen</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Omezení odpovědnosti</h3>
          <p>NENESEME odpovědnost za finanční ztráty, obchodní výsledky ani rozhodnutí učiněná na základě našeho obsahu. Používání platformy je na vaše vlastní riziko.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Ukončení spolupráce</h3>
          <p>Vyhrazujeme si právo pozastavit nebo ukončit přístup uživatelům porušujícím tyto Podmínky.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    } else if (lang === 'pl') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. Informacje ogólne</h3>
          <p>Niniejszy Regulamin określa zasady korzystania ze strony internetowej i usług świadczonych przez Ben Consult s.r.o., Příčná 1892/4, 110 00 Praga 1, IČO: 14292475.</p>
          <p>Uzyskując dostęp do strony internetowej lub korzystając z naszych usług, wyrażasz zgodę na niniejszy Regulamin.</p>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Charakter usług</h3>
          <p>Firma zapewnia:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Treści edukacyjne związane z handlem i inwestowaniem</li>
            <li>Kursy online, wideo i narzędzia</li>
            <li>Ogólne informacje finansowe</li>
          </ul>
          
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
            <p className="text-accent font-bold mb-2">⚠️ Ważne:</p>
            <p className="text-white/80">Wszystkie treści służą wyłącznie celom edukacyjnym i nie stanowią porady finansowej.</p>
          </div>
          
          <p>NIE ZAPEWNIAMY:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rekomendacji inwestycyjnych</li>
            <li>Zarządzania funduszami</li>
            <li>Wykonywania transakcji w imieniu użytkowników</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Ostrzeżenie o ryzyku</h3>
          <p>Handel instrumentami finansowymi wiąże się z wysokim ryzykiem.</p>
          <p>Przyjmujesz do wiadomości, że:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Możesz stracić cały zainwestowany kapitał</li>
            <li>Wyniki osiągnięte w przeszłości nie gwarantują przyszłych wyników</li>
            <li>Ponosisz pełną odpowiedzialność za swoje decyzje</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    }
    return (
      <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
        <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. General Information</h3>
        <p>These Terms and Conditions (“Terms”) govern the use of the website and services provided by Ben Consult s.r.o., with its registered office at Příčná 1892/4, Nové Město, 110 00 Praha 1, Czech Republic, Company ID: 14292475.</p>
        <p>By accessing this website or using our services, you agree to these Terms.</p>
        
        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Nature of Services</h3>
        <p>The Company provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Educational content related to trading and investing</li>
          <li>Online courses, videos, and tools</li>
          <li>General financial information</li>
        </ul>
        
        <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
          <p className="text-accent font-bold mb-2">⚠️ Important:</p>
          <p className="text-white/80">All content is for educational purposes only and does not constitute financial advice.</p>
        </div>
        
        <p>We do NOT:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide investment recommendations</li>
          <li>Manage funds</li>
          <li>Execute trades on behalf of users</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Risk Disclaimer</h3>
        <p>Trading financial instruments involves high risk.</p>
        <p>You acknowledge that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You may lose all invested capital</li>
          <li>Past performance does not guarantee future results</li>
          <li>You are fully responsible for your decisions</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. User Responsibilities</h3>
        <p>You agree:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To use the website lawfully</li>
          <li>Not to misuse or attempt to hack the system</li>
          <li>Not to redistribute paid content without permission</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Intellectual Property</h3>
        <p>All content is owned by Ben Consult s.r.o. You may not copy, distribute, or sell without written consent.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Payments & Access</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Some services may be paid</li>
          <li>Access may be limited based on subscription or usage</li>
          <li>The Company reserves the right to modify pricing</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Limitation of Liability</h3>
        <p>We are NOT liable for financial losses, trading results, or decisions made based on our content. Use of the platform is at your own risk.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Termination</h3>
        <p>We reserve the right to suspend or terminate access and remove users violating these Terms.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Contact</h3>
        <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
      </div>
    );
  }

  if (type === 'privacy') {
    if (lang === 'cs') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <p>Příčná 1892/4, Praha 1<br/>IČO: 14292475</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Jaká data shromažďujeme</h3>
          <p>Můžeme shromažďovat:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Jméno a příjmení</li>
            <li>Emailová adresa</li>
            <li>Telefonní číslo</li>
            <li>IP adresa</li>
            <li>Údaje o používání webu</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Účel zpracování</h3>
          <p>Data zpracováváme za účelem:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Poskytování služeb</li>
            <li>Zasílání emailů / komunikace</li>
            <li>Zlepšování výkonu webu</li>
            <li>Marketing (se souhlasem)</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Právní základ</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Souhlas (marketing)</li>
            <li>Plnění smlouvy (služby)</li>
            <li>Oprávněný zájem (analytika)</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Uchovávání dat</h3>
          <p>Osobní údaje uchováváme pouze po nezbytně nutnou dobu.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Třetí strany</h3>
          <p>Údaje můžeme sdílet s:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>CRM systémy (Clientee CRM)</li>
            <li>Poskytovatelé emailových služeb</li>
            <li>Analytické nástroje</li>
          </ul>
          <p>Všichni splňují požadavky GDPR.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Vaše práva</h3>
          <p>Podle GDPR máte právo:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Na přístup k vašim údajům</li>
            <li>Požádat o opravu</li>
            <li>Požádat o vymazání</li>
            <li>Odvolat souhlas</li>
            <li>Podat stížnost u úřadu</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Bezpečnost dat</h3>
          <p>K ochraně vašich údajů používáme technická a organizační opatření.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    } else if (lang === 'pl') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <p>Příčná 1892/4, Praha 1<br/>IČO: 14292475</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. Jakie dane zbieramy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Adres IP</li>
          </ul>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Cel przetwarzania</h3>
          <p>Przetwarzamy dane w celu świadczenia usług, komunikacji i analityki.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    }
    return (
      <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
        <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
        <p>Příčná 1892/4, Praha 1<br/>IČO: 14292475</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. What Data We Collect</h3>
        <p>We may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name and surname</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>IP address</li>
          <li>Website usage data</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Purpose of Processing</h3>
        <p>We process data to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide services</li>
          <li>Send emails / communication</li>
          <li>Improve website performance</li>
          <li>Marketing (with consent)</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Legal Basis</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Consent (marketing)</li>
          <li>Contract performance (services)</li>
          <li>Legitimate interest (analytics)</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Data Retention</h3>
        <p>We store personal data only as long as necessary.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Third Parties</h3>
        <p>We may share data with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>CRM systems (Clientee CRM)</li>
          <li>Email providers</li>
          <li>Analytics tools</li>
        </ul>
        <p>All comply with GDPR.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Your Rights</h3>
        <p>Under GDPR you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access your data</li>
          <li>Request correction</li>
          <li>Request deletion</li>
          <li>Withdraw consent</li>
          <li>File complaint with authority</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Data Security</h3>
        <p>We use technical and organizational measures to protect your data.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Contact</h3>
        <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
      </div>
    );
  }

  if (type === 'cookies') {
    const cookieAnim = (
      <motion.div 
        initial={{ rotate: -180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-8 mx-auto shadow-[0_0_30px_rgba(99,102,241,0.2)]"
      >
        <span className="text-3xl filter drop-shadow-lg">🍪</span>
      </motion.div>
    );

    if (lang === 'cs') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          {cookieAnim}
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. Co jsou Cookies</h3>
          <p>Cookies jsou malé textové soubory uložené ve vašem prohlížeči.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Typy cookies, které používáme</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-bold text-white">Nezbytné cookies</span> – nutné pro funkčnost webu</li>
            <li><span className="font-bold text-white">Analytické cookies</span> – pro porozumění chování uživatelů</li>
            <li><span className="font-bold text-white">Marketingové cookies</span> – pro reklamy a remarketing</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Souhlas</h3>
          <p>Při návštěvě webu můžete:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Přijmout všechny cookies</li>
            <li>Odmítnout nepovinné cookies</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Cookies třetích stran</h3>
          <p>Můžeme používat:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Analytics</li>
            <li>Facebook Pixel</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Správa cookies</h3>
          <p>Cookies můžete zakázat v nastavení vašeho prohlížeče.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    } else if (lang === 'pl') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          {cookieAnim}
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. Co to są pliki cookie</h3>
          <p>Pliki cookie to małe pliki tekstowe przechowywane w Twojej przeglądarce.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    }
    return (
      <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
        {cookieAnim}
        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. What Are Cookies</h3>
        <p>Cookies are small text files stored in your browser.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Types of Cookies We Use</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-bold text-white">Necessary cookies</span> – required for website functionality</li>
          <li><span className="font-bold text-white">Analytics cookies</span> – to understand user behavior</li>
          <li><span className="font-bold text-white">Marketing cookies</span> – for ads and remarketing</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Consent</h3>
        <p>When visiting the website, you can:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Accept all cookies</li>
          <li>Reject non-essential cookies</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Third-Party Cookies</h3>
        <p>We may use:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics</li>
          <li>Facebook Pixel</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Managing Cookies</h3>
        <p>You can disable cookies in your browser settings.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Contact</h3>
        <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
      </div>
    );
  }

  if (type === 'disclaimer') {
    if (lang === 'cs') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p>Informace poskytované společností Ben Consult s.r.o., se sídlem Příčná 1892/4, Nové Město, 110 00 Praha 1, IČO: 14292475 (dále jen "Společnost"), slouží výhradně pro vzdělávací a informační účely.</p>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Žádné poradenské služby</h3>
          <p>Společnost neposkytuje:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>investiční poradenství</li>
            <li>finanční poradenské služby</li>
            <li>správu portfolia</li>
            <li>makléřské služby</li>
          </ul>

          <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
            <p className="text-white/80">Nic na těchto webových stránkách, v e-mailech, AI nástrojích, videích nebo komunikaci by nemělo být považováno za doporučení k nákupu nebo prodeji jakéhokoli finančního nástroje, personalizovanou investiční strategii nebo finanční, právní či daňové poradenství.</p>
          </div>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Žádná záruka výsledků</h3>
          <p>Společnost neposkytuje žádné záruky ohledně ziskovosti, obchodní výkonnosti nebo finančních výsledků. Jakékoli prezentované příklady, případové studie nebo výsledky jsou pouze ilustrativní, nejsou typické a nejsou zaručeny.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Odpovědnost uživatele</h3>
          <p>Berete na vědomí, že:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Jste plně zodpovědní za svá obchodní rozhodnutí</li>
            <li>Chápete rizika spojená s finančními trhy</li>
            <li>Jednáte na vlastní uvážení</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs text-red-400">Varování před vysokým rizikem</h3>
          <p>Obchodování zahrnuje vysokou míru rizika, zejména při použití pákového efektu. Můžete přijít o celou svou investici nebo zaznamenat rychlé finanční ztráty. Obchodujte pouze s penězi, které si můžete dovolit ztratit.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Služby třetích stran</h3>
          <p>Společnost může odkazovat na platformy třetích stran (např. brokery, nástroje, software) nebo je integrovat. Tyto služby nekontrolujeme a neneseme odpovědnost za jejich výkonnost nebo výsledky.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Vzdělávací povaha nástrojů AI</h3>
          <p>Jakékoli poskytnuté AI nástroje, chatboti nebo analýzy jsou založeny na algoritmech a dostupných datech, mohou být nepřesné nebo neúplné a nemělo by se na ně spoléhat při finančních rozhodnutích.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Regulační status</h3>
          <p>Společnost není licencovanou finanční institucí a není regulována jako investiční poradce, makléř nebo poskytovatel finančních služeb.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Jurisdikce</h3>
          <p>Uživatelé jsou zodpovědní za to, že přístup na tyto webové stránky a používání služeb je v souladu s jejich místními zákony a předpisy.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    } else if (lang === 'pl') {
      return (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p>Informacje dostarczane przez Ben Consult s.r.o. służą wyłącznie celom edukacyjnym i informacyjnym.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs text-red-400">Ostrzeżenie o wysokim ryzyku</h3>
          <p>Handel wiąże się z wysokim poziomem ryzyka. Możesz stracić całą inwestycję. Handluj tylko pieniędzmi, na których stratę możesz sobie pozwolić.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Kontakt</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      );
    }
    return (
      <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
        <p>The information provided by Ben Consult s.r.o., with its registered office at Příčná 1892/4, Nové Město, 110 00 Praha 1, Company ID: 14292475 (hereinafter “Company”), is for educational and informational purposes only.</p>
        
        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">No Advisory Services</h3>
        <p>The Company does not provide:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>investment advice</li>
          <li>financial advisory services</li>
          <li>portfolio management</li>
          <li>brokerage services</li>
        </ul>

        <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
          <p className="text-white/80">Nothing on this website, in emails, AI tools, videos, or communication should be considered as a recommendation to buy or sell any financial instrument, a personalized investment strategy, or financial, legal, or tax advice.</p>
        </div>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">No Guarantee of Results</h3>
        <p>The Company makes no guarantees regarding profitability, trading performance, or financial outcomes. Any examples, case studies, or results presented are illustrative only, not typical, and not guaranteed.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">User Responsibility</h3>
        <p>You acknowledge that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You are fully responsible for your trading decisions</li>
          <li>You understand the risks associated with financial markets</li>
          <li>You act at your own discretion</li>
        </ul>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs text-red-400">High-Risk Warning</h3>
        <p>Trading involves a high level of risk, especially when using leverage. You may lose your entire investment or experience rapid financial losses. Only trade with money you can afford to lose.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Third-Party Services</h3>
        <p>The Company may reference or integrate third-party platforms (e.g. brokers, tools, software). We do not control these services and are not responsible for their performance or outcomes.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Educational Nature of AI Tools</h3>
        <p>Any AI tools, chatbots, or analysis provided are based on algorithms and available data, may be inaccurate or incomplete, and should not be relied upon for financial decisions.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Regulatory Status</h3>
        <p>The Company is not a licensed financial institution and is not regulated as an investment advisor, a broker, or a financial services provider.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Jurisdiction</h3>
        <p>Users are responsible for ensuring that accessing this website and using the services is compliant with their local laws and regulations.</p>

        <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Contact</h3>
        <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
      </div>
    );
  }

  return null;
};
