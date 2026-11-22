import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Music2, Star, Sparkles, Disc3 } from 'lucide-react';

const reviews = [
  {
    name: 'Emma Laurent',
    handle: '@emmalovesmusic',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
    date: 'Il y a 2 jours',
    text: "Je pensais simplement venir noter quelques albums… Finalement, j'ai découvert tellement d'artistes que je n'aurais probablement jamais écoutés. C'est devenu mon petit rituel du soir !",
    tag: 'Découvertes musicales',
    size: 'large',
    tone: 'light',
  },
  {
    name: 'Lucas Moreau',
    handle: '@lucas.wav',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
    date: 'Il y a 4 jours',
    text: "Enfin un endroit où je peux parler musique avec des gens aussi passionnés que moi.",
    size: 'medium',
    tone: 'glass',
  },
  {
    name: 'Chloé Martin',
    handle: '@chloe.mp3',
    avatar: 'https://i.pravatar.cc/120?img=44',
    date: 'Il y a 1 semaine',
    text: 'Mon nouveau terrain de jeu musical. 💜',
    size: 'small',
    tone: 'deep',
  },
  {
    name: 'Nathan Petit',
    handle: '@nathanlistens',
    avatar: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
    date: 'Il y a 5 jours',
    text: "Ce que j'aime le plus, c'est pouvoir comparer mes classements avec ceux des autres. On découvre des goûts complètement différents et on finit par se conseiller des pépites.",
    tag: 'Classements',
    size: 'large',
    tone: 'glass',
  },
  {
    name: 'Alvin',
    handle: '@alvin',
    avatar: '/pfp/alvin.jpg',
    rating: 5,
    date: '3 months ago',
    text: "Auralys is a wonderful app for rating, sorting, and organizing your favorite music. Its design is beautiful, clean, and well-organized, making the overall experience particularly enjoyable. Everything is easy to understand and navigate, making you want to come back and use it again. What I particularly love is the ability to gradually build your own musical profile and keep track of your tastes and discoveries. It's an app that truly makes you want to experience your passion for music in a whole new way!",
    size: 'medium',
    tone: 'light',
  },
  {
    name: 'Hugo Bernard',
    handle: '@hugobeats',
    avatar: 'https://i.pravatar.cc/120?img=15',
    date: 'Il y a 8 jours',
    text: 'Simple, intuitif et terriblement addictif.',
    size: 'small',
    tone: 'glass',
  },
  {
    name: 'Inès Robert',
    handle: '@inesonrepeat',
    avatar: 'https://i.pravatar.cc/120?img=49',
    rating: 5,
    date: 'Il y a 2 semaines',
    text: "Je me suis créé une véritable bibliothèque de mes albums préférés. J'aime pouvoir retrouver mon historique et mes notes.",
    tag: 'Journal musical',
    size: 'medium',
    tone: 'deep',
  },
  {
    name: 'Maxime Girard',
    handle: '@maxsounds',
    avatar: 'https://i.pravatar.cc/120?img=68',
    date: 'Il y a 2 semaines',
    text: "Les recommandations m'ont fait découvrir des artistes incroyables.",
    size: 'small',
    tone: 'light',
  },
  {
    name: 'Léa Fontaine',
    handle: '@leasplaylist',
    avatar: 'https://i.pravatar.cc/120?img=45',
    rating: 5,
    date: 'Il y a 3 semaines',
    text: 'Une communauté vraiment sympa, des avis intéressants et plein de nouvelles découvertes.',
    size: 'medium',
    tone: 'glass',
  },
  {
    name: 'Arthur Simon',
    handle: '@arthurvinyl',
    avatar: 'https://i.pravatar.cc/120?img=5',
    rating: 5,
    date: 'Il y a 3 semaines',
    text: "Auralys m'a rappelé pourquoi j'aime autant la musique : pas seulement pour l'écouter, mais aussi pour la partager, en discuter et découvrir ce qu'elle représente pour les autres.",
    tag: 'La musique en partage',
    size: 'large',
    tone: 'deep',
  },
  {
    name: 'Manon Lefèvre',
    handle: '@manon.wav',
    avatar: 'https://i.pravatar.cc/120?img=20',
    date: 'Il y a 1 mois',
    text: 'Je pourrais passer des heures à explorer les classements de la communauté.',
    size: 'small',
    tone: 'glass',
  },
  {
    name: 'Ethan Garcia',
    handle: '@ethanlistens',
    avatar: 'https://i.pravatar.cc/120?img=33',
    rating: 5,
    date: 'Il y a 1 mois',
    text: "Le meilleur moyen de sortir de sa bulle musicale. J'ai découvert des albums qui sont maintenant parmi mes préférés. Et tout ça grâce aux goûts de personnes que je ne connaissais même pas !",
    tag: 'Nouvelles pépites',
    size: 'large',
    tone: 'light',
  },
];

const placements = [
  'md:col-span-4 md:col-start-1 md:row-start-1 md:translate-y-5 md:-rotate-2',
  'md:col-span-4 md:col-start-6 md:row-start-1 md:translate-y-12 md:rotate-2',
  'md:col-span-3 md:col-start-10 md:row-start-1 md:-translate-y-3 md:-rotate-3',
  'md:col-span-4 md:col-start-2 md:row-start-2 md:translate-y-7 md:rotate-2',
  'md:col-span-5 md:col-start-7 md:row-start-2 md:translate-y-2 md:-rotate-1',
  'md:col-span-3 md:col-start-1 md:row-start-3 md:translate-y-8 md:rotate-3',
  'md:col-span-4 md:col-start-5 md:row-start-3 md:-translate-y-1 md:-rotate-2',
  'md:col-span-3 md:col-start-10 md:row-start-3 md:translate-y-10 md:rotate-2',
  'md:col-span-4 md:col-start-2 md:row-start-4 md:translate-y-3 md:-rotate-2',
  'md:col-span-4 md:col-start-7 md:row-start-4 md:translate-y-8 md:rotate-2',
  'md:col-span-4 md:col-start-1 md:row-start-5 md:translate-y-4 md:-rotate-1',
  'md:col-span-6 md:col-start-6 md:row-start-5 md:-translate-y-1 md:rotate-1',
];

function ReviewCard({ review, index }) {
  const toneClasses = {
    light: 'bg-white/[0.14] border-white/25',
    glass: 'bg-white/[0.09] border-white/15',
    deep: 'bg-[#351765]/35 border-white/15',
  };

  return (
    <article
      className={[
        'group relative h-full overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_55px_rgba(35,12,75,0.14)]',
        'backdrop-blur-xl transition duration-500 ease-out',
        'hover:-translate-y-2 hover:rotate-0 hover:bg-white/[0.17] hover:shadow-[0_25px_65px_rgba(35,12,75,0.24)]',
        toneClasses[review.tone],
        review.size === 'large' ? 'min-h-[260px] sm:p-8' : '',
        review.size === 'small' ? 'min-h-[175px]' : 'min-h-[215px]',
        placements[index],
      ].join(' ')}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:bg-white/20" />

      <div className="relative z-10 flex items-center gap-3">
        <img
          src={review.avatar}
          alt={`Portrait fictif de ${review.name}`}
          loading="lazy"
          className="h-12 w-12 rounded-full border-2 border-white/40 object-cover shadow-lg"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-white">{review.name}</h3>
          <p className="mt-0.5 truncate text-xs text-white/55">{review.handle}</p>
        </div>
        <span className="shrink-0 text-[10px] text-white/45">{review.date}</span>
      </div>

      {review.rating && (
        <div className="relative z-10 mt-5 flex items-center gap-0.5 text-white/90" aria-label={`${review.rating} étoiles sur 5`}>
          {Array.from({ length: review.rating }).map((_, starIndex) => (
            <Star key={starIndex} size={13} fill="currentColor" strokeWidth={1.5} />
          ))}
        </div>
      )}

      <p className={`relative z-10 mt-4 leading-relaxed text-white/85 ${review.size === 'large' ? 'text-base sm:text-[17px]' : 'text-sm'}`}>
        “{review.text}”
      </p>

      {review.tag && (
        <div className="relative z-10 mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-white/75">
          <Music2 size={12} />
          {review.tag}
        </div>
      )}

      <span className="pointer-events-none absolute -bottom-7 -right-1 select-none font-serif text-[105px] leading-none text-white/[0.07]">
        ”
      </span>
    </article>
  );
}

export default function Reviews() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#999cf0] via-[#7951c1] to-[#54258f] text-white">
      {/* Soft ambient lights */}
      <div className="pointer-events-none absolute -left-48 top-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-48 top-[850px] h-[600px] w-[600px] rounded-full bg-[#351765]/35 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-[1500px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-[110px]" />

      <Navbar />

      <main className="relative z-10">
        {/* HERO */}
        <section className="px-4 pb-12 pt-36 text-center sm:px-6 sm:pb-16 sm:pt-44">
          <div className="mx-auto max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur-md">
              <Sparkles size={15} />
              Voices of Auralys
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Music brings us together.
              <br />
              <span className="text-white/65">Here's what they say.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Des découvertes inattendues, des albums qui marquent et des passions
              partagées. Découvrez les petits mots de la communauté Auralys.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#351765]/20 px-4 py-2 text-xs text-white/65 backdrop-blur-md">
              <Disc3 size={14} />
              12 histoires · Une même passion
            </div>
          </div>
        </section>

        {/* REVIEWS WALL */}
        <section className="mx-auto max-w-[1440px] px-4 pb-28 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
              The community wall
            </p>
            <p className="text-xs text-white/45">Quelques mots, beaucoup de musique.</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-min md:gap-x-5 md:gap-y-9">
            {reviews.map((review, index) => (
              <ReviewCard key={review.handle} review={review} index={index} />
            ))}
          </div>

        </section>

        {/* CLOSING */}
        <section className="border-y border-white/10 bg-[#351765]/20 px-4 py-20 text-center backdrop-blur-sm sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
              <Music2 size={26} />
            </div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              Your turn
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Every music story matters.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
              Auralys se construit aussi grâce à celles et ceux qui font vivre
              la musique. Continuez à découvrir, noter et partager.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
