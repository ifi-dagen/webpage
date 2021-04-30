import React from 'react'

export default {
    title: 'Company',
    name: 'company',
    type: 'document',
    fields: [
        {
            title: 'Company Name',
            name: 'companyname',
            type: 'string',
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'companyname',
            imageUrl: 'logo.asset.url',
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
