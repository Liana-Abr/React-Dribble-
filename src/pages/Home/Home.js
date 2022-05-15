import './Home.css';
import { BiBasket } from "react-icons/bi";

import {NavLink} from "react-router-dom";
import Navbar from "../../Bar/NavBar";

function Home() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/* <img src="https://cdn.worldvectorlogo.com/logos/logo-pink.svg" alt={''} className="logo"/>*/}
      {/*    <div className="links">*/}
      {/*        <NavLink to="/">*/}
      {/*            Home*/}
      {/*        </NavLink>*/}
      {/*        <NavLink to="/shop">*/}
      {/*            Shop*/}
      {/*        </NavLink>*/}

      {/*        <NavLink to="/women">*/}
      {/*            Women*/}
      {/*        </NavLink>*/}
      {/*        <NavLink to="/men">*/}
      {/*            Men*/}
      {/*        </NavLink>*/}

      {/*    </div>*/}
      {/*    <div className="icons">*/}
      {/*        <a href="#">*/}
      {/*            <BiBasket/>*/}
      {/*        </a>*/}
      {/*        <a href="#">*/}
      {/*            <Navbar/>*/}
      {/*        </a>*/}

      {/*    </div>*/}
      {/*</header>*/}
        <div className="BuyNow">
            <div className="container">
                <img src="" className="buy" alt=""  />
                    <div className="text-block">
                        <h4>Find Your New Favorite <br/> Collection At Spring <br/> Sale 2021</h4>
                        <a href="" className="gradient-button">Buy Now</a>
                    </div>
            </div>
        </div>

        <div className="trend">
            <p>Trending clothes</p>
            <div className="items">
                <img src="https://www.na-kd.com/globalassets/lisa_marie_cable_knitted_cardigan_1688-000005-0022_01a_r.jpg?ref=4C2F6B42BA" alt={''} className="ItemImg"/>
                <p className="product-text">Knitted Cardigan
                    <br/>
                    <span>
                        $40.00
                    </span>
                </p>
            </div>
            <div className="items">
                <img src="https://media.missguided.com/s/missguided/YX9210985_set/1/tall-blue-super-wide-leg-boyfriend-jeans" alt={''} className="ItemImg"/>
                <p className="product-text">Wide Leg Jeans
                    <br/>
                    <span>
                        $54.00
                    </span>
                </p>
            </div>
            <div className="items">
                <img src="https://i8.amplience.net/i/nlyscandinavia/573083-0426_01/i-cut-out-rib-crop-top/?$categorypage_M$" alt={''} className="ItemImg"/>
                <p className="product-text">Cropped Top
                    <br/>
                    <span>
                        $66.00
                    </span>
                </p>
            </div>
        </div>

        <div className="middle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/2560px-Dior_Logo.svg.png" alt={''} className="dior"/>
            <img src="https://i.pinimg.com/originals/32/70/d2/3270d22949a436ef408c6a0452de0bb3.png" alt={''} className="hm"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/640px-Louis_Vuitton_logo_and_wordmark.svg.png" alt={''} className="lv"/>
            <img src="https://www.pngkit.com/png/full/15-157306_related-wallpapers-black-supreme-logo-png.png" alt={''} className="supreme"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" alt={''} className="zara"/>
            <img src="https://zeitzmocaa.museum/wp-content/uploads/2017/09/Gucci-logo_1920x580_7.png" alt={''} className="gucci"/>

        </div>

        <div className="W">
            <div className="wom">
                <img src="" className="photo" alt=""  />
                <div className="text-block2">
                    <h4 className="w">Woman's Clothing Catalog
                        <br/>
                        <p className="c">
                            View Catalog
                        </p>
                    </h4>

                </div>
            </div>
        </div>

        <div className="M">
                <img src="" className="photo2" alt=""  />
                <div className="text-block3">
                    <h4 className="m">Men's Clothing Catalog
                        <br/>
                        <p className="v">
                            View Catalog
                        </p>
                    </h4>

                </div>
        </div>

        <footer>KT REACT </footer>
    </div>
  );
}

export default Home;
