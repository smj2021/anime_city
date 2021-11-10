import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AnimeResults from '../../pages/AnimeResults/AnimeResults'
import AnimeDetails from '../../pages/AnimeDetails/AnimeDetails'

class Home extends Component {
    render() {
        return (
            <>
                <body>
                    <div id="preloder">
                        <div className="loader"></div>
                    </div>

                    <header className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="header__logo">
                                        <a href="./index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="header__nav">
                                        <nav className="header__menu mobile-menu">
                                            <ul>
                                                <li className="active"><a href="./index.html">Homepage</a></li>
                                                <li><a href="./categories.html">Categories <span className="arrow_carrot-down"></span></a>
                                                    <ul className="dropdown">
                                                        <li><a href="./categories.html">Categories</a></li>
                                                        <Route
                                                            exact path='/anime'
                                                            render={({ location }) =>
                                                                <AnimeDetails
                                                                    location={location}
                                                                />
                                                            }
                                                        />                                                    <li><a href="./anime-watching.html">Anime Watching</a></li>
                                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                                        <li><a href="./signup.html">Sign Up</a></li>
                                                        <li><a href="./login.html">Login</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="./blog.html">Our Blog</a></li>
                                                <li><a href="#">Contacts</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="header__right">
                                        <a href="#" className="search-switch"><span className="icon_search"></span></a>
                                        <a href="./login.html"><span className="icon_profile"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div id="mobile-menu-wrap"></div>
                        </div>
                    </header>

                    <section className="hero">
                        <div className="container">
                            <div className="hero__slider owl-carousel">
                                <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="hero__text">
                                                <div className="label">Adventure</div>
                                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                                <p>After 30 days of travel across the world...</p>
                                                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="hero__text">
                                                <div className="label">Adventure</div>
                                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                                <p>After 30 days of travel across the world...</p>
                                                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="hero__text">
                                                <div className="label">Adventure</div>
                                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                                <p>After 30 days of travel across the world...</p>
                                                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="trending__product">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-8">
                                                <div className="section-title">
                                                    <h4>Trending Now</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="btn__all">
                                                    <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-1.jpg">
                                                        <div className="ep">18 / 18</div>
                                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-2.jpg">
                                                        <div className="ep">18 / 18</div>
                                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-3.jpg">
                                                        <div className="ep">18 / 18</div>
                                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-4.jpg">
                                                        <div className="ep">18 / 18</div>
                                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Fullmetal Alchemist: Brotherhood</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-5.jpg">
                                                        <div className="ep">18 / 18</div>
                                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Shiratorizawa Gakuen Koukou</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-6.jpg">
                                                        <div className="ep">18 / 18</div>
                                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Code Geass: Hangyaku no Lelouch R2</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="footer">
                        <div className="page-up">
                            <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer__logo">
                                        <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer__nav">
                                        <ul>
                                            <li className="active"><a href="./index.html">Homepage</a></li>
                                            <li><a href="./categories.html">Categories</a></li>
                                            <li><a href="./blog.html">Our Blog</a></li>
                                            <li><a href="#">Contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <div class="search-model">
                        <div class="h-100 d-flex align-items-center justify-content-center">
                            <div class="search-close-switch"><i class="icon_close"></i></div>
                            <form class="search-model-form" onSubmit={this.handleSubmit}>
                                <input type="text" id="search-input" value={this.state.animeTitle}
                                    onChange={this.handleChange} placeholder="Search here....." />
                            </form>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}

export default Home