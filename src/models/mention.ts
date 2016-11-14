export class Mention {
    id: number;
    bookmarked: boolean;
    created_at: Date;
    excerpt: string;
    high_score: any;
    on_front_page: boolean;
    excerpts: Excerpt[];
    og_image: string;
    score: any;
    timestamp: Date;
    title: string;
    type: string;
    url: string;
    word_count: number;
    author: Author;
    publisher: Publisher;
    channel:Channel;
}

class Author {
    id: number;
    name: string;
}

class Excerpt {
    keyword: string;
    text: string;
}

class Publisher {
    id: number;
    name: string;
    group: string;
}

class Channel {
    id: number;
    group:string;
    location:string;
    name:string;
}