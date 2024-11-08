import { NotificationSliceType, createNotificationSlice } from './notificationSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';
import { create } from 'zustand'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { devtools } from 'zustand/middleware'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(
    devtools(
        (...a) => ({
            ...createRecipesSlice(...a),
            ...createFavoritesSlice(...a),
            ...createNotificationSlice(...a)
        })
    )
)