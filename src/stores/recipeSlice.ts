import {StateCreator} from 'zustand'
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types'
import { RecipesServices } from '../services/RecipeService'
import { FavoritesSliceType } from './favoritesSlice'


export type RecipesSliceType = {
    categories:Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal:boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set, get) => ({
    categories: {
        drinks:[]
    },
    drinks: {
        drinks:[]
    },
    modal: false,
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await RecipesServices.getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (searchFilters) => {
        const drinks = await RecipesServices.getRecipes(searchFilters)
        set({drinks})
    },
    selectRecipe: async(id) => {
        const selectedRecipe = await RecipesServices.getRecipeById(id)
        set({selectedRecipe, modal: true})
    },
    closeModal: () => {
        set({modal: !get().modal, selectedRecipe: {} as Recipe})
    }
})