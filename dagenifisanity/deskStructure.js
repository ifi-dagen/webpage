import S from '@sanity/desk-tool/structure-builder'
import { MdDateRange, MdAccessTime, MdPeople } from 'react-icons/md'
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
                .title('Events')
                .icon(MdDateRange)
                .child(
                    S.list()
                        .title('Events')
                        .items([
                            S.listItem()
                                .title('Stand')
                                .icon(MdPeople)
                                .schemaType('stand')
                                .child(
                                    S.documentTypeList('stand').title('Stand')
                                ),
                            /* events: talk, competition, information */
                        ])
                ),

            S.listItem()
                .title('Schedule')
                .icon(MdAccessTime)
                .schemaType('schedule')
                .child(S.documentTypeList('schedule').title('Schedule')),
        ])
