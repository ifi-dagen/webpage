export default {
    title: 'Header',
    name: 'header',
    type: 'document',
    fields: [
        {
            name: 'logo',
            type: 'image',
            title: 'Header Logo',
        },
        {
            title: 'Navigation Items',
            name: 'navigationitems',
            type: 'array',
            of: [{ type: 'navitem' }],
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
