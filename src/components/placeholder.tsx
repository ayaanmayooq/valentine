export function Placeholder({ title }: { title: string }) {
    return (
      <div className="h-full w-full flex items-center justify-center text-gray-500">
        {title} (Coming Soon)
      </div>
    );
  }