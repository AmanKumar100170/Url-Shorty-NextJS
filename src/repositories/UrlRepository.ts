import Url, { IUrl } from "@/models/Url";
import connectDB from "@/config/db";

export default class UrlRepository {
    private urlModel;

    constructor() {
        connectDB();
        this.urlModel = Url;
    }

    async getUrlById (id: string) : Promise<IUrl | null> {
        return await this.urlModel.findById(id).lean();
    }

    // Get original url from short url
    async getUrlByShortUrl (shortUrl: string) : Promise<IUrl | null> {
        return await this.urlModel.findOne({ shortUrl }).lean();
    }

    // Get short url from original url
    async getUrlByOriginalUrl (originalUrl: string) : Promise<IUrl | null> {
        return await this.urlModel.findOne({ originalUrl }).lean();
    }

    async getAllUrls() : Promise<IUrl[]> {
        return await this.urlModel.find().lean();
    }

    async deleteUrl (id: string) : Promise<IUrl | null> {
        return await this.urlModel.findByIdAndDelete(id).lean();
    }

    async createUrl (originalUrl: string, shortUrl: string) : Promise<IUrl> {
        return await this.urlModel.create({ originalUrl, shortUrl });
    }

}