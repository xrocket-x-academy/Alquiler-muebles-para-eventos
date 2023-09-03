export class ApiResponse<T> {
    public data: T;
    public success: boolean;
    public statusCode: number;
}
