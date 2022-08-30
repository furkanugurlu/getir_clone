export default function Category({category: {title, id, image}}) {
  return (
    <a href="" className="flex gap-y-2 flex-col group items-center text-center p-4 transition  hover:bg-purple-50 ">
      <img src={image} alt={title} className="w-12 h-12 rounded border border-gray-200" />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color ">{title}</span>
    </a>
  );
}
