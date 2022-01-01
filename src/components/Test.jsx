import Masonry from 'react-masonry-css'
import masonry from '../assets/css/masonry.css'

import image_1  from '../assets/dessin/selection/cropped/image_1.jpg'
import image_2  from '../assets/dessin/selection/cropped/image_2.jpg'
import image_3  from '../assets/dessin/selection/cropped/image_3.jpg'
import image_4  from '../assets/dessin/selection/cropped/image_4.jpg'
import image_5  from '../assets/dessin/selection/cropped/image_5.jpg'
import image_6  from '../assets/dessin/selection/cropped/image_6.jpg'
import image_7  from '../assets/dessin/selection/cropped/image_7.jpg'
import image_8  from '../assets/dessin/selection/cropped/image_8.jpg'
import image_9  from '../assets/dessin/selection/cropped/image_9.jpg'
import image_10  from '../assets/dessin/selection/cropped/image_10.jpg'
import image_11  from '../assets/dessin/selection/cropped/image_11.jpg'
import image_12 from '../assets/dessin/selection/cropped/image_12.jpg'
import image_13  from '../assets/dessin/selection/cropped/image_13.jpg'
import image_14  from '../assets/dessin/selection/cropped/image_14.jpg'
import image_15  from '../assets/dessin/selection/cropped/image_15.jpg'
import image_16  from '../assets/dessin/selection/cropped/image_16.jpg'
import image_17  from '../assets/dessin/selection/cropped/image_17.jpg'
import image_18  from '../assets/dessin/selection/cropped/image_18.jpg'
import image_19  from '../assets/dessin/selection/cropped/image_19.jpg'
import image_20  from '../assets/dessin/selection/cropped/image_20.jpg'	
import image_21  from '../assets/dessin/selection/cropped/image_21.jpg'	
import image_22  from '../assets/dessin/selection/cropped/image_22.jpg'	
import image_23  from '../assets/dessin/selection/cropped/image_23.jpg'	
import image_24  from '../assets/dessin/selection/cropped/image_24.jpg'	
import image_25  from '../assets/dessin/selection/cropped/image_25.jpg'	
import image_26  from '../assets/dessin/selection/cropped/image_26.jpg'	
import image_27  from '../assets/dessin/selection/cropped/image_27.jpg'	
import image_28  from '../assets/dessin/selection/cropped/image_28.jpg'	
import image_29  from '../assets/dessin/selection/cropped/image_29.jpg'	
import image_30  from '../assets/dessin/selection/cropped/image_30.jpg'	
import image_31  from '../assets/dessin/selection/cropped/image_31.jpg'	
import image_32  from '../assets/dessin/selection/cropped/image_32.jpg'	
import image_33  from '../assets/dessin/selection/cropped/image_33.jpg'	
import image_34  from '../assets/dessin/selection/cropped/image_34.jpg'	
import image_35  from '../assets/dessin/selection/cropped/image_35.jpg'	
const Test = () => {


	const breakpointColumnsObj = {
		default: 4,
		1100: 4,
		700: 3,
		500: 2
	};

	
	
	// function importAll(r) {
	// 	let images = {};
	// 	r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	// 	return images
	// }

	// const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));


	// <img src={images['IMG-20211228-WA0042.jpg']}></img>
	// {/* <img src={images[`${combo}.png`].default} alt={combo} height={150} width={150}/> */}

	return (
		<Masonry
		breakpointCols={breakpointColumnsObj}
		className="my-masonry-grid"
		columnClassName="my-masonry-grid_column">
				<img src={image_1} width={'100%'}></img>
				<img src={image_2} width={'100%'}></img>
				<img src={image_3} width={'100%'}></img>
				<img src={image_4} width={'100%'}></img>
				<img src={image_5} width={'100%'}></img>
				<img src={image_6} width={'100%'}></img>
				<img src={image_7} width={'100%'}></img>
				<img src={image_8} width={'100%'}></img>
				<img src={image_9} width={'100%'}></img>
				<img src={image_10} width={'100%'}></img>
				<img src={image_11} width={'100%'}></img>
				<img src={image_12} width={'100%'}></img>
				<img src={image_13} width={'100%'}></img>
				<img src={image_14} width={'100%'}></img>
				<img src={image_15} width={'100%'}></img>
				<img src={image_16} width={'100%'}></img>
				<img src={image_17} width={'100%'}></img>
				<img src={image_18} width={'100%'}></img>
				<img src={image_19} width={'100%'}></img>
				<img src={image_20} width={'100%'}></img>
				<img src={image_21} width={'100%'}></img>
				<img src={image_22} width={'100%'}></img>
				<img src={image_23} width={'100%'}></img>
				<img src={image_24} width={'100%'}></img>
				<img src={image_25} width={'100%'}></img>
				<img src={image_26} width={'100%'}></img>
				<img src={image_27} width={'100%'}></img>
				<img src={image_28} width={'100%'}></img>
				<img src={image_29} width={'100%'}></img>
				<img src={image_30} width={'100%'}></img>
				<img src={image_31} width={'100%'}></img>
				<img src={image_32} width={'100%'}></img>
				<img src={image_33} width={'100%'}></img>
				<img src={image_34} width={'100%'}></img>
				<img src={image_35} width={'100%'}></img>
		</Masonry>
	)
	

}

export default Test;