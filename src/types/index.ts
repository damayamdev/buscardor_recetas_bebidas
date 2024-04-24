import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, SearchFilterSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema";


export type Categories = Zod.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = Zod.infer<typeof SearchFilterSchema>
export type Drinks = Zod.infer<typeof DrinksAPIResponse>
export type Drink = Zod.infer<typeof DrinkAPIResponse>
export type Recipe = Zod.infer<typeof RecipeAPIResponseSchema>
