export default {
    name: 'sponsors',
    type: 'object',
    title: 'Sponsors',
    fields: [
        {
            name: 'title',
            title: 'Sponsor header',
            type: 'string',
            description: 'The header over sponsor logos',
        },
        {
            title: 'Sponsor list',
            name: 'sponsorlist',
            type: 'array',
            of: [{ type: 'company' }],
        },
    ],
}
