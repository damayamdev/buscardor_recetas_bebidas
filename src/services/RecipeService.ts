
import { thecocktaildbApi } from './../api/index';
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema'
import { Drink, SearchFilter } from '../types';

export class RecipesServices {
    static async getCategories() {

        const { data } = await thecocktaildbApi.get('/list.php?c=list')
        const result = CategoriesAPIResponseSchema.safeParse(data)
        if (result.success) {
            return result.data
        }
    }

    static async  getRecipes(filters:SearchFilter) {
        const { data } = await thecocktaildbApi.get(`/filter.php?c=${filters.category}&i=${filters.ingredient}`)
        const result = DrinksAPIResponse.safeParse(data)
        if (result.success) {
            return result.data
        }
        
    }

    static async getRecipeById(id: Drink['idDrink']) {
        const {data} = await thecocktaildbApi.get(`/lookup.php?i=${id}`)
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
        if (result.success) {
            return result.data
        }
    }
}
