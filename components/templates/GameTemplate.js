import React from 'react';
import Layout from './Layout';
import Game from '../organisms/Game';

class GameTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout >
                <div className="container">
                    <Game />
                </div>
            </Layout>
        )
    }
}



export default GameTemplate;
