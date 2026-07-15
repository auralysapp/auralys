import { Star, ListOrdered, Share2 } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      title: "Rate & Review",
      description: "Share your thoughts on albums and tracks. Build a comprehensive diary of your musical journey and debate with the community.",
      icon: Star,
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      title: "Dynamic Rankings",
      description: "Create your personal tier lists for your favorite artists or decades. See how the global consensus shifts over time.",
      icon: ListOrdered,
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      title: "Social Discovery",
      description: "Follow users who share your exact sonic palette. Discover music through real people, not just cold algorithms.",
      icon: Share2,
      color: "text-pink-400",
      bg: "bg-pink-400/10"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Designed for Music Lovers</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Auralys isn't just about listening. It's about engaging with the art, curating your taste, and discovering the undiscovered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 sm:mb-6`}>
                <feature.icon size={24} className={feature.color} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
