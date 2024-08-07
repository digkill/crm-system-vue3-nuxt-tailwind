export interface BaseFieldInterface {
    $createdAt: string,
    $id: string
}

export interface CustomerInterface extends BaseFieldInterface {
    name: string
    email: string
    avatar?: string,
    source?: string
}

export interface CommentInterface extends BaseFieldInterface {
    text: string
}

export enum EnumStatus {
    'backlog' = 'backlog',
    'todo' = 'todo',
    'in-progress' = 'in-progress',
    'test' = 'test',
    'done' = 'done',
}

export interface DealInterface extends BaseFieldInterface {
    comments: CommentInterface[]
    customers: CustomerInterface
    name: string
    price: number
    status: EnumStatus
}