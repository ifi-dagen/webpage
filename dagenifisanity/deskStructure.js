import S from '@sanity/desk-tool/structure-builder'
import {
    MdDateRange,
    MdAccessTime,
    MdPeople,
    MdArrowUpward,
    MdArrowDownward,
    MdPerson,
    MdFindInPage,
} from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Settings')
                .icon(IoSettingsOutline)
                .child(
                    S.list()
                        .title('Website Settings')
                        .items([
                            S.listItem()
                                .title('Header')
                                .icon(MdArrowUpward)
                                .child(
                                    S.editor()
                                        .title('Header')
                                        .schemaType('header')
                                        .documentId('header')
                                ),
                            S.listItem()
                                .title('Footer')
                                .icon(MdArrowDownward)
                                .child(
                                    S.editor()
                                        .title('Footer')
                                        .schemaType('footer')
                                        .documentId('footer')
                                ),
                        ])
                ),

            S.divider(),
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
                        .title('Event Types')
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
            S.listItem()
                .title('People')
                .icon(MdPerson)
                .schemaType('roles')
                .child(S.documentTypeList('roles').title('Person Information')),
            S.listItem()
                .title('Pages')
                .icon(MdFindInPage)
                .schemaType('pages')
                .child(S.documentTypeList('pages').title('Page')),
        ])
