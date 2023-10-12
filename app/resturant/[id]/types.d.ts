type BaseProps = {
  params: { id: string };
  searchParams: { table?: string };
};

type Layout = {
  children:
    | {
        key: null;
        ref: null;
        props: {
          parallelRouterKey: string;
          segmentPath: string[];
          hasLoading: boolean;
          template: {
            key: null;
            ref: null;
            props: {
              children: {
                key: null;
                ref: null;
                props: {};
                _owner: null;
                _store: {};
              };
            };
            _owner: null;
            _store: {};
          };
          childProp: {
            current: {
              key: null;
              ref: null;
              props: {};
              _owner: null;
              _store: {};
            };
            segment: string;
          };
          styles: any[];
        };
        _owner: null;
        _store: {};
      }
    | any;
  params: {
    id: string;
  };
};
