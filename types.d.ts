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
