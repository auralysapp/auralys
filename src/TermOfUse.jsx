
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const sections = [
  {
    title: '1. Purpose and acceptance',
    content: [
      'These Terms of Use (“Terms”) govern access to and use of the Auralys website, PWA and services (“Auralys” or the “Application”). By creating an account or using Auralys, you acknowledge that you have read and accepted these Terms.',
      'If you do not accept these Terms, you must not use the Application.',
    ],
  },
  {
    title: '2. Publisher and contact',
    content: [
      'Auralys is published and operated by Solipsism.',
      <>
        For any question, complaint or request concerning the Application, you
        can email <a href="mailto:contact@auralys.app">contact@auralys.app</a>.
      </>,
    ],
  },
  {
    title: '3. Account and minimum age',
    content: [
      'To create and use an account, you must:',
    ],
    list: [
      'be at least 13 years old, or the higher minimum age required in your country;',
      'if you are a minor, have permission from your legal guardian where required by law;',
      'provide accurate information and keep your profile information up to date;',
      'protect your credentials and notify us promptly of any unauthorized access.',
    ],
    after: [
      'In France, a user under 15 must obtain permission from their legal guardian where required for processing their data. The legal guardian remains responsible for the minor’s use of the Application.',
      'You may not transfer, sell or share your account, or use another person’s account.',
    ],
  },
  {
    title: '4. How the service works',
    content: [
      'Auralys lets you discover and listen to music previews, assign ratings, publish reviews, create rankings, follow other members, complete quests, earn badges and play multiplayer music games.',
      'Cover art, metadata, previews and other music content may come from third-party services, including Deezer. Auralys does not sell these works or transfer any rights to them. Their availability, accuracy and content also depend on those services and rights holders.',
      'Some tracks may contain lyrics or themes unsuitable for younger audiences. Minor users and their legal guardians should exercise discretion.',
    ],
  },
  {
    title: '5. Content published by users',
    content: [
      'You retain ownership of reviews, comments, images, profile photos and other content you publish. You warrant that you have the necessary rights and permissions and that your content does not infringe any third-party rights.',
      'By publishing content, you grant Solipsism a non-exclusive, worldwide, royalty-free license limited to what is necessary to host, store, reproduce, technically adapt, display and distribute that content within Auralys, and to maintain, secure and improve the service. This license ends when the content is deleted, subject to technical backup periods and copies already shared by other users.',
      'You are responsible for the content you publish and the consequences of sharing it.',
    ],
  },
  {
    title: '6. Community rules',
    content: [
      'In particular, you must not:',
    ],
    list: [
      'publish illegal, hateful, threatening, defamatory, discriminatory, misleading or degrading content;',
      'harass a user, impersonate someone or disclose a third party’s personal data without permission;',
      'infringe copyright, image rights, trademarks or any other intellectual property right;',
      'publish viruses, malware, unauthorized advertising, contests, gambling or commercial solicitations;',
      'manipulate ratings, rankings, badges, follows, games or statistics using bots, fake accounts or fraudulent methods;',
      'scrape or extract data at scale, bypass technical protections, disrupt the service, decompile the Application or use its data to train an artificial intelligence system without permission.',
    ],
    after: [
      'Reviews and comments must reflect a genuine personal opinion and remain constructive and respectful of users, artists and creators.',
    ],
  },
  {
    title: '7. Reporting and moderation',
    content: [
      'You can report content or behavior using the tools available in the Application or through our contact address. Depending on severity and context, we may request a correction, limit visibility, remove content, restrict a feature, suspend an account or terminate it.',
      'Where possible, the affected user will be informed of the action and its reason, unless doing so would compromise an investigation, service security, third-party rights or a legal obligation.',
    ],
  },
  {
    title: '8. Auralys intellectual property',
    content: [
      'The Application, its logo, interface, design, software, text and features are protected by intellectual property laws and belong to Solipsism or its partners. You are granted no rights beyond personal use of the Application in accordance with these Terms.',
    ],
  },
  {
    title: '9. Service availability and changes',
    content: [
      'Auralys is provided as a beta service and may change. We may fix, add, remove or temporarily suspend a feature for technical, security, legal or third-party service reasons. We work to maintain a reliable service but cannot guarantee uninterrupted or error-free availability.',
    ],
  },
  {
    title: '10. Liability',
    content: [
      'To the extent permitted by law, Solipsism is not responsible for content published by users, opinions expressed, or the unavailability or inaccuracy of content supplied by a third-party service. Nothing in these Terms limits mandatory consumer rights or any liability that cannot lawfully be excluded.',
    ],
  },
  {
    title: '11. Account suspension and deletion',
    content: [
      'You can stop using Auralys and directly delete your account and the data associated with it from Settings > Sensitive area. You can also email us at contact@auralys.app if you experience any difficulty.',
      'We may suspend or close an account in the event of a serious or repeated violation of these Terms, fraud, a security risk or a legal obligation.',
    ],
  },
  {
    title: '12. Changes to the Terms',
    content: [
      'We may change these Terms to reflect changes to the Application, our practices or applicable law. If a change is significant, we will notify you in the Application, by email or by notification before it takes effect where required.',
    ],
  },
  {
    title: '13. Governing law and complaints',
    content: [
      'These Terms are governed by French law without depriving consumers of the mandatory protections of their country of residence. If you encounter a problem, contact us first so we can seek an amicable solution. You retain the right to refer the matter to the competent authorities or courts.',
      'If any provision is declared invalid, the remaining provisions continue to apply.',
    ],
  },
];

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A1A3F4] to-[#6738AA] text-white">
      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
        <header className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/70 mb-4">
            Legal Information
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Terms of Use
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
            The rules governing access to Auralys, the publication of reviews
            and interactions between community members.
          </p>

          <p className="mt-6 text-sm text-white/60">
            Last updated: July 15, 2026
          </p>
        </header>

        <div className="space-y-5 sm:space-y-6">
          {sections.map((section, index) => (
            <section
              key={index}
              className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-8 shadow-lg"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
                {section.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed">
                {section.content?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {section.list && (
                  <ul className="list-disc pl-5 space-y-2 marker:text-white/60">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.after?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            Questions?
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Email us at{' '}
            <a
              href="mailto:contact@auralys.app"
              className="font-semibold text-white underline underline-offset-4 hover:text-white/70 transition-colors"
            >
              contact@auralys.app
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
