export default {
    title: 'Schedule',
    name: 'schedule',
    type: 'document',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
        {
            title: 'Event Schedule',
            name: 'eventSchedule',
            type: 'array',
            of: [{ type: 'event' }],
        },
    ],
}
