import S from '@sanity/desk-tool/structure-builder'
import { MdPeople } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Companies')
                .icon(BsBuilding)
                .schemaType('company')
                .child(S.documentTypeList('company').title('Company')),
            S.listItem()
                .title('Stands')
                .icon(MdPeople)
                .schemaType('stand')
                .child(S.documentTypeList('stand').title('Stand')),
        ])
