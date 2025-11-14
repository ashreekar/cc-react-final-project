import { conf } from '../conf/conf.js';

//provided by appwrite
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client()
    databases
    bucket

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDbId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return this.databases.updateDocument(
                conf.appwriteDbId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDbId,
                conf.appwritecollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDbId,
                conf.appwritecollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }
    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDbId,
                conf.appwritecollectionId,
                queries,
            )
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(id){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                id
            )
        } catch (error) {
            throw error;
        }
    }

    async filePreview(id){
        try {
           return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            id
           ) 
        } catch (error) {
            throw error;
        }
    }
}

const service = new Service();

export { service };