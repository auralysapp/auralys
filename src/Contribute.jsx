
import Navbar from './Navbar';
import Footer from './Footer';
import {
  ArrowUpRight,
  Lightbulb,
  MessageCircle,
  Bug,
  Heart,
  Music2,
  Mic2,
  Disc3,
  Users,
  Mail
} from 'lucide-react';

const contributions = [
  {
    icon: Lightbulb,
    title: 'Share an idea',
    description:
      'Have an idea that could make Auralys better? We are always interested in new features, suggestions and creative ideas.'
  },
  {
    icon: Bug,
    title: 'Report an issue',
    description:
      'Found a bug or something that does not work as expected? Help us improve the experience by letting us know.'
  },
  {
    icon: MessageCircle,
    title: 'Give feedback',
    description:
      'Tell us what you think about Auralys. Your feedback helps us understand what works and what could be improved.'
  },
  {
    icon: Heart,
    title: 'Support the project',
    description:
      'Every contribution matters. Help us spread the word and introduce Auralys to more music lovers.'
  }
];

export default function Contribute() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#999cf0] via-[#7951c1] to-[#54258f] text-white">

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <Navbar />

      <main className="relative z-10">

        {/* HERO */}
        <section className="px-4 pb-24 pt-40 text-center sm:pt-48">
          <div className="mx-auto max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/80">
              <Heart size={15} />
              Built together
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Be part of
              <br />
              <span className="text-white/65">
                Auralys.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              Auralys is a project built around music and the people
              who love it. Whether you have an idea, feedback or
              simply want to get involved, we would love to hear from you.
            </p>

            <a
              href="mailto:contact@auralys.app"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-purple-700 transition hover:-translate-y-1"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>

          </div>
        </section>

        {/* COMMUNITY CONTRIBUTIONS */}
        <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6">

          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/60">
              Make a difference
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Every contribution counts.
            </h2>

            <p className="mt-5 leading-relaxed text-white/70">
              There are many ways to help Auralys grow. You do not
              need to be a developer or a music industry professional
              to make a difference.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contributions.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/15 bg-white/[0.09] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Icon size={23} />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-white/65">
                  {description}
                </p>
              </article>
            ))}
          </div>

        </section>

        {/* ARTISTS */}
        <section className="border-y border-white/10 bg-[#351765]/20 px-4 py-24 sm:px-6">

          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/80">
                <Music2 size={15} />
                For artists
              </div>

              <h2 className="text-3xl font-bold sm:text-5xl">
                Your music deserves to be discovered.
              </h2>

              <p className="mt-7 text-base leading-relaxed text-white/70">
                Are you an independent artist, musician, producer or
                part of a record label? We would love to hear from you.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70">
                Get in touch with our team to introduce your work,
                discuss potential collaborations or explore ways
                to connect with the Auralys community.
              </p>

              <a
                href="mailto:contact@auralys.app?subject=Artist%20inquiry%20-%20Auralys"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-purple-700 transition hover:-translate-y-1"
              >
                Contact us as an artist
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/15 bg-white/[0.09] p-7 backdrop-blur-xl">
                <Mic2 size={28} className="mb-8 text-white/80" />
                <h3 className="text-lg font-bold">
                  Independent artists
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Introduce your music and connect with listeners.
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-white/15 bg-white/[0.09] p-7 backdrop-blur-xl">
                <Disc3 size={28} className="mb-8 text-white/80" />
                <h3 className="text-lg font-bold">
                  Labels & producers
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Explore opportunities to collaborate with Auralys.
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/[0.09] p-7 backdrop-blur-xl">
                <Users size={28} className="mb-8 text-white/80" />
                <h3 className="text-lg font-bold">
                  Music professionals
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Share your expertise and ideas with our team.
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-white/15 bg-white/[0.09] p-7 backdrop-blur-xl">
                <Music2 size={28} className="mb-8 text-white/80" />
                <h3 className="text-lg font-bold">
                  Music projects
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Tell us about your upcoming releases and projects.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-4 py-28 text-center">

          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 px-8 py-16 backdrop-blur-xl">

            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Mail size={27} />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              Let's talk
            </p>

            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Have something in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
              Whatever your reason for reaching out, our inbox is open.
              Send us a message and let's start a conversation.
            </p>

            <a
              href="mailto:contact@auralys.app"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-purple-700 transition hover:-translate-y-1"
            >
              contact@auralys.app
              <ArrowUpRight size={18} />
            </a>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
