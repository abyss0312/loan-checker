

export class GenericResponse<T> {

    Code: number;

    ValidateResult: boolean;

    Message: string;

    Data: T
}