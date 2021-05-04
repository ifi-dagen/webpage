import React from 'react'
export default {
    title: 'Stand',
    name: 'stand',
    type: 'document',
    fields: [
        {
            title: 'Stand title',
            name: 'standtitle',
            type: 'string',
        },
        {
            name: 'company',
            type: 'reference',
            to: [{ type: 'company' }],
        },
        {
            title: 'Stand Information',
            name: 'standinformation',
            type: 'array',
            description: 'Informative rich text / images about the stand',
            of: [{ type: 'block' }, { type: 'image' }],
        },
    ],
    preview: {
        select: {
            title: 'standtitle',
            imageUrl: 'company.logo.asset.url',
        },
        prepare(selection) {
            const { title, imageUrl } = selection
            return {
                title: title,
                media: <img src={imageUrl} alt={`${title}`} />,
            }
        },
    },
}
