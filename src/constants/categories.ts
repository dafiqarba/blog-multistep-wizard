export const CATEGORIES = ['Tech', 'Lifestyle', 'Business', 'Leisure']
export type Category = (typeof CATEGORIES)[number]

type CategoryBadge = Record<Category, string>

export const CATEGORY_BADGE: CategoryBadge = {
  Tech: 'bg-sky-100 text-sky-700 ring-sky-200',
  Lifestyle: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  Business: 'bg-amber-100 text-amber-800 ring-amber-200',
  Leisure: 'bg-rose-100 text-rose-700 ring-rose-200',
}
