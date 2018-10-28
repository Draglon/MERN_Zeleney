var React = require('react');

var SectionHeader = require('./SectionHeader.jsx');
// Home page
var SectionMain = require('./section_content/Main.jsx');
var SectionInfo = require('./section_content/Info.jsx');
var SectionCategory = require('./section_content/Category.jsx');
var SectionPortfolio = require('./section_content/Portfolio.jsx');
var SectionRequest = require('./section_content/Request.jsx');
// Other sections
var SectionOrder = require('./section_content/Order.jsx');
var SectionTile = require('./section_content/Tile.jsx');
var SectionOxygen = require('./section_content/Oxygen.jsx');
var SectionSimpleCare = require('./section_content/SimpleCare.jsx');
var SectionDetails = require('./section_content/Details.jsx');
var SectionDelivery = require('./section_content/Delivery.jsx');
var SectionMyself = require('./section_content/Myself.jsx');
var SectionBlockByBlock = require('./section_content/BlockByBlock.jsx');

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "section " + this.props.data.className,
            title: this.props.data.title,
            section: this.props.data.section,
            content: this.props.data.content,
            popup: this.props.popup
        };
    }

    render() {
        return (
            <section className={this.state.className}>
                {this.state.title ? <SectionHeader data={this.state.title} /> : null }

                {(this.state.section==="main") ? <SectionMain data={this.state.content} popup={this.state.popup} /> : null }
                {(this.state.section==="info") ? <SectionInfo data={this.state.content} /> : null }
                {(this.state.section==="category") ? <SectionCategory data={this.state.content} /> : null }
                {(this.state.section==="portfolio") ? <SectionPortfolio data={this.state.content} /> : null }
                {(this.state.section==="request") ? <SectionRequest data={this.state.content} popup={this.state.popup} /> : null }

                {(this.state.section==="order") ? <SectionOrder data={this.state.content} popup={this.state.popup} /> : null }
                {(this.state.section==="tile") ? <SectionTile data={this.state.content} /> : null }
                {(this.state.section==="oxygen") ? <SectionOxygen data={this.state.content} /> : null }
                {(this.state.section==="simpleCare") ? <SectionSimpleCare data={this.state.content} /> : null }
                {(this.state.section==="details") ? <SectionDetails data={this.state.content} /> : null }
                {(this.state.section==="delivery") ? <SectionDelivery data={this.state.content} /> : null }
                {(this.state.section==="myself") ? <SectionMyself data={this.state.content} /> : null }
                {(this.state.section==="blockByBlock") ? <SectionBlockByBlock data={this.state.content} /> : null }
            </section>
        );
    }
}

module.exports = Section;