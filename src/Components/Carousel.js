import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
	{
		src: 'http://www.visudhajivam.in/img/slide.webp',
		key: '1'
	},
	{
		src: 'http://www.visudhajivam.in/img/slide2.jpg',
		key: '2'
	},
	{
		src: 'http://www.visudhajivam.in/img/slide3.webp',
		key: '3'
	},
	{
		src: 'http://www.visudhajivam.in/img/slide4.JPG',
		key: '4'
	},
	{
		src: 'http://www.visudhajivam.in/img/slide5.jpg',
		key: '5'
	},
	{
		src: 'http://www.visudhajivam.in/img/slide6.jpeg',
		// altText: 'Slide 3',
		// caption: 'Slide 3',
		// header: 'Slide 3 Header',
		key: '6'
	}
];

const Example = () => <UncontrolledCarousel className="Caresol" items={items} />;

export default Example;
