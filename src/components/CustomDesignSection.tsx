const CustomDesignSection = () => {
  return (
    <section className="section-padding bg-blush">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-gold-dark tracking-[0.25em] uppercase text-sm mb-3">Your Vision, Our Craft</p>
        <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold mb-6">
          Design Your Own Gift
        </h2>
        <div className="gold-divider w-24 mx-auto mb-6" />
        <p className="font-body text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Upload your photos, names, quotes, or any personal idea — and we'll turn it
          into a beautifully crafted gift. From concept to delivery, we make your
          imagination real.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { step: "01", title: "Share Your Idea", desc: "Send us photos, text, or a design concept" },
            { step: "02", title: "We Design It", desc: "Our team creates a premium mockup for you" },
            { step: "03", title: "Get It Delivered", desc: "Receive your custom gift, beautifully packaged" },
          ].map((s) => (
            <div key={s.step} className="glass rounded-2xl p-6">
              <span className="font-display text-gold text-3xl font-bold">{s.step}</span>
              <h3 className="font-display text-maroon text-lg font-bold mt-2 mb-1">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/919010112020?text=Hi%20Jeswi!%20I%20want%20to%20create%20a%20custom%20gift"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gradient-maroon text-primary-foreground font-bold px-8 py-4 rounded-full shadow-gold hover:shadow-card-hover transition-all duration-300 hover:scale-105"
        >
          Start Creating
        </a>
      </div>
    </section>
  );
};

export default CustomDesignSection;
