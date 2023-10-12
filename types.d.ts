type ColorSchemeInterface = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundText: string;
};

type ClassNameWithChildren = {
  className?: string;
  children?: React.ReactNode;
};

interface DynamicParamInterface {
  params: { id: string };
}

type ClassNameWithNoChildren = {
  className?: string;
};

interface FoodItem {
  id: number;
  name: string;
  prepareTime: string;
  image: string;
  categories: string[];
  customerFavorite: boolean;
  rating: string | number;
  ratingCount: number;
}
