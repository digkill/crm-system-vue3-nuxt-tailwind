import {EnumStatus} from '~/types/deals.types'
import type {ColumnInterface} from '~/components/kanban/kanban.types'

export const KANBAN_DATA: ColumnInterface[] = [
    {
        id: EnumStatus.backlog,
        name: 'Backlog',
        items: [],
    },
    {
        id: EnumStatus.todo,
        name: 'ToDo',
        items: [],
    },
    {
        id: EnumStatus['in-progress'],
        name: 'In progress',
        items: [],
    },
    {
        id: EnumStatus.test,
        name: 'Test',
        items: [],
    },
    {
        id: EnumStatus.done,
        name: 'Done',
        items: [],
    }
]