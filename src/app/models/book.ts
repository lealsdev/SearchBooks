import { Author } from './author';

export class Book {
    id: String;
    title: String;
    subtitle: String;
    publishedDate: String;
    thumbnail: String;
    authors: Author[];
    canonicalVolumeLink: String;
    pdfDownloadLink: String;
    epubDownloadLink: String;
}