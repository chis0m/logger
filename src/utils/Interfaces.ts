export interface IResponse {
    status: boolean;
    message: string;
    data: any;
}


export interface IMessage {
    [name: number]: string
}