import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { servicesList } from "../../utils/servicesList";

export function ServicesList() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {servicesList.map((item, i) => (
        <BentoGridItem
          key={item.id}
          title={item.displayText}
          description={item.description || "Description coming soon..."}
          header={
            <img
              src={item.imgUrl}
              alt={item.displayText}
              className="w-12 h-12 object-contain"
            />
          }
          icon={
            <img
              src={item.imgUrl}
              alt="icon"
              className="h-4 w-4 text-neutral-500"
            />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
