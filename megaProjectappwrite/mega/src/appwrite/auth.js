import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const response = await this.account.create(ID.unique(), email, password, name);
            return response;
        } catch (error) {
            throw new Error(`Failed to create account: ${error.message}`);
        }
    }

    async login({ email, password }) {
        try {
            const response = await this.account.createEmailSession(email, password);
            return response;
        } catch (error) {
            throw new Error(`Failed to login: ${error.message}`);
        }
    }

    async currentUser() {
        try {
            const response = await this.account.get();
            return response;
        } catch (error) {
            throw new Error(`Failed to get current user: ${error.message}`);
        }
    }

    async logout() {
        try {
            const response = await this.account.deleteSessions('current');
            return response;
        } catch (error) {
            throw new Error(`Failed to logout: ${error.message}`);
        }
    }
}

const authService = new AuthService();
export default authService;
