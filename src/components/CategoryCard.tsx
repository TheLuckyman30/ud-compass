interface CategoryCardProps {
  categoryName: string;
}

export function CategoryCard({ categoryName }: CategoryCardProps) {
  return (
    <div className="bg-white text-center rounded-sm border border-gray-400 py-10 shadow-md hover:scale-110 duration-75 cursor-pointer font-medium">
      {categoryName}
    </div>
  );
}
