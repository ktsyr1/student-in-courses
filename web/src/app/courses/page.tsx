import axios from 'axios';
import Spinner from '../../components/Element/Spinner';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'دلني  | الدورات',
    description: 'حقق أهدافك التعليمية مع الدورات المصممة لك',
    applicationName: 'دلني',
    manifest: '/manifest.json',
    themeColor: 'white',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
        },
    ],
    openGraph: {
        title: 'دلني | الدورات',
        description: 'حقق أهدافك التعليمية مع الدورات المصممة لك',
        type: 'website',
        siteName: 'دلني',
    },
}

export default async function Coursecard() {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/student/courses`)

    if (!data) return <Spinner />
    return (
        <div className="max-w-[1000px] w-full mx-auto p-4 text-zinc-800">
            <div className='flex flex-col lg:justify-between justify-center w-full'>
                <h2 className="text-center text-2xl font-bold mb-4 w-full flex flex-wrap">الدورات الحديثة</h2>
                <div className='flex flex-wrap lg:justify-between justify-center w-full'>
                    {data?.map((course: any, index: any) => <Card key={index} {...course} />)}
                </div>
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full mt-4  max-w-[500px]  m-auto">
                    نهاية النتائج
                </div>
                {/* <button className="inline-flex items-center bg-slate-100 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full mt-4  max-w-[500px]  m-auto">
                    مشاهدة كل الدورات المتاحة
                </button> */}
            </div>
        </div>
    );
};



function Card({ title, location, image, _id }: any) {
    return (
        <Link href={`/courses/${_id}`} className="bg-card flex items-center m-4 rounded-lg space-x-4 text-card-foreground min-w-[300px] max-w-[500px]  lg:w-[45%] w-full ">
            {image.length > 1
                ? <img loading='lazy' src={image} alt={title} className="w-32 h-32 object-cover rounded-md bg-gray-200" style={{ aspectRatio: "80 / 80", objectFit: "cover" }} />
                : <div className='w-32 h-32 min-w-[128px] bg-gray-200 rounded-md flex justify-center items-center text-gray-300 font-bold'>لا يوجد صورة</div>}

            <div className='p-4'>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-md my-2 text-muted-foreground">{location}</p>
                {/* <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {type}
                </div> */}
            </div>
        </Link>
    );
} 