'use client'

import React from 'react';
import { Title } from './title';
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";

interface Props {
    className?: string;
}

export const Filters = ({className}: Props) => {
    const {ingredients, loading} = useFilterIngredients()

    const items = ingredients.map((ingredient) => ({value: String(ingredient.id), text: ingredient.name}))

    return (
        <div className={className}>

            <Title text={'Фильтрация'} size={'sm'} className={'mb-5 font-bold'}/>

            {/* Верхние чекбоксы */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            {/* Фильтр цен */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" min={100} max={30000} placeholder="30000"/>
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
            />
        </div>
    );
};

