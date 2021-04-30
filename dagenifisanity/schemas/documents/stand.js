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
