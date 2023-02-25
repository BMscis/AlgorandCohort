import React, { Component } from 'react';
import { withRouter } from '../../utils';
import Clock from './Clock';

class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nfts: props.props,
      height: 0
    };
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  onImgLoad({ target: img }) {
    let currentHeight = this.state.height;
    if (currentHeight < img.offsetHeight) {
      this.setState({
        height: img.offsetHeight
      });
    }
  }

  render() {
    return (
      <div className="row">
        {this.state.nfts &&
          this.state.nfts.length > 0 &&
          this.state.nfts.map((nft, index) => (
            <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
              <div className="nft__item m-0">
                {nft.deadline && (
                  <div className="de_countdown">
                    <Clock deadline={nft.deadline} />
                  </div>
                )}
                <div className="author_list_pp">
                  <span onClick={() => this.props.navigate(`/Author/${nft.owner.author}`)}>
                    <img className="lazy" src={nft.owner.avatar.url} alt="" />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="nft__item_wrap" style={{ height: `${this.state.height}px` }}>
                  <span>
                    <img
                      onLoad={this.onImgLoad}
                      src={nft.preview_image.url}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </span>
                </div>
                <div className="nft__item_info">
                  <span onClick={() => this.props.navigate(`/ItemDetail/${nft.id}`)}>
                    <h4>{nft.title}</h4>
                  </span>
                  <div className="nft__item_price">
                    {nft.price}
                    <span>ALGO</span>
                  </div>
                  <div className="nft__item_action">
                    <span onClick={() => this.props.navigate(`/ItemDetail/${nft.id}`)}>
                      Buy Ticket
                    </span>
                  </div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{nft.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default withRouter(Responsive);
