import React, { Component } from 'react';
import axios from 'axios';
import masonryLayout from '../../images/masonryLayout.svg'
import standardLayout from '../../images/standardLayout.svg'

export default class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        }
    }
    componentDidMount() {
        axios.get('/api/selectedtweets').then(res => {
            this.setState({
                tweets: res.data
            })
        })
    }
    render(props) {
        let mappedTweetsStandard = this.state.tweets.map((e, i) => {
            return (
                <div key={i} className='tweets'>
                    <div className="tweetHead">
                        <img src={e.user_img} alt="" className='tweetUserImg' />
                        <div className="tweetTextContainer">
                            <div className="usernameAndScreenname">
                                <h1>{e.tweet_username}</h1>
                                <h2>@{e.tweet_screenname}</h2>
                            </div>
                            <p className='tweetText'>{e.tweet_text}</p>
                        </div>
                    </div>
                    <div className="media">
                        {e.tweet_img1 ? <img src={e.tweet_img1} alt="" className="tweetImg" /> : null}
                        {e.tweet_img2 ? <img src={e.tweet_img2} alt="" className="tweetImg" /> : null}
                    </div>
                    <div className="media">
                        {e.tweet_img3 ? <img src={e.tweet_img3} alt="" className="tweetImg" /> : null}
                        {e.tweet_img4 ? <img src={e.tweet_img4} alt="" className="tweetImg" /> : null}
                    </div>
                    <button onClick={() => this.props.addTweetToBook(e)}>Add Tweet to book</button>
                    <br />
                </div>
            )
        })
        return (
            <div className="stepOneContainer">
                <div className="stepFourLayout">
                    <div className="containerLayout">
                        <div className='standardLayout' onClick={() => this.props.handlePageLayout('standardTweetsList')}>
                            <button>Standard Layout</button>
                            <img src={standardLayout} alt=""/>
                        </div>
                        <div className='masonryLayout' onClick={() => this.props.handlePageLayout('masonryTweetsList')}>
                            <button>Masonry Layout</button>
                            <img src={masonryLayout} alt=""/>
                        </div>
                    </div>
                    <div className="chosenTweetsContaniner">
                        {mappedTweetsStandard}
                    </div>
                </div>
            </div>
        )
    }
}
