export default {
    title: 'Footer',
    name: 'footer',
    type: 'document',
    fields: [
        {
            name: 'logo',
            type: 'image',
            title: 'Footer Logo',
        },
        {
            title: 'Footer text',
            name: 'footertext',
            type: 'string',
        },
        {
            title: 'Instagram URL',
            name: 'instaurl',
            type: 'string',
        },
        {
            title: 'Facebook URL',
            name: 'faceurl',
            type: 'string',
        },
        {
            title: 'LinkedIn URL',
            name: 'linkedinurl',
            type: 'string',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Header',
            }
        },
    },
}
