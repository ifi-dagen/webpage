import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '2obj0nxg', // find this at manage.sanity.io or in your sanity.json
    dataset: 'production', // this is from the questions during 'sanity init'
    apiVersion: '2021-03-25',
    useCdn: true,
})
