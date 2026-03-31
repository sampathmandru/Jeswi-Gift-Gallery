import catBulk from "@/assets/cat-bulk.jpg";

const BulkOrderSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <p className="font-heading text-gold tracking-[0.25em] uppercase text-sm mb-3">Bulk Orders</p>
            <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold mb-6">
              Large Quantity Gifting Made Easy
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Whether it's 50 mugs for a school event, 500 keychains for a wedding, or
              custom branded merchandise for your company — we handle bulk orders with
              the same care and quality as a single piece.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Weddings & Events", "Schools & Colleges", "Offices & Corporates", "Festivals & Ceremonies"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="font-body text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919010112020?text=Hi%20Jeswi!%20I%20want%20to%20enquire%20about%20bulk%20orders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-gold text-foreground font-bold px-8 py-4 rounded-full shadow-gold hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              Get Bulk Quote
            </a>
          </div>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <img
              src={catBulk}
              alt="Bulk corporate gifting"
              loading="lazy"
              width={640}
              height={640}
              className="rounded-2xl shadow-card w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
