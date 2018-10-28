var React = require('react');

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slider: this.props.data,
            slideCount: this.props.data.length,
            sliderWidth: (this.props.data.length * 800),
            slideWidth: 800,
            slideIndex: 0
        };

        console.log(this.state.slider);




    }

    // getIndex(slide) {
    //     slide++;
    //     if(slide < 0) {return this.state.slideCount-1;}
    //     if(slide > this.state.slideCount-1) {return 0;}
    //     return slide;
    // }

    nextSlide() {
        // this.setState({
        //     slideIndex: this.getIndex(this.state.slideIndex)
        // });
        // console.log(this.state.slideIndex);
        var elem = this.state.slider.shift();

        // console.log(this.state.slider.pop());
        console.log(elem);
        // console.log(this.state.slider.push(elem));

        this.setState({
            // slideIndex: this.getIndex(this.state.slideIndex)
            slider: this.state.slider.push(elem)
        });
        // console.log("this.state.slider ");
        console.log(this.state.slider);
    }

    prevSlide() {
        // this.setState({
        //     slideIndex: this.getIndex(this.state.slideIndex)
        // });
        // console.log(this.state.slideIndex);


        this.setState({
            // slideIndex: this.getIndex(this.state.slideIndex)
        });
    }

    render() {
        const sliderCentered = {
            // left: -this.state.sliderWidth/2,
            width: this.state.sliderWidth
        };

        const slideItem = {
            style: {
                left: -(this.state.slideWidth * this.state.slideIndex)
            }
        }

        return (
            <div className="slider">
                <a className="slider_arrow slider_arrow-left" onClick={() => this.prevSlide()}></a>
                <a className="slider_arrow slider_arrow-right" onClick={() => this.nextSlide()}></a>

                <div className="slider_wrapper">
                    <div className="slider_container" style={sliderCentered}>
                        {this.state.slider.map( (slide, index) => 
                            // <div key={index} style={slideItem.style} className={(index == this.state.slideIndex) ? "slider_item active" : "slider_item"} >
                            <div key={index} className="slider_item">
                                {slide.label ? <div className="slider_label" dangerouslySetInnerHTML={{__html: slide.label}}></div> : null}
                                <img src={slide.url} alt={slide.alt} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Slider;