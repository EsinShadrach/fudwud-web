export function OauthButton({
  name,
  children,
  className,
  onClick,
}: OauthButtonInterface) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center pr-4 bg-white rounded-full gap-3 text-sm ${className}`}
    >
      {children}
      <div>{name}</div>
    </button>
  );
}

interface OauthButtonInterface {
  name: string;
  children: React.ReactNode;
  className?: string;
  onClick: VoidFunction;
}
