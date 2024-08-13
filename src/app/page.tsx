import {Categories, Container, Filters, SortPopup} from "@/components/shared";
import {Title} from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import {ProductCard} from "@/components/shared/product-card";
import {ProductGroupList} from "@/components/shared/product-group-list";

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
                        <ProductGroupList title="Пиццы" items={[
                            {
                                id: 1,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 2,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 3,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 4,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 5,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 6,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },

                        ]} categoryId={1}/>
                        <ProductGroupList title="Комбо" items={[
                            {
                                id: 11,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 12,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 13,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 14,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 15,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },
                            {
                                id: 16,
                                name: 'Чизбургер-пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                                price: 50,
                                items: [{price: 550}]
                            },

                        ]} categoryId={2}/>
                    </div>
                </div>
            </div>
        </Container>

    </>
}
