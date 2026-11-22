
import Navbar from './Navbar';
import { useState } from 'react';
import Footer from './Footer';
import {
  ArrowUpRight,
  ImagePlus,
  Music2,
  Star,
  ListOrdered,
  Users,
  Compass,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'Rate albums and tracks, write reviews and keep track of your musical journey.'
  },
  {
    icon: ListOrdered,
    title: 'Personal Rankings',
    description: 'Create your own rankings, lists and tier lists to showcase your music taste.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with other music lovers, explore profiles and discover new perspectives.'
  },
  {
    icon: Compass,
    title: 'Discover',
    description: 'Explore new artists, albums and tracks beyond your usual listening habits.'
  },
  {
    icon: MessageCircle,
    title: 'Share Your Taste',
    description: 'Share your opinions, recommendations and musical discoveries.'
  },
  {
    icon: Sparkles,
    title: 'Your Music Identity',
    description: 'Build a personal space that reflects your musical identity.'
  }
];


const screenshots = [
  {
    file: 'screen-01.png',
    title: 'Your Profile',
    description: 'Discover the songs your friends have shared, quests, and trending songs. Browse through the different categories on the home page!'
  },
  {
    file: 'screen-02.png',
    title: 'Search Page',
    description: "Search for your favorite albums and artists, or access a user's account by searching for their username."
  },
  {
    file: 'screen-03.png',
    title: 'Leave a review',
    description: 'Leave a rating and a comment for the song of your choice. You can share this rating on your favorite social media platforms, and even listen to the song on your music app.'
  },
  {
    file: 'screen-04.png',
    title: 'Auralys Space',
    description: 'Play, discover the latest releases, and compete with your friends. A true hub centered around our favorite world: music!'
  },
  {
    file: 'screen-05.png',
    title: 'Blind test game',
    description: "Here's an example of one of our music games. Choose to play solo or with friends, decide on the number of rounds, and, of course, the type of music you want to guess."
  },
  {
    file: 'screen-06.png',
    title: 'Your Profile',
    description: 'Your music, your identity. Build a personal profile that reflects your musical taste and showcases your activity on Auralys.'
  }
];




function ScreenshotCard({ item, index }) {
  const [imageError, setImageError] = useState(false);
  const reversed = index % 2 !== 0;

  return (
    <article
      className={`flex flex-col items-center gap-10 md:gap-16 ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Screenshot */}
      <div className="group w-full md:w-1/2">
        <div className="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-black/10">
          {!imageError ? (
            <img
              src={`/features/${item.file}`}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 p-5 text-center">
              <ImagePlus size={32} className="text-white/60" />
              <span className="text-xs uppercase tracking-widest text-white/50">
                Screenshot {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-white/60">
                Add {item.file}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="w-full max-w-lg md:w-1/2">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
          Feature {String(index + 1).padStart(2, '0')}
        </p>

        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {item.title}
        </h3>

        <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
          {item.description}
        </p>

        <div className="mt-8 h-px w-16 bg-white/40" />
      </div>
    </article>
  );
}

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#999cf0] via-[#7951c1] to-[#54258f] text-white">

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <Navbar />

      <main className="relative z-10">

        {/* HERO */}
        <section className="px-4 pb-24 pt-40 text-center sm:pt-48">
          <div className="mx-auto max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/80">
              <Music2 size={15} />
              The Auralys Experience
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Your music taste.
              <br />
              <span className="text-white/65">
                In the spotlight.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              Discover, rate, review and share music.
              Auralys brings your musical identity into one place.
            </p>

            <a
              href="#screenshots"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-purple-700 transition hover:-translate-y-1"
            >
              Explore Auralys
              <ArrowUpRight size={18} />
            </a>

          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6">

          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/60">
              Made for music lovers
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Everything about your taste, in one place.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/15 bg-white/[0.09] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]"
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

        {/* SCREENSHOTS */}
        <section
          id="screenshots"
          className="border-y border-white/10 bg-[#351765]/20 px-4 py-24 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-14">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/60">
                Take a closer look
              </p>

              <h2 className="text-3xl font-bold sm:text-5xl">
                Auralys, on screen.
              </h2>

              <p className="mt-4 max-w-xl text-white/65">
                Explore the interface and discover what makes Auralys unique.
              </p>
            </div>

            
            <div className="flex flex-col gap-24 sm:gap-32">
              {screenshots.map((item, index) => (
                <ScreenshotCard
                key={item.file}
                item={item}
                index={index}
                />
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-28 text-center">

          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 px-8 py-16 backdrop-blur-xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              Ready when you are
            </p>

            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Make room for your music.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Give your music taste a place to live.
            </p>

            <a
              href="https://auralys.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-purple-700 transition hover:-translate-y-1"
            >
              Launch Auralys
              <ArrowUpRight size={18} />
            </a>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
