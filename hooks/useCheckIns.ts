import { useState, useCallback } from 'react'
import { CheckIn, CheckInState, ProductivityType, DEFAULT_CHECKIN_CONFIG, CheckInConfig } from '../types/checkin'

/**
 * useCheckIns Hook
 * 
 * Manages check-in state with clean separation for future DB integration.
 * Currently stores state in memory, but designed to easily swap with async DB calls.
 */
export function useCheckIns(config: CheckInConfig = DEFAULT_CHECKIN_CONFIG) {
    const [state, setState] = useState<CheckInState>({
        completed: 0,
        total: config.dailyLimit,
        checkIns: [],
    })

    /**
     * Add a new check-in
     * In future: This will make a DB call to persist the check-in
     */
    const addCheckIn = useCallback(async (text: string, productivity: ProductivityType): Promise<boolean> => {
        // Don't allow more check-ins than the daily limit
        if (state.completed >= state.total) {
            return false
        }

        const newCheckIn: CheckIn = {
            id: Date.now().toString(), // Simple ID for now, replace with UUID or DB-generated ID
            text,
            productivity,
            timestamp: new Date(),
        }

        // TODO: In future, make DB call here:
        // await database.checkIns.create(newCheckIn)

        setState(prev => ({
            ...prev,
            completed: prev.completed + 1,
            checkIns: [...prev.checkIns, newCheckIn],
        }))

        return true
    }, [state.completed, state.total])

    /**
     * Get remaining check-ins
     */
    const remaining = state.total - state.completed

    /**
     * Get progress as a decimal (0 to 1)
     */
    const progress = state.total > 0 ? state.completed / state.total : 0

    /**
     * Reset check-ins (e.g., at midnight)
     * In future: This will sync with server
     */
    const resetCheckIns = useCallback(async () => {
        // TODO: In future, sync with server
        setState({
            completed: 0,
            total: config.dailyLimit,
            checkIns: [],
        })
    }, [config.dailyLimit])

    /**
     * Update daily limit
     * In future: This will persist to user settings
     */
    const updateDailyLimit = useCallback((newLimit: number) => {
        // TODO: In future, persist to user settings
        setState(prev => ({
            ...prev,
            total: newLimit,
        }))
    }, [])

    return {
        // State
        completed: state.completed,
        total: state.total,
        remaining,
        progress,
        checkIns: state.checkIns,

        // Actions
        addCheckIn,
        resetCheckIns,
        updateDailyLimit,
    }
}

export type UseCheckInsReturn = ReturnType<typeof useCheckIns>
