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
  opacity?: string;
};

interface DynamicParamInterface {
  params: { id: string };
}

type ClassNameWithNoChildren = {
  className?: string;
};

interface FoodItem {
  id: number | string;
  name: string;
  prepareTime: string;
  image: string;
  categories: string[];
  customerFavorite: boolean;
  featured: boolean;
  rating: string | number;
  ratingCount: number;
  price: number;
  addOns: { name: string; selected: boolean }[];
}

type FilterItem = {
  name: string;
  selected: boolean;
};

type FilterCategory = {
  name: string;
  filter: FilterItem[];
};

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string | Date;
  review: string;
  photo: string;
}

interface Order {
  orders: CreateOrder[] | null;
  createOrder: (order: CreateOrder) => void;
}

interface CreateOrder {
  id: string | number;
  count: number;
  instructions: string;
  addOnName?: string[];
}
