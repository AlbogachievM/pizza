import {Categories, Container, Filters, SortPopup} from "@/components/shared";
import {Title} from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import {ProductCard} from "@/components/shared/product-card";

export default function Home() {
    return <>
        <Container className={'mt-10'}>
            <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}/>
        </Container>
        <TopBar/>
        <Container className={'mt-10 pb-14'}>
            <div className={'flex gap-[60px]'}>
                {/* Фильтрация */}
                <div className={'w-[250px]'}>
                    <Filters/>
                </div>
                {/*  Список товаров  */}
                <div className="flex-1">
                    <div className="flex flex-col gap-16">
                       Список товаров
                    </div>
                </div>
            </div>
        </Container>

    </>
}
