import {Carousel} from 'react-responsive-carousel';

export default function TourImg({ photos }) {

    {
        return (
            <>
                <Carousel autoPlay showStatus={false} useKeyboardArrows={true}>
                    {photos.map((x, index) => (
                        <div key={index}>
                            <img src={'https://api.yabooker.com' + x.photo} className="rounded-lg" alt={index} loading="lazy" style={{width: 1000}}/>
                            {/*<img src={'https://api.yabooker.com' + x.photo} className="rounded-lg" style={{width: 850}}/>*/}
                        </div>
                    ))}
                </Carousel>
            </>
        )
    }
}