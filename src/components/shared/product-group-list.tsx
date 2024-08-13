import {ProductCard} from "@/components/shared/product-card";
import {Title} from "@/components/shared/title";

interface Props {
    title: string;
    items: any[];
    categoryId?: number
    listClassName?: string;
    className?: string;
}

export const ProductGroupList = ({title, listClassName, items, categoryId, className}: Props) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((item, i) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}

                    />
                ))}
            </div>
        </div>
    )
}