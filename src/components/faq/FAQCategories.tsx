import { Button } from '../Button';

interface FAQCategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function FAQCategories({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: FAQCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={selectedCategory === null ? 'primary' : 'secondary'}
        size="sm"
        onClick={() => onCategorySelect(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}