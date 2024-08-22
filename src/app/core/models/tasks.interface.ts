export interface Task {
    id: number,
    name: string,
    description: string,
    status: string,
    deadline: Date,
    priority: string,
}

export interface ListTask {
    id: number,
    name: string,
    description: string,
    status: string,
    deadline: Date,
    priority: string,
    tasks: Task[]
}

export interface Board {
    id: number,
    name: string,
    description: string,
    status: string,
    deadline: Date,
    listTask: ListTask[]
}