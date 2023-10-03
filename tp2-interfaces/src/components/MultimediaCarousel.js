import React from 'react'
import '../styles/info-section.css'

function MultimediaCarousel({img}) {
    return (
        <section>
            <div className="">
                <div className="carousel-multimedia">
                    <input type="radio" name="slides" checked="checked" id="slide-1"></input>
                    <input type="radio" name="slides" id="slide-2"></input>
                    <input type="radio" name="slides" id="slide-3"></input>
                    <input type="radio" name="slides" id="slide-4"></input>
                    <input type="radio" name="slides" id="slide-5"></input>
                    <input type="radio" name="slides" id="slide-6"></input>
                    <ul className="carousel_multimedia_slides">
                        <li className="carousel_multimedia_slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1041/800/450" alt=""/>
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Tim Marshall</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="carousel_multimedia_slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1043/800/450" alt=""/>
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Christian Joudrey</span>                            
                                </figcaption>
                            </figure>
                        </li>
                        <li className="carousel_multimedia_slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1044/800/450" alt=""/>
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Steve Carter</span>                            
                                </figcaption>
                            </figure>
                        </li>
                        <li className="carousel_multimedia_slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1045/800/450" alt=""/>
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Aleksandra Boguslawska</span>                            
                                </figcaption>
                            </figure>
                        </li>
                        <li className="carousel_multimedia_slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1049/800/450" alt=""/>
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Rosan Harmens</span>                            
                                </figcaption>
                            </figure>
                        </li>
                        <li className="carousel_multimedia_slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1052/800/450" alt=""/>
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Annie Spratt</span>                            
                                </figcaption>
                            </figure>
                        </li>
                    </ul>    
                    <ul className="carousel__thumbnails">
                        <li>
                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""/></label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MultimediaCarousel;