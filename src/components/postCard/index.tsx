import React from 'react';
import "./index.css"
function ReactComponent(props: { theme: "blue"|"red"|"green" , time: Date, tag1?: JSX.Element, tag2?: JSX.Element, link: string, linkText: string, title: string, text: JSX.Element, imageLink:string }) {

	return (
		<article className={`postcard dark ${props.theme}`}>
			<a className="postcard__img_link" href={props.link}>
			  <img className="postcard__img" src={props.imageLink} alt="Image Title" />
		  </a>
		  <div className="postcard__text">
			  <h1 className="postcard__title blue"><a href="#">{props.title}</a></h1>
			  <div className="postcard__subtitle small">

				  <time dateTime={props.time.toUTCString()}>
					  <i className="fas fa-calendar-alt mr-2"></i>{props.time.toLocaleDateString()}
				  </time>
			  </div>
			  <div className="postcard__bar"></div>
			  <div className="postcard__preview-txt">{props.text}</div>
			  <ul className="postcard__tagbox">
				  <li className={`tag__item ${props.tag1?"":"p-0"}`}>{props.tag1}</li>
				  <li className={`tag__item ${props.tag2 ? "" : "p-0"}`}>{props.tag2}</li>
				  <li className="tag__item play blue">
					  <a href={props.link}><i className="mx-2 bi bi-box-arrow-up-right"></i>{props.linkText}</a>
				  </li>
			  </ul>
		  </div>
	  </article>
  );
}

export default ReactComponent;