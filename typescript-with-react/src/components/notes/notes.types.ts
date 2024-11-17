export enum Priority {
    Medium="Medium",
    High="High",
    Low="Low",
}

export interface Notesprops {
    id?: number;
    text: string;
    priority: keyof typeof Priority;
}
