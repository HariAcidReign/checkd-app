export interface DayLog {
    id: string
    time: string
    activity: string
    category: 'Productive' | 'Neutral' | 'Not Productive'

}

export interface DayData {
    day: string // 'M', 'T', 'W', etc.
    fullDate: string // 'Oct 18'
    productivityScore: number // 0-100, determines bar height
    isBestDay?: boolean
    logs: DayLog[]
}

export const MOCK_WEEK_DATA: DayData[] = [
    { day: 'M', fullDate: 'Oct 16', productivityScore: 40, logs: [] },
    { day: 'T', fullDate: 'Oct 17', productivityScore: 65, logs: [] },
    {
        day: 'W',
        fullDate: 'Oct 18',
        productivityScore: 90,
        isBestDay: true,
        logs: [
            { id: '1', time: '09:00', activity: 'Deep Work: Design', category: 'Productive' },
            { id: '2', time: '11:15', activity: 'Email & Admin', category: 'Neutral' },
            { id: '3', time: '13:30', activity: 'Client Meeting', category: 'Productive' },
            { id: '4', time: '15:00', activity: 'Social Media', category: 'Not Productive' },
        ]
    },
    { day: 'T', fullDate: 'Oct 19', productivityScore: 55, logs: [] },
    { day: 'F', fullDate: 'Oct 20', productivityScore: 70, logs: [] },
    { day: 'S', fullDate: 'Oct 21', productivityScore: 30, logs: [] },
    { day: 'S', fullDate: 'Oct 22', productivityScore: 20, logs: [] },
]
