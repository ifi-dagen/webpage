// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document schemas
import company from './documents/company'
import stand from './documents/stand'
import schedule from './documents/schedule'
import header from './documents/header'
import footer from './documents/footer'
import roles from './documents/roles'
import pages from './documents/pages'

// Object Types
import event from './objects/event'
import navItem from './objects/navitem'
import sponsors from './objects/sponsors'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'dagenSchema',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        company,
        stand,
        schedule,
        event,
        header,
        navItem,
        footer,
        roles,
        pages,
        sponsors,
    ]),
})
