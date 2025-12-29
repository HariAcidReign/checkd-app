import { DayData } from './week'

export interface HistoryWeekData {
    id: string
    weekLabel: string
    title: string
    summary: string
    days: DayData[]
}

// Specific 6 weeks as requested
const WEEKS = [
    { label: 'OCT 1 - OCT 7', title: 'Steady Start' },
    { label: 'OCT 8 - OCT 14', title: 'High Intensity' },
    { label: 'OCT 15 - OCT 21', title: 'Balanced Focus' },
    { label: 'OCT 22 - OCT 28', title: 'Recovery Mode' },
    { label: 'OCT 29 - NOV 4', title: 'Deep Work' },
    { label: 'NOV 5 - NOV 11', title: 'Consistency' },
]

export const MOCK_HISTORY_DATA: HistoryWeekData[] = WEEKS.map((week, i) => {
    return {
        id: `week-${i}`,
        weekLabel: week.label,
        title: week.title,
        summary: "Strong start early in the week with high deep work sessions. Weekend recovery was optimal. Consistency is key!",
        days: [
            { day: 'M', fullDate: 'Mon', productivityScore: Math.random() * 100, logs: [] },
            { day: 'T', fullDate: 'Tue', productivityScore: Math.random() * 100, logs: [] },
            { day: 'W', fullDate: 'Wed', productivityScore: Math.random() * 100, logs: [], isBestDay: true },
            { day: 'T', fullDate: 'Thu', productivityScore: Math.random() * 100, logs: [] },
            { day: 'F', fullDate: 'Fri', productivityScore: Math.random() * 100, logs: [] },
            { day: 'S', fullDate: 'Sat', productivityScore: Math.random() * 100, logs: [] },
            { day: 'S', fullDate: 'Sun', productivityScore: Math.random() * 100, logs: [] },
        ]
    }
})
