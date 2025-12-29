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
    {
        day: 'M',
        fullDate: 'Oct 16',
        productivityScore: 40,
        logs: [
            { id: 'm1', time: '08:30', activity: 'Weekly Planning', category: 'Productive' },
            { id: 'm2', time: '10:00', activity: 'Team Sync', category: 'Productive' },
            { id: 'm3', time: '12:00', activity: 'Lunch Break', category: 'Neutral' },
            { id: 'm4', time: '14:00', activity: 'Documentation', category: 'Neutral' },
        ]
    },
    {
        day: 'T',
        fullDate: 'Oct 17',
        productivityScore: 65,
        logs: [
            { id: 't1', time: '09:00', activity: 'Deep Work: Coding', category: 'Productive' },
            { id: 't2', time: '11:45', activity: 'Coffee Break', category: 'Neutral' },
            { id: 't3', time: '13:00', activity: 'Code Review', category: 'Productive' },
            { id: 't4', time: '16:00', activity: 'Browsing News', category: 'Not Productive' },
            { id: 't5', time: '17:30', activity: 'Refactoring', category: 'Productive' },
        ]
    },
    {
        day: 'W',
        fullDate: 'Oct 18',
        productivityScore: 90,
        isBestDay: true,
        logs: [
            { id: 'w1', time: '09:00', activity: 'Deep Work: Design', category: 'Productive' },
            { id: 'w2', time: '11:15', activity: 'Email & Admin', category: 'Neutral' },
            { id: 'w3', time: '13:30', activity: 'Client Meeting', category: 'Productive' },
            { id: 'w4', time: '15:00', activity: 'Social Media', category: 'Not Productive' },
            { id: 'w5', time: '16:30', activity: 'Prototyping', category: 'Productive' },
        ]
    },
    {
        day: 'T',
        fullDate: 'Oct 19',
        productivityScore: 55,
        logs: [
            { id: 'th1', time: '09:30', activity: 'User Testing', category: 'Productive' },
            { id: 'th2', time: '12:00', activity: 'Lunch with Team', category: 'Neutral' },
            { id: 'th3', time: '14:00', activity: 'Bug Triage', category: 'Productive' },
            { id: 'th4', time: '16:30', activity: 'Casual Chat', category: 'Not Productive' },
        ]
    },
    {
        day: 'F',
        fullDate: 'Oct 20',
        productivityScore: 70,
        logs: [
            { id: 'f1', time: '09:00', activity: 'Feature Dev', category: 'Productive' },
            { id: 'f2', time: '11:00', activity: 'Deployment', category: 'Productive' },
            { id: 'f3', time: '14:30', activity: 'Demo Prep', category: 'Productive' },
            { id: 'f4', time: '16:00', activity: 'Team Happy Hour', category: 'Neutral' },
        ]
    },
    {
        day: 'S',
        fullDate: 'Oct 21',
        productivityScore: 0,
        logs: []
    },
    {
        day: 'S',
        fullDate: 'Oct 22',
        productivityScore: 0,
        logs: []
    },
]

export const DAILY_AI_SUMMARIES = {
    mon: "You started the week with strong focus in the morning.",
    tue: "Today felt balanced, with good stretches of concentration.",
    wed: "Distractions showed up later in the day, which is common.",
    thu: "Maintained steady pace, improved form yesterday.",
    fri: "Great finish to the week, hit all major goals!",
    sat: null,
    sun: null
}
