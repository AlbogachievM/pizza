import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {APIClient} from "../../services/api-client";
import {prisma} from "../../prisma/prisma-client";

interface ReturnProps {
    ingredients: Ingredient[];
}
export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    useEffect(()=>{
        async function fetchIngredients(){
            try {
                const res = await APIClient.ingredients.getAll();
                setIngredients(res)
            }catch(error){
                console.log(error)
            }
        }
        fetchIngredients()
    }, [])
    return {ingredients}
}