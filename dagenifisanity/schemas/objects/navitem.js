export default {
    title: 'Navigation Item',
    name: 'navitem',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description:
                'The slug of the navigation. For example Om Oss should be om-oss',
        },
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
        },
        prepare({ title = 'No title', slug = {} }) {
            const path = `/${slug.current}`
            return {
                title: title,
                subtitle: path,
            }
        },
    },
}
