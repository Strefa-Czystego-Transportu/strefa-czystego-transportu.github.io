import cheerio from 'cheerio';
import { NewsData } from '../components/news/newsData';
import { useEffect, useState } from 'react';
import NewsItem from '../components/news/newsItem';
import NewsSkeleton from '../components/news/newsSkeleton';
import CheckZTP from '../components/checkZTP';

async function fetchArticle(): Promise<NewsData[]> {
    const response = await fetch('https://corsproxy.io/?https://ztp.krakow.pl/wszystkie-aktualnosci/sct');

    const html = await response.text();

    const $ = cheerio.load(html);

    const articleWrappers = $('.news-item');

    return articleWrappers.toArray().map(element => {
        const articleWrapper = $(element);

        const title = articleWrapper.find('.news-title').text().trim();
        const imageUrl = articleWrapper.find('img').first().attr('src');
        const date = articleWrapper.find('.news-item-date').text().trim().slice(13, 23)
        const desc = articleWrapper.find('p').first().text()
        const href = articleWrapper.find('a').first().attr('href');

        return { title, imageUrl, date, desc, href };
    });
}

export default function News() {

    const [data, setData] = useState<(NewsData | undefined)[]>(Array(6).fill(undefined))

    useEffect(() => {
        fetchArticle()
            .then(articleDataArray => setData(articleDataArray))
    }, [])

    return (
        <>
            <div className='flex flex-col items-center w-4/5 xl:w-2/3'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        data.slice(0, 6).map(
                            (item, id) => item ? <NewsItem key={id} data={item} /> : <NewsSkeleton />
                        )
                    }
                </div>
                <CheckZTP />
            </div>

        </>
    )
}
