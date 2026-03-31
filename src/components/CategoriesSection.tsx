import CategoryCard from "./CategoryCard";
import catMugs from "@/assets/cat-mugs.jpg";
import catPillows from "@/assets/cat-pillows.jpg";
import catTshirts from "@/assets/cat-tshirts.jpg";
import catKeychains from "@/assets/cat-keychains.jpg";
import catResin from "@/assets/cat-resin.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import catFrames from "@/assets/cat-frames.jpg";
import catRakhi from "@/assets/cat-rakhi.jpg";
import catAlbum from "@/assets/cat-album.jpg";
import catThalambralu from "@/assets/cat-thalambralu.jpg";
import catBulk from "@/assets/cat-bulk.jpg";

const categories = [
  { image: catMugs, title: "Mug Printing", description: "Personalized photo mugs for every occasion" },
  { image: catPillows, title: "Pillow Printing", description: "Custom cushions with your favorite memories" },
  { image: catTshirts, title: "T-Shirt Printing", description: "Wear your story with custom printed tees" },
  { image: catKeychains, title: "Keychain Printing", description: "Carry your memories everywhere you go" },
  { image: catResin, title: "Resin Art Gifts", description: "Handcrafted resin art with dried flowers & gold" },
  { image: catWedding, title: "Wedding Hampers", description: "Luxury gift sets for wedding celebrations" },
  { image: catFrames, title: "Customized Frames", description: "Elegant photo frames for cherished moments" },
  { image: catRakhi, title: "Rakhi Printing", description: "Personalized rakhis for your sibling bond" },
  { image: catAlbum, title: "Album Designing", description: "Premium wedding & event album designs" },
  { image: catThalambralu, title: "Thalambralu Design", description: "Traditional Telugu wedding essentials" },
  { image: catBulk, title: "Bulk & Corporate", description: "Large orders for events, offices & institutions" },
  { image: catWedding, title: "Return Gifts", description: "Thoughtful return gifts for every ceremony" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-gold tracking-[0.25em] uppercase text-sm mb-3">Our Specialities</p>
          <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold mb-4">
            Gifts for Every Occasion
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From personalized printing to handcrafted wedding essentials — we create memories you can hold.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
