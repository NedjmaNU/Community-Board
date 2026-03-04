import "./Card.css";

const Card = ({ //DONT FORGET to add curly braces or it won't work
    imgSrc, //these are prop thingies so you can just plug and chug
    imgAlt,
    title,
    description,
    buttonText,
    link,
})  => {
    return(
        <div className="card-container">
            <img src={imgSrc} alt={imgAlt} className="card-img" />
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">{description}</p>
            <a href={link} className="card-btn"> {buttonText}</a>
        </div>
        //the stuff in the {} associate with the prop stuff
    )
}

export default Card;
