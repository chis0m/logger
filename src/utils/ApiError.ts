export class ApiError extends Error {
    public statusCode: number;
    public  message: any;
    public static statusCode: number;
    public static message: any;

    constructor(statusCode: number, message: any) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.setState(this.statusCode, this.message);
    }

    private setState(statusCode: number, message: any) {
        ApiError.statusCode = statusCode;
        ApiError.message = message;
    }
}