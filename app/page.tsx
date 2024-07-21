import Weather from "@/components/Weather";
import { GetNews, GetWeather } from "./action";


export default async function Home() {
  const {news} = await GetNews();
  return (
    <main className="flex min-h-screen flex-col items-start p-8">
      <h1 className='text-2xl font-bold mb-6'>Top 3 News</h1>
      {news.map((n: {title: string; description: string; author: string;}, index: number) => (<ul className="mb-5" key={index}>
            <li className="text-xl font-semibold"><span className="text-gray-500 mr-1">{index+1}. </span> {n.title}</li>
            <li>{n.description}</li>
            <li><span className="text-gray-500 mr-1">by </span> {n.author}</li>
            </ul>))}
      <Weather/>
    </main>
  );
}
