import React, { Component } from "react";
import Header from "./Header.js";
import { Link, Route } from 'react-router-dom'
import LeaderboardLocal from './LeaderboardLocal.js'


class Leaderboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      fourRankBoards: ['Last 24 Hours', 'Last 48 Hours', 'Last 72 Hours', "All Time"]
    }

  }
  render() {
    return (
      <div className="leaderboards-page">
        <Header />




        <div className="leaderboards">



          <div className='leaderboard-toggle-button-container'>
            <Link className='leaderboard-toggle-button' to='/leaderboards/local'>Local</Link>
            <Link className='leaderboard-toggle-button' to={'/leaderboards/global'} >Global</Link>
          </div>



          {/* <Route exact path="/leaderboards/local">
            {
              this.state.fourRankBoards.map(ele1 =>
                <ol className="rank-24-hours rank-column">
                  <h1>{ele1}</h1>
                  {
                    this.state.topTen.map(ele =>
                      ele < 4 ?
                        <li className="userposition" className='top-three-leaderboard'>
                          <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt="" />
                          <div>user{ele}</div>
                        </li>
                        :
                        <li className="userposition" className='under-top-three-leaderboard'>
                          <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt="" />
                          <div>user{ele}</div>
                        </li>
                    )
                  }
                </ol>)

            }
          </Route> */}
          <Route exact path='/leaderboards/local' render={() => <LeaderboardLocal />} />

          <Route exact path={'/leaderboards/global'}>
            <h1>GLOBAL</h1>
          </Route>


        </div>


        {/* <div className="leaderboard-posts">
          <div className="boxx-column">





            <div className="boxx-container">
              <div className="boxx"></div>
              <div className="post-info">
                <img
                  className="profile-comment"
                  src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                  alt=""
                />
                <input className="boxx-description" placeholder="caption"></input>
              </div>
            </div>
          </div>
        </div> */}



      </div >
    );
  }
}

export default Leaderboards;
