
export namespace Button {
    export interface Buttonprops {
        id: number,
        text: string,
        type: ButtonType,
        href?: string
    }

    export enum ButtonType {
        Default,
        Error,
        Success
    }
}