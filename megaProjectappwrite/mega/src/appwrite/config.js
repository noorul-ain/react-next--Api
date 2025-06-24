import conf from '../conf/conf.js';
import { Client,ID , Databases , Storage , Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    async createPost ({title , slug ,content , featuredImage , status , userId}) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to create post: ${error.message}`);
        }
    }
    async getPosts(queries = [ Query.equal('status', 'equal') ]) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            return response.documents;
        } catch (error) {
            throw new Error(`Failed to get posts: ${error.message}`);
        }
    }
    async getPost(slug){
        try {
            const response = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to get post: ${error.message}`);
        }
    }
    async getPostBySlug(slug) {
        try {
            const response = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to get post by slug: ${error.message}`);
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            const response = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to update post: ${error.message}`);
        }
    }
    async deletePost(slug) {
        try {
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            throw new Error(`Failed to delete post: ${error.message}`);
            return false; 
        }
    }
    // file upload service 
    async uploadFile(file) {
        try {
            const response = await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to upload file: ${error.message}`);
        }
    }
    async getFilePreview(fileId) {
        try {
            const response = await this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to get file: ${error.message}`);
        }
    }
    async deleteFile(fileId) {
        try {
            const response = await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            throw new Error(`Failed to delete file: ${error.message}`);
            return false; 
        }
    }

}

const service = new Service();
export default service;