import { Button } from '../Button';

interface ResourceFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'Guides', label: 'Guides' },
  { id: 'Tips', label: 'Tips' },
  { id: 'News', label: 'News' },
  { id: 'Case Studies', label: 'Case Studies' },
];

export function ResourceFilters({ selectedCategory, onCategoryChange }: ResourceFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}