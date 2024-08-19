'use client';

import React, {useEffect, useState} from 'react';
import {useSet} from 'react-use';

import {FilterCheckbox, FilterChecboxProps} from './filter-checkbox';
import {Input} from '../ui/input';
import {Skeleton} from "@/components/ui";


interface Props {
    title: string;
    items: FilterChecboxProps[];
    defaultItems: FilterChecboxProps[];
    limit?: number;
    loading?: boolean
    searchInputPlaceholder?: string;
    className?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
}

export const CheckboxFiltersGroup = ({
                                         title,
                                         items,
                                         defaultItems,
                                         limit = 5,
                                         loading,
                                         searchInputPlaceholder = 'Поиск...',
                                         className,
                                         onChange,
                                         defaultValue,
                                     }: Props) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('')
    const [selected, {add, toggle}] = useSet<string>(new Set([]));

    const onCheckedChange = (value: string) => {
        toggle(value);
    };
    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }


    const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        : defaultItems?.slice(0, limit)

    useEffect(() => {
        if (defaultValue) {
            defaultValue.forEach(add);
        }
    }, [defaultValue?.length]);

    useEffect(() => {
        onChange?.(Array.from(selected));
    }, [selected]);

    if (loading) {
        return <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>
            {
                ...Array(limit).fill(0).map((_, i) => (
                    <Skeleton key={i} className={'h-6 mb-3 rounded-[8px]'}/>
                ))
            }
            <Skeleton className={'w-28 h-6 mb-3 rounded-[8px]'}/>
        </div>
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder}
                           className="bg-gray-50 border-none"/>
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item) => (
                    <FilterCheckbox
                        onCheckedChange={() => onCheckedChange(item.value)}
                        checked={selected.has(item.value)}
                        key={String(item.value)}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
