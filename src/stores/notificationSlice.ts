import { StateCreator } from 'zustand'
import { FavoritesSliceType } from './favoritesSlice'

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification,
    closeNotification: () => void
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    closeNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().closeNotification()
        }, 5000)
    }
})