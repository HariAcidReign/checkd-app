/**
 * Check-in Types
 * Defines types for check-in feature - designed to be extensible for future DB integration
 */

export type ProductivityType = 'Productive' | 'Not Productive' | 'Neutral'

export const PRODUCTIVITY_OPTIONS: ProductivityType[] = ['Productive', 'Not Productive', 'Neutral']

export interface CheckIn {
    id: string
    text: string
    productivity: ProductivityType
    timestamp: Date
}

export interface CheckInConfig {
    dailyLimit: number  // How many check-ins per day (default 5, but configurable)
}

export interface CheckInState {
    completed: number
    total: number
    checkIns: CheckIn[]  // For future: store actual check-in data
}

// Default configuration
export const DEFAULT_CHECKIN_CONFIG: CheckInConfig = {
    dailyLimit: 5,
}
