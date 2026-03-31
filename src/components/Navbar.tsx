import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="font-display text-xl md:text-2xl font-bold">
          <span className={scrolled ? "text-maroon" : "text-primary-foreground"}>Jeswi</span>{" "}
          <span className="text-gold">Gift Gallery</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          {["Products", "Services", "Bulk Orders", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`hover:text-gold transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/919010112020"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-gold text-foreground font-bold px-5 py-2 rounded-full text-sm shadow-gold hover:scale-105 transition-transform"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
