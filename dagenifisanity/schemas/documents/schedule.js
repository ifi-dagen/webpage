export default {
    title: 'Schedule',
    name: 'schedule',
    type: 'document',
    fields: [
        {
            name: 'day',
            type: 'string',
            title: 'Schedule name',
            description: 'Day/Grouping/Whatever',
        },
        {
            title: 'Event Schedule',
            name: 'eventSchedule',
            type: 'array',
            of: [{ type: 'event' }],
        },
    ],
    preview: {
        select: {
            title: 'day',
        },
        prepare(selection) {
            const { title } = selection
            return {
                title: title,
            }
        },
    },
}
