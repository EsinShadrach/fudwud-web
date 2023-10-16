type BaseProps = {
  params: { id: string };
  searchParams: { table?: string };
};

type Layout = {
  children: React.ReactNode;
  params: {
    id: string;
  };
};
