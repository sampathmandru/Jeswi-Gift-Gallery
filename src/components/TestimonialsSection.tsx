const testimonials = [
  {
    name: "Priya Reddy",
    text: "The wedding hampers were absolutely stunning! Every guest loved the return gifts. Jeswi Gift Gallery made our special day even more memorable.",
    rating: 5,
    event: "Wedding Gifting",
  },
  {
    name: "Suresh Kumar",
    text: "Ordered 200 customized mugs for our corporate event. The quality and delivery were beyond expectations. Highly recommend for bulk orders!",
    rating: 5,
    event: "Corporate Event",
  },
  {
    name: "Lakshmi Devi",
    text: "The thalambralu and kanyadanam sets were so beautifully designed. Traditional yet modern — exactly what I wanted for my daughter's wedding.",
    rating: 5,
    event: "Wedding Essentials",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding gradient-maroon">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-gold-light tracking-[0.25em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-primary-foreground text-3xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-dark rounded-2xl p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-primary-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display text-primary-foreground font-bold">{t.name}</p>
                <p className="font-body text-gold-light text-xs">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
