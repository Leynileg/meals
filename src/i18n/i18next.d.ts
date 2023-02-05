import { translations } from "./locales";

const {
  en: { favorites, meal_details, generic },
} = translations;

type Domains = keyof typeof translations.en;

type FavoritesKeys = keyof typeof favorites;
type MealDetailsKeys = keyof typeof meal_details;
type GenericKeys = keyof typeof generic;

type FavoriteFullPaths = `favorites.${FavoritesKeys}`;
type MealDetailsFullPaths = `meal_details.${MealDetailsKeys}`;
type GenericFullPaths = `generic.${GenericKeys}`;

type FullPaths = FavoriteFullPaths | MealDetailsFullPaths | GenericFullPaths;

type DomainWithPaths = {
  [key in FullPaths]: string;
};

type AllDomainsWithFullPaths = {
  [domain in Domains]: DomainWithPaths;
};

type Resources = typeof translations.en & AllDomainsWithFullPaths;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: Resources;
    defaultNS: Domains;
    nsSeparator: ".";
    returnNull: false;
  }
}
