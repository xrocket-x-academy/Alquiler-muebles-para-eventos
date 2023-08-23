class ApiResponse {
    constructor(statusCode = 404, success = false, data = null) {
        this.statusCode = statusCode;
        this.success = success;
        this.data = data;
    }

    send(res) {
        const response = {
            statusCode: this.statusCode,
            success: this.success,
            data: this.data,
        };
        res.status(this.statusCode).json(response).end();
    }

    static success(res, statusCode, data) {
        const response = new ApiResponse(statusCode, true, data);
        response.send(res);
    }

    static error(res, statusCode, data) {
        const response = new ApiResponse(statusCode, false, data);
        response.send(res);
    }
}

module.exports = { ApiResponse };
