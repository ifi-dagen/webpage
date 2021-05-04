import React from 'react'
import { format, parseISO } from 'date-fns'

export default {
    title: 'Event',
    name: 'event',
    type: 'object',
    fields: [
        {
            title: 'Event Start',
            name: 'eventTimeStart',
            type: 'datetime',
            options: {
                dateFormat: '',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today',
            },
        },
        {
            title: 'Event Finished',
            name: 'eventTimeFinish',
            type: 'datetime',
            options: {
                dateFormat: '',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today',
            },
        },
        {
            name: 'eventReference',
            type: 'reference',
            title: 'Event Reference',
            to: [{ type: 'stand' }],
        },
    ],

    preview: {
        select: {
            title: 'eventReference.standtitle',
            eventTimeStart: 'eventTimeStart',
        },
        prepare({ title = 'No title', eventTimeStart }) {
            const dateSegment = format(parseISO(eventTimeStart), 'HH:mm')
            return {
                title,
                subtitle: eventTimeStart
                    ? dateSegment
                    : 'Missing publishing date',
            }
        },
    },
}
