export interface IInfoUser {
    id: number,
    name: string,
    email: string,
    function: string,
    nickname?: string | null,
    birthDate?: Date | null,
    christianDenom?: string | null,
    createdAt: Date,
    gender?: string | null,
    maritalStatus?: string | null,
    contry?:  string | null
}