const services = [
  { icon: "🎥", title: "Video Editing & Mixing", desc: "Professional video editing for weddings, events & social media" },
  { icon: "📸", title: "Photoshoots", desc: "Creative photography for products, events & personal sessions" },
  { icon: "🎁", title: "Kanyadanam Sets", desc: "Complete traditional kanyadanam sets beautifully packaged" },
  { icon: "🥥", title: "Kobbaribondam Design", desc: "Decorative coconut designs for Telugu wedding rituals" },
  { icon: "🪔", title: "Aadu Therra Design", desc: "Traditional aadu therra crafted with elegance" },
  { icon: "💝", title: "Personalized Hampers", desc: "Custom gift hampers curated for any celebration" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-gold tracking-[0.25em] uppercase text-sm mb-3">Premium Services</p>
          <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold mb-4">
            Beyond Gifting
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-8 text-center hover-lift opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h3 className="font-display text-maroon text-xl font-bold mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
