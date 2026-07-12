interface StatusRendererProps {
  isLoading: boolean;
  error?: string | null;
  isEmpty?: boolean;
  children: React.ReactNode;
}

export function StatusRenderer({ isLoading, error, isEmpty, children }: StatusRendererProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Ошибка: {error}</div>;
  }

  if (isEmpty) {
    return <div className="text-center py-20 text-neutral-500">Нет товаров в данной категории</div>;
  }

  return <>{children}</>;
}