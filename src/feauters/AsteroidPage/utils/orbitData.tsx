type InfoItem = {
  label: string;
  value: React.ReactNode;
};
type InfoListProps = {
  items: InfoItem[];
};
export function InfoList({ items }: InfoListProps) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.label} className="flex justify-between items-center">
          <span className="text-slate-400">{item.label}</span>
          <span className="font-medium text-white text-left">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
