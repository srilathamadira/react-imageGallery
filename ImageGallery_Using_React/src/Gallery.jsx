import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/m1.jpg", alt: "1" },
    { src: "/m2.jpg", alt: "2" },
    { src: "/m3.jpg", alt: "3" },
    { src: "/m4.jpg", alt: "4", },
    { src: "/m5.jpg", alt: "5", },
    { src: "/m6.jpg", alt: "Our CSE- NCC students participated in the Combined Annual Training Camp (CATC-1), conducted by the 25(A) Battalion at Acharya Nagarjuna University (ANU). They won medals in various categories:K. Guna Sekhara Varma ( 221FA04379) - Firing, Drill, Dance ,B. Harshith ( 221FA04424) - Best Photography ,D. Praneeth (221FA04297) - Food Incharge ,G. Siva Rama Krishna (221FA04153) - Quartermaster", },
   
    { src: "/m7.jpg", alt: "91 CSE Students are selected in Infosys", },
    { src: "/m8.jpg", alt: "Our II Year CSE student T. Gangadhar Rao, found someone’s gold ring at the H Block and submitted it to the DEO. Today, DEO returned the ring to its rightful owner. HoD, CSE appreciated his commendable honesty.", },
    { src: "/m9.jpg", alt: "E Mrunal 231FA04198 II CSE, sec-C Got 1st prize in State-level Yogasana Championship", },
   
   
   
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App" style={{padding:'0 60px'}}>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}
