import { Carousel } from 'react-responsive-carousel';
import Card from "../core/Card";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Recommend({ recommend }) {
    if (recommend.length === 0) {
        return (<></>)
    }

    const matches0 = useMediaQuery('(min-width:0px)');
    const matches640 = useMediaQuery('(min-width:640px)');
    const matches1024 = useMediaQuery('(min-width:1024px)');
    
    function getMaxSlideCount() {
        if (matches1024) {
            return 3
        }
        if (matches640) {
            return 2
        }
        if (matches0) {
            return 1
        }
    }

    const CarouselContent = (n) => {
        let content = [];
        for (let i = 0; i < recommend.length; i=i+n) {
            content.push(<div key={i} className='box-grid-3 p-8'>
                    {CarouselContentCards(i, n)}
                </div>);
        }
        return content
        
    };

    const CarouselContentCards = (i, n) => {
        let content = [];
        console.log(i, n)
        for (let j = i; j < i+n && j < recommend.length; j++) {   
            content.push(<div className=''>
                        <Card key={j}
                        url={recommend[j].url}
                        title={recommend[j].title}
                        price={recommend[j].price_rub}
                        places_quantity_left={recommend[j].places_quantity_left}
                        img={recommend[j].img}
                        start_point={recommend[j].start_point}
                        start_date={recommend[j].start_date}
                        finish_date={recommend[j].finish_date}
                        start_country={recommend[j].start_country}
                        visa={recommend[j].visa}
                        sale={recommend[j].sale}
                    /></div> )
        }
        return content
        
    };

    {
        return (
            <>  
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 mb-8">
                    <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">Возможно вас заинтересует</h2>
                    <span className="mt-2 mb-12 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                    <Carousel autoPlay showStatus={false} useKeyboardArrows={true} showThumbs={false} >
                        {CarouselContent(getMaxSlideCount())}
                    </Carousel>
                </div>
            </>
        )
    }
}