import { useState } from "react";

interface BlogFilterProps {
  industries: string[];
  technologies: string[];
  onFilterChange: (industry: string, technology: string) => void;
}

export const BlogFilter: React.FC<BlogFilterProps> = ({
  industries = [],
  technologies = [],
  onFilterChange,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedTechnology, setSelectedTechnology] =
    useState("All Technologies");

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedIndustry(value);
    onFilterChange(value, selectedTechnology);
  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTechnology(value);
    onFilterChange(selectedIndustry, value);
  };

  const handleShowAll = () => {
    setSelectedIndustry("All Industries");
    setSelectedTechnology("All Technologies");
    onFilterChange("All Industries", "All Technologies");
  };

  return (
    <div className="flex items-center gap-4 mb-8 flex-wrap">
      <span className="text-lg font-semibold text-gray-700">Sort By</span>

      <select
        value={selectedIndustry}
        onChange={handleIndustryChange}
        className="px-4 py-1.5 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 min-w-[200px]"
      >
        <option value="All Industries">All Industries</option>
        {[...new Set(industries ?? [])].map((industry, index) => (
          <option key={`${industry}-${index}`} value={industry}>
            {industry}
          </option>
        ))}
      </select>

      <select
        value={selectedTechnology}
        onChange={handleTechnologyChange}
        className="px-4 py-1.5 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 min-w-[200px]"
      >
        <option value="All Technologies">All Technologies</option>
        {[...new Set(technologies ?? [])].map((tech, index) => (
          <option key={`${tech}-${index}`} value={tech}>
            {tech}
          </option>
        ))}
      </select>

      <button
        onClick={handleShowAll}
        className="px-4 py-1.5 bg-amber-500 text-white hover:bg-amber-600 transition-colors font-medium"
      >
        Show All
      </button>
    </div>
  );
};
