import { UrlShortenerService } from "@/services/UrlShortenerService";
import { revalidatePath } from "next/cache";

export const shortenUrl = async (formData: FormData) => {
    'use server'

    const originalUrl: string = formData.get('originalUrl') as string;
    console.log('Original URL Passed is: ', originalUrl);

    const shortenerService = new UrlShortenerService();
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
    revalidatePath('/urls');
}