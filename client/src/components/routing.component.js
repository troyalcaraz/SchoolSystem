import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Login from './login.component';
import Home from "./Home";

import { connect } from 'react-redux';


// function UserNav(props) {
//     const UserLoggedIn = props.user
//     if (UserLoggedIn) {
//         return <Nav className="mr-auto"><Link to='/auctionlist' className='nav_link'><h3>Auctions</h3></Link></Nav>
//     }
//     else {
//         return <Nav className="mr-auto"></Nav>
//     }
// }


class Routing extends Component{
    constructor(props) {
        super(props)
        const userLogged = props.user
    }
    render(){
        return (
        <>
            <Router>
                {/* <Navbar>
                    <Navbar.Brand><Link to='/' className='nav_link'><h1>KTMN Auction House</h1></Link></Navbar.Brand>
                    <UserNav user={this.props.user}></UserNav>
                    <Nav className="mr-auto"><Link to='/products' className='nav_link'><h3>Product Proposal</h3></Link></Nav>
                    <Nav className="mr-auto"><Link to='/manage/1' className='nav_link'><h3>Manage Auction</h3></Link></Nav>
                    <Login></Login>
                </Navbar> */}

                {/* <Route path='/auctions/:id' component={BidForm}/>
                <Route path='/auctionlist' component={AuctionList}/>
                <Route path='/products' component={ProductForm}/> */}
                <Route path="/" component={Home}/>
                {/* <Route path='/manage/:id' component={AuctionForm}/> */}
            </Router>
        </>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return {user: user}
}

export default connect(mapStateToProps)(Routing);