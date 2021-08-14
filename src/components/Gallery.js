import React from 'react';
import "./Gallery.css";

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	updatePreview(imgIndex) {
		if(this.state.previewIndex == imgIndex)
			return;
		this.setState({ previewIndex: imgIndex, });
		const previewImg = document.querySelector(".gallery-preview-img");
		previewImg.setAttribute("src", this.state.imgUrls[imgIndex]);
		const previewTitle = document.querySelector(".gallery-preview-title");
		previewTitle.textContent = this.state.imgNames[imgIndex];
	}

	componentDidMount() {
		const galleryPreview = document.querySelector(".gallery-preview");
		const previewImg = document.createElement("img");
		previewImg.classList.add("gallery-preview-img");
		galleryPreview.appendChild(previewImg);
		
		fetch("https://raw.githubusercontent.com/birdue/blender-showcase/main/public/info/showcase.json")
		.then(response => {
			if(!response.ok) {
				throw new Error(`Fetching JSON: HTTP status ${response.status}`);
			}
			return response.json();
		})
		.then(imgInfoArr => {
			const galleryThumbs = document.querySelector(".gallery-thumbnails");

			const imgNames = [];
			const imgUrls = [];
			
			imgInfoArr.forEach((imgInfo, index) => {
				const imgName = imgInfo.name;
				imgNames.push(imgName);
				const imgUrl = imgInfo.url;
				imgUrls.push(imgUrl);

				const img = document.createElement("img");
				img.setAttribute("src", imgUrl);
				img.setAttribute("imgIndex", index);

				// img.onclick = evt => this.updatePreview(evt.target.getAttribute("imgIndex"));
				img.addEventListener("click", evt => this.updatePreview(evt.target.getAttribute("imgIndex")));

				galleryThumbs.appendChild(img);
			});

			this.setState({
				imgNames: imgNames,
				imgUrls: imgUrls,
			}, () => this.updatePreview(0));
		})
		.catch(err => console.error(err));
	}

	render() {
		return (
			<article>
				<div className="gallery">
					<div className="gallery-title-area">
						<h1 className="gallery-preview-title"></h1>
					</div>
					<div className="gallery-preview">
					</div>
					<div className="gallery-thumbnails">
					</div>
				</div>
			</article>
		);
	}
}

export default Gallery;
