interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const CategoryCard = ({ image, title, description, delay = 0 }: CategoryCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-card hover-lift cursor-pointer opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-display text-primary-foreground text-lg font-bold mb-1">
          {title}
        </h3>
        <p className="font-body text-primary-foreground/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
        <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default CategoryCard;
