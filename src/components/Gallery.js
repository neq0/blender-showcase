import React from 'react';
import "./Gallery.css";

const imgUrls = [
	"https://i.postimg.cc/SKbBs5DS/my-first-render-ever.png",
	"https://i.postimg.cc/TwYSKNHB/glass-render-wit-cycles.png",
	"https://i.postimg.cc/6QTBPMKg/donut-texture-paint-cycles.png",
	"https://i.postimg.cc/3NzGykBJ/cycles.png",
];

const imgNames = [
	"My first render ever",
	"Glass Suzanne",
	"Donut via Blender Guru",
	"Broken ceramics",
];

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgsLoaded: false,
		};
	}

	componentDidMount() {
		const previewTitle = document.querySelector(".gallery-title");
		const galleryPreview = document.querySelector(".gallery-preview");
		const galleryThumbnails = document.querySelector(".gallery-thumbnails");

		const previewImg = document.createElement("img");

		previewTitle.textContent = imgNames[0];
		previewImg.setAttribute("src", imgUrls[0]);

		imgUrls.forEach((url, index) => {
			// console.log(index);
			const img = document.createElement("img");
			img.setAttribute("src", url);
			img.setAttribute("imgId", index);
			img.onclick = (evt) => {
				// console.log(evt.target.getAttribute("src"));	
				galleryPreview.firstChild.src = evt.target.getAttribute("src");
				previewTitle.textContent = imgNames[evt.target.getAttribute("imgId")];
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
				<div className="gallery-title-area">
					<h1 className="gallery-title"></h1>
				</div>
				<div className="gallery-preview flex">
				</div>
				<div className="gallery-thumbnails flex">
				</div>
			</div>
		);
	}
}

export default Gallery;
