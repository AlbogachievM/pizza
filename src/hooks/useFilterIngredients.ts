import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {APIClient} from "../../services/api-client";
import {prisma} from "../../prisma/prisma-client";

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean
}
export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(()=>{
        async function fetchIngredients(){
            try {
                setLoading(true)
                const res = await APIClient.ingredients.getAll();
                setIngredients(res)
            }catch(error){
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        fetchIngredients()
    }, [])
    return {ingredients, loading}
}