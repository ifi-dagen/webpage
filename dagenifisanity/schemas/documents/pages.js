export default {
    title: 'Pages',
    name: 'pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Page title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Page slug',
            description: 'The routing name for the page /example',
        },
        {
            title: 'Page sections',
            name: 'pagesections',
            type: 'array',
            of: [{ type: 'sponsors' }],
        },
    ],
}
