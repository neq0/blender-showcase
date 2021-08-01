import React from 'react';
import "./Gallery.css";

const imgUrls = [
	"https://i.postimg.cc/SKbBs5DS/my-first-render-ever.png",
	"https://i.postimg.cc/TwYSKNHB/glass-render-wit-cycles.png",
];

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgsLoaded: false,
		};
	}

	componentDidMount() {
		const galleryPreview = document.querySelector(".gallery-preview");
		const galleryThumbnails = document.querySelector(".gallery-thumbnails");

		const previewImg = document.createElement("img");
		imgUrls.forEach((url, index) => {
			console.log(index);
			if(index === 0)
				previewImg.setAttribute("src", url)
			const img = document.createElement("img");
			img.setAttribute("src", url);
			img.onclick = (evt) => {
				// console.log(evt.target.getAttribute("src"));	
				galleryPreview.firstChild.src = evt.target.getAttribute("src");
			}
			galleryThumbnails.appendChild(img);
		})

		galleryPreview.appendChild(previewImg);
		// setTimeout(() => {
		// 	imgs.forEach(img => {
		// 		fetch(img)
		// 		.then(respone => respone.blob())
		// 		.then(blob => {
		// 			const objectURL = URL.createObjectURL(blob);
		// 			document.querySelector("#img1").src = objectURL;
		// 		})
		// 	});
		// }, 2000);
		
		// this.setState({
		// 	imgsLoaded: true,
		// });
	}

	render() {
		return (
			<div className="gallery">
				<div className="gallery-preview">
				</div>
				<div className="gallery-thumbnails flex">
				</div>
			</div>
		);
	}
}

export default Gallery;
