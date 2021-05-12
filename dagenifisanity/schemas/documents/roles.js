import React from 'react'
export default {
    title: 'Roles',
    name: 'roles',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'portrait',
            type: 'image',
            title: 'Portrait',
            options: {
                hotspot: true, // <-- Defaults to false
            },
        },
        {
            title: 'Role',
            name: 'role',
            type: 'string',
            options: {
                list: [
                    { title: 'Leder', value: 'Leder' },
                    { title: 'Nestleder', value: 'Nestleder' },
                    { title: 'Bedriftsansvarlig', value: 'Bedriftsansvarlig' },
                    { title: 'Økonomiansvarlig', value: 'Økonomiansvarlig' },
                    { title: 'Teknisk ansvarlig', value: 'Teknisk ansvarlig' },
                    {
                        title: 'Promoteringsansvarlig',
                        value: 'Promoteringsansvarlig',
                    },
                    { title: 'Faglig ansvarlig', value: 'Faglig ansvarlig' },
                    {
                        title: 'Funksjonæransvarlig',
                        value: 'Funksjonæransvarlig',
                    },
                    {
                        title: 'Underholdningsansvarlig',
                        value: 'Underholdningsansvarlig',
                    },
                    { title: 'Sosialansvarlig', value: 'Sosialansvarlig' },
                ],
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            imageUrl: 'portrait.asset.url',
            role: 'role',
        },
        prepare(selection) {
            const { title, imageUrl, role } = selection
            return {
                title: title,
                subtitle: role,
                media: <img src={imageUrl} alt={`portrait`} />,
            }
        },
    },
}
