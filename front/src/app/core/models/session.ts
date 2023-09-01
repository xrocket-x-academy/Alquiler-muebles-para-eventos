export class Session {
    token: string | undefined;

    /**
     *
     */
    constructor(token?: string) {
        this.token = token;
    }
}
