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
  loading: boolean;
}

interface CreateOrder {
  id: string;
  count: number;
  instructions: string;
  status: "pending" | "cancelled" | "completed";
}

interface FoodItem {
  id: string;
  name: string;
  prepareTime: string;
  image: string;
  categories: string[];
  customerFavorite: boolean;
  featured: boolean;
  rating: number;
  ratingCount: number;
  price: number;
  instructions: string;
  addOns: {
    name: string;
    selected: boolean;
    image: string;
  }[];
}
