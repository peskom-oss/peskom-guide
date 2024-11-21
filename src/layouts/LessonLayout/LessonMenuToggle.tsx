import { useState } from "react";
import { Menu, X, House } from "lucide-react";

import type { Curriculum, LessonMeta } from "./LessonLayout.astro";

interface Props {
  curriculums: Curriculum[];
  lessonSlug: string;
}

export default function LessonMenuToggle({ curriculums, lessonSlug }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(...curriculums);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-emphasis rounded-md"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background opacity-70 min-h-screen backdrop-blur-3xl z-40"
          onClick={toggleSidebar}
          aria-hidden={!isOpen}
        />
      )}

      <nav
        className={`min-h-screen fixed top-0 left-0 bottom-0 w-64 bg-background border-border-color border-r p-4 transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <div className="flex items-center gap-x-2">
            <a href="/">
              <House className="h-6 w-6" />
            </a>
            <button onClick={toggleSidebar} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <ul className="space-y-2">
          {curriculums.map((curriculum, idx) => (
            <NavItem key={idx} item={curriculum} lessonSlug={lessonSlug} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function NavItem({
  item,
  lessonSlug,
}: {
  item: Curriculum;
  lessonSlug: string;
}) {
  return (
    <li>
      <div className="block py-2 px-4 rounded-md transition-colors font-medium capitalize">
        {item.curriculum}
      </div>
      {item.children && (
        <ul className="mt-1 space-y-1">
          {item.children.map((lesson) => (
            <li
              key={lesson.id}
              className={`block py-2 px-4 hover:bg-emphasis hover:text-accent rounded-md transition-colors ml-4 text-sm ${lesson.slug === lessonSlug ? "bg-emphasis text-accent" : ""}`}
            >
              <NavItemLink
                category={item.category}
                subcategory={item.subcategory}
                slug={lesson.slug}
              >
                {lesson.title}
              </NavItemLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function NavItemLink({
  category,
  subcategory,
  slug,
  children,
}: {
  slug: string;
  category: string;
  subcategory: string;
  children: React.ReactNode;
}) {
  const url = `/guides/${category}/${subcategory}/${slug}`;

  return (
    <a href={url} className="block">
      {children}
    </a>
  );
}
