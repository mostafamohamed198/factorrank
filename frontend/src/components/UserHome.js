import React, { useState } from "react";
import { Helmet } from 'react-helmet';

export default function UserHome() {
    const [tier, setTier] = useState(0);
  
    return (
        <div>
          <Helmet>
          <title>FactorRank</title>
          <link rel="stylesheet" type="text/css" href="../static/css/userinterface.css"/>
        </Helmet>
        <div id="banner">
            <div id="title_bar">
                <img id="banner_logo" src="../../static/media/LogoTransparent_XS.png"/>
                <h1 id="banner_title">FactorRank</h1>
            </div>
            <ul id='nav_bar'>
                <li><a href="/rankings">Rankings</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/account">Account</a></li>
            </ul>
        </div> 
        
        <div id="uihome_screen">
            <div id="table-container"></div>
            <table>
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Name</th>
                    <th>Ticker Score</th>
                    <th>Long Signals</th>
                    <th>Suggested Hedge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AAPL</td>
                    <td>Apple Inc</td>
                    <td>0.67</td>
                    <td>2</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>BLK</td>
                    <td>BlackRock Inc</td>
                    <td>-1.31</td>
                    <td>0</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>CPB</td>
                    <td>Campbell Soup Co</td>
                    <td>2.28</td>
                    <td>0</td>
                    <td>KHC</td>
                  </tr>
                  <tr>
                    <td>KHC</td>
                    <td>Kraft Heinz Co</td>
                    <td>-0.60</td>
                    <td>1</td>
                    <td>CPB</td>
                  </tr>
                  <tr>
                    <td>MNST</td>
                    <td>Monster Beverage Corp</td>
                    <td>0.38</td>
                    <td>3</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>ORCL</td>
                    <td>Oracle Corp</td>
                    <td>-1.59</td>
                    <td>0</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>WMT</td>
                    <td>Walmart Inc</td>
                    <td>-0.23</td>
                    <td>1</td>
                    <td>TGT</td>
                  </tr>
                </tbody>
              </table>
        </div>
        </div>
      );
    }