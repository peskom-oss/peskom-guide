export interface MetaData {
  name: string;
  description: string;
  link: string;
}

export interface CategoryMetaData extends MetaData {
  category: string;
}

export interface SubGuideMetaData extends MetaData {
  curriculumName: string;
}

export function getCategoryList(
  guides: Record<string, any>,
): CategoryMetaData[] {
  return Object.entries(guides).map(([path, module]) => {
    const parts = path.split("/");
    const category = parts[parts.length - 2];
    return { category, ...(module as any).default };
  });
}

export function getCurriculumList({
  categoryMetaFiles,
  curriculumMetaFiles,
  currentCategory,
}: {
  categoryMetaFiles: Record<string, any>;
  curriculumMetaFiles: Record<string, any>;
  currentCategory: string;
}): SubGuideMetaData[] {
  const categoryMeta = Object.entries(categoryMetaFiles).find(([path]) =>
    path.includes(`/${currentCategory}/meta.json`),
  )?.[1];

  if (!categoryMeta) {
    return [];
  }

  const curricula = Object.entries(curriculumMetaFiles)
    .filter(([path]) => path.includes(`/${currentCategory}/`))
    .map(([path, meta]) => {
      const parts = path.split("/");
      const curriculumName = parts[parts.length - 2];
      return { curriculumName, ...meta };
    });

  return curricula;
}
