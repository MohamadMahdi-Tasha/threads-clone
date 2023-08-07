// Importing part
import ImageOfJavadTasha from '@/public/img/img-javadtasha.jpg';
import ImageOfMahdiTasha from '@/public/img/img-mahditasha.jpg';

// Defining users
const users = [
    {
        id: 'javadtasha',
        title: 'محمد جواد تاشا',
        img: ImageOfJavadTasha,
        content: 'تریدر درجه یک به همراه ۳ سال سایقه و همچنین برادر بزرگتر مهدی تاشا',
        link: '',
        followersCount: 3000,
        threads: [
            {
                id: 'javadtasha',
                title: 'محمد جواد تاشا',
                img: ImageOfJavadTasha,
                content: 'Düşmanlarınız hayranınız oluncaya kadar güçlü kalın',
                likesCount: 1531,
                replies: [],
                date: '2023-08-07'
            },
            {
                id: 'javadtasha',
                title: 'محمد جواد تاشا',
                img: ImageOfJavadTasha,
                content: 'قوی بمون تا دشمنات بشن طرفدارت',
                likesCount: 28,
                replies: [
                    {
                        id: 'mahditasha_',
                        title: 'مهدی تاشا',
                        img: ImageOfMahdiTasha,
                        content: 'ماشالا باوا',
                        likesCount: 10,
                    }
                ],
                date: '2023-04-01'
            },
            {
                id: 'javadtasha',
                title: 'محمد جواد تاشا',
                img: ImageOfJavadTasha,
                content: 'بهت میگم میدونی قشنگ‌‌ترین عکسی که ازت دیدم، کدومه؟میگی کدومه؟ نشونم بده!بعد لابد منتظری یکی از اون پرتره‌های جذابت که عکاس ازت گرفته رو برات بفرستم!ولی من اولین سلفی‌ِ تار و تاریکی که باهم گرفتیم و میفرستم برات و میگم این قشنگ‌ترین عکسته!ببین لبخندتو!بهم میگی عه من تاحالا تو این عکس فقط حواسم به تو بود!ندیده بودم خودمو!حالا تو خودت اصن دقت کردی لبخندت تو همین سلفیه قشنگ‌ترین لبخندِ زندگیته؟منم جوابتو این شکلی میدم:همونجور که یه سلفی تار دونفره می‌ارزه به صدتا عکس تکی هنری قشنگ، کنار تو بودن حتا تو شرایط بد، می‌ارزه به همه‌چیو داشتن ولی بدونِ تو بودن!من خیلی وقته از زندگیم هیچی نمیخوام!جز تویی که همه چیز منی!',
                likesCount: 84234,
                replies: [],
                date: '2023-07-18'
            }
        ]
    },
    {
        id: 'mahditasha_',
        title: 'محمد مهدی تاشا',
        img: ImageOfJavadTasha,
        content: 'برنامه نویس بازیگوش :))',
        link: 'https://www.github.com/mohamadmahdi-tasha',
        followersCount: 1345,
        threads: [
            {
                id: 'mahditasha_',
                title: 'محمد مهدی تاشا',
                img: ImageOfJavadTasha,
                content: 'نولدم موبارک 🎂',
                likesCount: 221,
                replies: [
                    {
                        id: 'javadtasha',
                        title: 'محمد جواد تاشا',
                        img: ImageOfJavadTasha,
                        content: 'تولدت مبارک گل پسر ایشالا بالا بالا ها ببینمت 💗🎂🎂',
                        likesCount: 29,
                    }
                ],
                date: '2023-09-18'
            },
        ]
    }
]

export default users;