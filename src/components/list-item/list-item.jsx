import React from "react";
import { getItems } from "../redux/listReducer";
import { compose } from "redux";
import { connect } from "react-redux";

class ListItem extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    if (!this.props.items) {
      return <div>loading...</div>;
    }

    return (
      <div className="App">
        <ul className={"grid"}>
          {this.props.items.map(({ id, snippet = {} }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
            return (
              <li key={id} className={"card"}>
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                >
                  <p>
                    <img
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h3>{title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getItems,
};

export default compose(connect(null, mapDispatchToProps))(ListItem);
