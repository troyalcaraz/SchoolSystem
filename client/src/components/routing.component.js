import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Login from './login.component';
import Home from "./Home";
import { connect } from 'react-redux';


function navigation(props) {
    const userlogged = props.user
    if (userlogged) {
        return <Link to='/admin' className='nav_link'><h3>Admin</h3></Link>
    }
    else {
        return null
    }
}

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
                <Route path='/auctionlist' component={AuctionList}/> */}
                {/* <Route path='/AdminMenu' component={AdminMenu}/> */}
                <Route path="/" component={Home}/>
                {/* <Route path='/manage/:id' component={AuctionForm}/> */}
            </Router>
        </>
        )
    }
}

function mapStateToProps(state) {
    const { user, username } = state
    return {user: user, username: username}
}

export default connect(mapStateToProps)(Routing);