import React from "react";
import styled from "styled-components";

const Text = styled.div`
  padding: 20px;
  font-size: 36px;
  text-align: center;
`

const Authenticate = ContentApp => {
    return class extends React.Component {
        render() {
            if (this.props.loggedIn) {
            return (
                <ContentApp/>
            )
            } else {
                return (<Text>Please log in to view content.</Text>)
            }
        }
    }
}

export default Authenticate;