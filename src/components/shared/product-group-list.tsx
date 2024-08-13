'use client'
import {ProductCard} from "@/components/shared/product-card";
import {Title} from "@/components/shared/title";
import {useIntersection} from "react-use";
import {useEffect, useRef} from "react";
import {useCategoryStore} from "@/store/category";

interface Props {
    title: string;
    items: any[];
    categoryId: number
    listClassName?: string;
    className?: string;
}

export const ProductGroupList = ({title, listClassName, items, categoryId, className}: Props) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
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