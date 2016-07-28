import React, {Component} from 'react';

const IPHONE_URL = 'assets/images/iphone.png';
const TECHCRUNCH_URL = 'assets/images/press-01.jpg';
const FORBES_URL = 'assets/images/press-02.jpg';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="nav navbar-nav navbar-left">
                <li><a className="logo" href="#">LIKER</a></li>
              </div>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#pricing" className="scroll black">Pricing</a></li>
                <li><a href="#about" className="scroll">About</a></li>
              </ul>
            </div>
          </div>
        </div>

        <header>
          <div className="container">
            <div className="row">
              <div className="col-xs-6 text-left navbar-nav">
                <a className="logo" href="#">LIKER</a>
              </div>
              <div className="col-xs-6 signin text-right navbar-nav">
                <a href="#pricing" className="scroll">Pricing</a>&nbsp;
                &nbsp;<a href="#about" className="scroll">About</a>&nbsp;
              </div>
            </div>

            <div className="row header-info">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <h1 className="wow fadeIn black">Make your Instagram account <br />SUPER</h1>
                <br />
                <p className="lead wow fadeIn black" data-wow-delay="0.5s">Instagram auto-liker, auto-commenter.<br/>
                Being famous has never been so easy !</p>
                <br />

                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="row">
                      <div className="col-xs-offset-3 col-xs-6 wow fadeInUp" data-wow-delay="1s">
                        <a href="#be-the-first" className="btn btn-secondary btn-lg scroll">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>

        <div className="mouse-icon hidden-xs">
  				<div className="scroll"></div>
  			</div>

        <section id="be-the-first" className="pad-xl">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn" data-wow-delay="0.6s">
                <h2>Feel the magic</h2>
                <p className="lead">Just connect, and see your Instagram account growing !</p>
              </div>
            </div>

            <div className="iphone wow fadeInUp" data-wow-delay="1s">
    	        <img src={IPHONE_URL}/>
            </div>
          </div>
        </section>

        <section id="main-info" className="pad-xl">
    	    <div className="container">
    		    <div className="row">
    			    <div className="col-sm-offset-2 col-sm-4 wow fadeIn" data-wow-delay="0.4s">
    				    <hr className="line yellow" />
    				    <h3>Auto-liker</h3>
    				    <p>Liking your list of hashtags easily.<br />
                The more you like instagram pictures, the more you get views from other instagramers !
                </p>
    			    </div>
    			    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
    				    <hr  className="line yellow" />
    				    <h3>Auto-commenter</h3>
    				    <p>Commenting your list of hashtags easily.
                Creating more interactions with instagramers will help them to know you better !
                </p>
    			    </div>
    		    </div>
    	    </div>
        </section>

        <section id="pricing" className="pad-lg">
          <div className="container">
            <div className="row margin-40">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <h2 className="white">Pricing</h2>
              </div>
            </div>

            <div className="row margin-50">

              <div className="col-sm-offset-4 col-sm-4 pricing-container wow fadeInUp" data-wow-delay="0.4s">
                <ul className="list-unstyled pricing-table text-center">
        					<li className="headline"><h5 className="white">3 DAYS FREE TRIAL</h5></li>
        					<li className="price"><div className="amount">$5<small>/m</small></div></li>
        					<li className="info">Instagram package</li>
        					<li className="features first">1000 likes/day</li>
        					<li className="features">100 comments/day</li>
                  <li className="features">Set your own settings</li>
        					<li className="features last btn btn-secondary btn-wide"><a href="#">Get Started</a></li>
        				</ul>
              </div>

            </div>

          </div>
        </section>

        <section id="about" className="pad-xl">
    	    <div className="container">

          <div className="row margin-40">
            <div className="col-sm-8 col-sm-offset-2 text-center">
              <h2 className="black">About</h2>
            </div>
          </div>

    		    <div className="row">
    			    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
    				    <hr className="line yellow" />
    				    <h3>Security</h3>
    				    <p>Transparency and privacy are the keys so you have the total control of your account preferences !<br />
                You can manage your settings, your list of hashtags, the number of your likes and comments.
                </p>
    			    </div>
    			    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
    				    <hr  className="line yellow" />
    				    <h3>Payment</h3>
    				    <p>For a maximum security, every payment are made throught Stripe.
                </p>
    			    </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                <hr  className="line yellow" />
                <h3>Contact</h3>
                <p>Don't hesitate to contact us for any question or advice.<br />
                We are here to make you happy !
                </p>
              </div>
    		    </div>
    	    </div>
        </section>

        <footer>
          <div className="container">

            <div className="row">
              <div className="col-sm-8 margin-20">
                <ul className="list-inline social">
                  <li>Connect with us on</li>
                  <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>

              <div className="col-sm-4 text-right">
                <p><small>Copyright Liker &copy; 2016. All rights reserved.</small></p>
              </div>
            </div>

          </div>
        </footer>
      </div>
    );
  }
}
