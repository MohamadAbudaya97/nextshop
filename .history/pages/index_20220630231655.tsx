import type { NextPage } from 'next'
import Section from '@Components/Prodect/section'
import Slider from '@Components/Prodect/slider'
import Test from '@Components/Test'
const Home: NextPage = () => {
  return (
    <>
   <div>
        <div className="popup-modal modal fade" tabIndex={-1} id="sg-modal">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="images/product/modal.png" alt="Image" className="img-fluid" />
                  </div>
                  <div className="col-lg-6">
                    <h2>Get <span>25%</span> Discount</h2>
                    <p>Subscribe to the yoori shop newsletter to receive updates on special offers.</p>
                    <form action="#">
                      <div className="form-group">
                        <input type="email" className="form-control" required="required" placeholder="Email Address" />
                      </div>
                      <button className="btn btn-primary text-uppercase" name="submit" type="submit">Subscribe</button>
                    </form>
                    <div className="social">
                      <ul className="global-list">
                        <li><a href="#"><span><i className="fa-brands fa-facebook" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-twitter" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-linkedin" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-instagram" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-pinterest" /></span></a></li>
                      </ul>
                    </div>
                    <div className="form-group tnc">
                      <input type="checkbox" name="tnc" id="tnc" />
                      <label htmlFor="tnc">Don't show this popup again</label>
                    </div>
                  </div>
                </div>{/* /.row */}
              </div>
            </div>{/* /.modal-content */}
          </div>{/* /.modal-dialog */}
        </div>{/* /.modal */}
        <header className="sg-header">
          <div className="sg-topbar">
            <div className="container">
              <div className="topbar-content">
                <div className="left-content">
                  <ul className="global-list d-flex">
                    <li>
                      <div className="dropdown">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#"><img src="images/others/flag1.png" alt="Image" className="img-fluid" />English</a></li>
                          <li><a className="dropdown-item" href="#"><img src="images/others/flag2.png" alt="Image" className="img-fluid" />France</a></li>
                          <li><a className="dropdown-item" href="#"><img src="images/others/flag3.png" alt="Image" className="img-fluid" />Jarman</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USD</button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">USD</a></li>
                          <li><a className="dropdown-item" href="#">BDT</a></li>
                          <li><a className="dropdown-item" href="#">AUD</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="right-content">
                  <ul className="global-list">
                    <li><span><i className="fas fa-phone-volume" /></span><a href="#">Live Chat: +12 345 678 99</a></li>
                    <li><span><i className="far fa-user" /></span><a href="sign-in.html">Sign In/ </a> <a href="sign-up.html"> Register</a></li>
                  </ul>
                </div>
              </div>
            </div>{/* /.container */}
          </div>{/* /.sg-topbar */}  
          <div className="header-middle">
            <div className="container">
              <div className="botom-content">
                <div className="sg-logo">
                  <a href="index.html"><img src="images/logo.png" alt="Logo" className="img-fluid" /></a>
                </div>
                <div className="sg-search"> 
                  <div className="search-form">
                    <form action="#">
                      <input type="text" className="form-control" placeholder="Search Product" />
                      <button type="submit"><i className="fas fa-search" /></button>
                    </form>{/* /form */}
                  </div>{/* /form */}                    
                </div>{/* /.sg-search */}
                <div className="user-option">
                  <ul className="global-list">
                    <li>
                      <div className="d-flex">
                        <div className="icon">
                          <i className="fa-solid fa-shuffle" />
                        </div>
                        <div className="text">
                          <span className="badge">0</span>
                          <span>Compare</span>
                        </div>                                        
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="icon">
                          <i className="fa-regular fa-heart" />
                        </div>
                        <div className="text">
                          <span className="badge">0</span>
                          <span>Wishlist</span>
                        </div>                                        
                      </div>
                    </li>
                    <li className="sg-dropdown">
                      <div className="d-flex">
                        <div className="icon">
                          <i className="fa-solid fa-briefcase" />
                        </div>
                        <div className="text">
                          <span className="badge">3</span>
                          <span>Cart</span>
                        </div>                                        
                      </div>
                      <div className="sg-dropdown-menu">
                        <span className="title">Cart Items</span>
                        <ul className="global-list">
                          <li>
                            <div className="sg-product">
                              <span className="remove-icon fa-solid fa-xmark" />
                              <div className="product-thumb">
                                <a href="#"><img src="images/product/w1.png" alt="Image" className="img-fluid" /></a>
                              </div>
                              <div className="product-info">
                                <h3><a href="#">Apple Watch Series 7 45mm Sports Band...</a></h3>
                                <span className="price">$ 700.00</span>
                              </div>
                            </div>                                            
                          </li> 
                          <li>
                            <div className="sg-product">
                              <span className="remove-icon fa-solid fa-xmark" />
                              <div className="product-thumb">
                                <a href="#"><img src="images/product/9.png" alt="Image" className="img-fluid" /></a>
                              </div>
                              <div className="product-info">
                                <h3><a href="#">Sony SRS-XB13 Extra BASS Wireless...</a></h3>
                                <span className="price">$ 1009.00</span>
                              </div>
                            </div>                                            
                          </li> 
                          <li>
                            <div className="text-center buttons">
                              <a href="#" className="btn btn-primary">View cart</a>
                              <a href="#" className="btn btn-primary">Checkout</a>
                            </div>
                          </li>  
                        </ul>                                        
                      </div>
                    </li>
                  </ul>
                </div>                          
              </div>                             
            </div>{/* /.container */}         
          </div>{/* /.header-middle */}   
          <div className="header-bottom">
            <div className="container">
              <div className="bottom-content">
                <div className="sg-categorie-menu categorie-lg align-self-lg-center">
                  <div className="top-content">                                
                    <button className="sg-toggle">
                      <span className="toggle-bar bar1" />
                      <span className="toggle-bar bar2" />
                      <span className="toggle-bar bar3" />
                    </button>
                    <span>All Categories</span>
                  </div>
                  <div className="categorie-menu" id="categorie-menu">
                    <div className="categorie-menu-content">
                      <ul className="global-list"> 
                        <li className="active"><a href="#"><img src="images/others/1.svg" alt="svg" className="img-fluid" />All Offers</a></li>
                        <li><a href="#"><img src="images/others/2.svg" alt="svg" className="img-fluid" />Fashion &amp; Clothing</a></li>
                        <li className="sg-dropdown active">
                          <a href="#"><img src="images/others/3.svg" alt="svg" className="img-fluid" />Electronic Gadget</a>
                          <div className="sg-dropdown-menu">
                            <div className="row">
                              <div className="col-lg-3">
                                <h3>Digital Camera</h3>
                                <ul className="global-list">
                                  <li><a href="#">Digital SLR Camera</a></li>
                                  <li><a href="#">Sports &amp; Action Camera</a></li>
                                  <li><a href="#">Camcorders</a></li>
                                  <li><a href="#">Photo Printer</a></li>
                                  <li><a href="#">Camera Lenses</a></li>
                                  <li><a href="#">Digital Memory Cards</a></li>
                                  <li><a href="#">Digital Memory Cards</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <h3>Headphone</h3>
                                <ul className="global-list">
                                  <li><a href="#">Wireless Headphone</a></li>
                                  <li><a href="#">General Headphone</a></li>
                                  <li><a href="#">Sound Speaker</a></li>
                                  <li><a href="#">Earphone</a></li>
                                  <li><a href="#">Bluetooth Headphone</a></li>
                                  <li><a href="#">Apply Headphone</a></li>
                                  <li><a href="#">Base Box</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <h3>Furniture</h3>
                                <ul className="global-list">
                                  <li><a href="#">Sofas &amp; Couches</a></li>
                                  <li><a href="#">Armchairs</a></li>
                                  <li><a href="#">Bed Frames</a></li>
                                  <li><a href="#">Beside Tables</a></li>
                                  <li><a href="#">Dressing Tables</a></li>
                                  <li><a href="#">Home Fragrance</a></li>
                                  <li><a href="#">Clocks</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <div className="sg-product">
                                  <div className="product-info">
                                    <p>New Arrivals</p>
                                    <h4>Amazing Feature</h4>
                                    <span className="price">From $95.00</span>
                                  </div>
                                  <div className="product-thumb">
                                    <img src="images/others/w1.png" alt="Img" className="img-fluid" />
                                  </div>
                                  <a href="#" className="btn">Shop Now!</a>
                                </div>
                              </div>
                            </div>{/* /.row */}
                          </div>
                        </li>
                        <li><a href="#"><img src="images/others/4.svg" alt="svg" className="img-fluid" />Skin Care</a></li>
                        <li><a href="#"><img src="images/others/5.svg" alt="svg" className="img-fluid" /> Computer Accessories</a></li>
                        <li><a href="#"><img src="images/others/6.svg" alt="svg" className="img-fluid" />Cameras</a></li>
                        <li><a href="#"><img src="images/others/7.svg" alt="svg" className="img-fluid" />Home &amp; Garden</a></li>
                        <li><a href="#"><img src="images/others/8.svg" alt="svg" className="img-fluid" />Game &amp; Toys</a></li>
                        <li><a href="#"><img src="images/others/9.svg" alt="svg" className="img-fluid" />Health &amp; Beauty</a></li>
                        <li><a href="#"><img src="images/others/10.svg" alt="svg" className="img-fluid" />Bag &amp; Lages</a></li>
                        <li><a href="#"><strong>View All Categories</strong> <span className="fa-solid fa-arrow-right " /></a></li>
                      </ul>
                    </div>{/* /.categorie-menu-content */}
                  </div>{/* /.categorie-menu */}                                                      
                </div>{/* /.categorie-menu */}   
                <div className="right-content">
                  <div className="sg-menu">
                    <nav className="navbar navbar-expand-lg">
                      <div className="sg-logo">
                        <a href="index.html"><img src="images/logo.png" alt="Logo" className="img-fluid" /></a>
                      </div>  
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                          <i className="fa-solid fa-bars" />
                        </span>
                      </button>                                  
                      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item active"><a href="index.html">Home</a></li> 
                          <li className="nav-item"><a href="shop.html">Shop</a></li>
                          <li className="nav-item"><a href="gift-voucher.html">gift voucher</a></li>
                          <li className="nav-item sg-dropdown">
                            <a href="#">Page</a>
                            <ul className="sg-dropdown-menu">
                              <li><a href="details.html">Shop Details</a></li>
                              <li><a href="blog-details.html">Blog Details</a></li>
                              <li><a href="campaign-page.html">Campaign Page</a></li>
                              <li><a href="check-out.html">Check Out Page</a></li>
                              <li><a href="order-history.html">Order History</a></li>
                              <li><a href="shopping-cart.html">Shopping Cart</a></li>
                              <li><a href="payment.html">Payment Page</a></li>
                              <li><a href="profile.html">Profile Page</a></li>
                              <li><a href="edit-profile.html">Edit Profile</a></li>
                              <li><a href="notification.html">Notification</a></li>
                              <li><a href="wishlist.html">wishlist</a></li>
                              <li><a href="contact.html">Contact Us</a></li>
                              <li><a href="sign-in.html">Sign In</a></li>
                              <li><a href="sign-up.html">Sign Up</a></li>
                            </ul>
                          </li>                                    
                          <li className="nav-item"><a href="blog.html">Blog</a></li>
                          <li className="nav-item"><a href="about.html">About Us</a></li>        
                        </ul>
                      </div>
                    </nav>{/* /.navbar */}
                  </div>{/* /.sg-menu */} 
                  <div className="offer">
                    <a href="#"><span><i className="fa-solid fa-location-dot" /></span> Track Order</a>
                  </div>                             
                </div>                         
              </div>                
            </div>{/* /.container */}
          </div>{/* /.header-bottom */} 
          <div className="sg-categorie-menu categorie-sm">
            <div className="sg-toggle"><span className="fa-solid fa-xmark" /></div>
            <div className="categorie-menu-content">
              <ul className="global-list"> 
                <li className="active"><a href="#"><img src="images/others/1.svg" alt="svg" className="img-fluid" />All Offers</a></li>
                <li><a href="#"><img src="images/others/2.svg" alt="svg" className="img-fluid" />Fashion &amp; Clothing</a></li>
                <li className="sg-dropdown active">
                  <a href="#"><img src="images/others/3.svg" alt="svg" className="img-fluid" />Electronic Gadget</a>
                  <div className="sg-dropdown-menu">
                    <div className="row">
                      <div className="col-lg-3">
                        <h3>Digital Camera</h3>
                        <ul className="global-list">
                          <li><a href="#">Digital SLR Camera</a></li>
                          <li><a href="#">Sports &amp; Action Camera</a></li>
                          <li><a href="#">Camcorders</a></li>
                          <li><a href="#">Photo Printer</a></li>
                          <li><a href="#">Camera Lenses</a></li>
                          <li><a href="#">Digital Memory Cards</a></li>
                          <li><a href="#">Digital Memory Cards</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <h3>Headphone</h3>
                        <ul className="global-list">
                          <li><a href="#">Wireless Headphone</a></li>
                          <li><a href="#">General Headphone</a></li>
                          <li><a href="#">Sound Speaker</a></li>
                          <li><a href="#">Earphone</a></li>
                          <li><a href="#">Bluetooth Headphone</a></li>
                          <li><a href="#">Apply Headphone</a></li>
                          <li><a href="#">Base Box</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <h3>Furniture</h3>
                        <ul className="global-list">
                          <li><a href="#">Sofas &amp; Couches</a></li>
                          <li><a href="#">Armchairs</a></li>
                          <li><a href="#">Bed Frames</a></li>
                          <li><a href="#">Beside Tables</a></li>
                          <li><a href="#">Dressing Tables</a></li>
                          <li><a href="#">Home Fragrance</a></li>
                          <li><a href="#">Clocks</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="sg-product">
                          <div className="product-info">
                            <p>New Arrivals</p>
                            <h4>Amazing Feature</h4>
                            <span className="price">From $95.00</span>
                          </div>
                          <div className="product-thumb">
                            <img src="images/others/w1.png" alt="Img" className="img-fluid" />
                          </div>
                          <a href="#" className="btn">Shop Now!</a>
                        </div>
                      </div>
                    </div>{/* /.row */}
                  </div>
                </li>
                <li><a href="#"><img src="images/others/4.svg" alt="svg" className="img-fluid" />Skin Care</a></li>
                <li><a href="#"><img src="images/others/5.svg" alt="svg" className="img-fluid" /> Computer Accessories</a></li>
                <li><a href="#"><img src="images/others/6.svg" alt="svg" className="img-fluid" />Cameras</a></li>
                <li><a href="#"><img src="images/others/7.svg" alt="svg" className="img-fluid" />Home &amp; Garden</a></li>
                <li><a href="#"><img src="images/others/8.svg" alt="svg" className="img-fluid" />Game &amp; Toys</a></li>
                <li><a href="#"><img src="images/others/9.svg" alt="svg" className="img-fluid" />Health &amp; Beauty</a></li>
                <li><a href="#"><img src="images/others/10.svg" alt="svg" className="img-fluid" />Bag &amp; Lages</a></li>
                <li><a href="#"><strong>View All Categories</strong> <span className="fa-solid fa-arrow-right " /></a></li>
              </ul>
            </div>{/* /.categorie-menu-content */}
          </div>{/* /.categorie-menu */}
          <div className="user-option sm-cart">
            <div className="c-toggle"><span className="fa-solid fa-xmark" /></div>
            <div className="sg-dropdown">
              <div className="sg-dropdown-menu">
                <span className="title">Cart Items</span>
                <ul className="global-list">
                  <li>
                    <div className="sg-product">
                      <span className="remove-icon fa-solid fa-xmark" />
                      <div className="product-thumb">
                        <a href="#"><img src="images/product/w1.png" alt="Image" className="img-fluid" /></a>
                      </div>
                      <div className="product-info">
                        <h3><a href="#">Apple Watch Series 7 45mm Sports Band...</a></h3>
                        <span className="price">$ 700.00</span>
                      </div>
                    </div>                                            
                  </li> 
                  <li>
                    <div className="sg-product">
                      <span className="remove-icon fa-solid fa-xmark" />
                      <div className="product-thumb">
                        <a href="#"><img src="images/product/9.png" alt="Image" className="img-fluid" /></a>
                      </div>
                      <div className="product-info">
                        <h3><a href="#">Sony SRS-XB13 Extra BASS Wireless...</a></h3>
                        <span className="price">$ 1009.00</span>
                      </div>
                    </div>                                            
                  </li> 
                  <li>
                    <div className="text-center buttons">
                      <a href="#" className="btn btn-primary">View cart</a>
                      <a href="#" className="btn btn-primary">Checkout</a>
                    </div>
                  </li>  
                </ul>                                       
              </div>
            </div>
          </div>                           
          <div id="sm_menu" className="sticky-sm-menu">
            <div className="sm-menu-content">
              <div className="container">
                <ul className="global-list">
                  <li>
                    <a href="index.html">
                      <span><i className="fa-solid fa-house" /></span>
                      <span>Home</span>
                    </a>                                
                  </li>
                  <li>
                    <a href="#" className="sg-toggle">
                      <span><i className="fa-solid fa-bars" /></span>
                      <span>Categories</span>
                    </a>                                
                  </li>
                  <li>
                    <a href="#">
                      <span><i className="fa-regular fa-heart" /></span>
                      <span>Wishlist</span>
                    </a>                                
                  </li>
                  <li>
                    <a href="#" className="c-toggle">
                      <span><i className="fa-solid fa-briefcase" /></span>
                      <span>Cart</span>
                    </a>                                
                  </li>
                  <li>
                    <a href="#">
                      <span><i className="fa-regular fa-user" /></span>
                      <span>Account</span>
                    </a>                                
                  </li>
                </ul>                        
              </div>
            </div>
          </div>
        </header>{/* /.sg-header */}
        <div className="hero-section">
          <div className="hero-content">
            <div id="hero-slider" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="item-content">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="thumb animated slideInLeft">
                            <img src="images/bg/s5.png" alt="Image" className="img-fluid" />
                          </div>
                        </div>
                        <div className="col-md-8 align-self-center">
                          <div className="hero-text text-right">
                            <h2 className="animated slideInUp">New Winter Collections 2022</h2>
                            <h3 className="animated slideInUp">Upto <span>50% Discount</span></h3>
                            <a href="#" className="btn btn-primary animated slideInUp">shop now <span className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>{/* /.row */}                                        
                    </div>{/* /.item-content */}                            
                  </div>{/* /.container */} 
                </div>
                <div className="carousel-item" style={{backgroundImage: 'url(images/bg/hero-bg2.jpg)'}}>
                  <div className="container">
                    <div className="item-content">
                      <div className="row">
                        <div className="col-md-8 align-self-center">
                          <div className="hero-text">
                            <h2 className="animated slideInUp">Attack Air VaporMax Flyknit 3</h2>
                            <h3 className="animated slideInUp">Flat 20% <span>Discount</span></h3>
                            <a href="#" className="btn btn-primary animated slideInUp">shop now <span className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="thumb animated slideInUp">
                            <img src="images/bg/s2.png" alt="Image" className="img-fluid" />
                          </div>
                        </div>
                      </div>{/* /.row */}                                      
                    </div>{/* /.item-content */}                                 
                  </div>{/* /.container */}                             
                </div>
                <div className="carousel-item" style={{backgroundImage: 'url(images/bg/hero-bg.jpg)'}}>
                  <div className="container">
                    <div className="item-content">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="thumb animated slideInUp">
                            <img src="images/bg/s6.png" alt="Image" className="img-fluid" />
                          </div>
                        </div>
                        <div className="col-md-8 align-self-center">
                          <div className="hero-text">
                            <h2 className="animated slideInUp">BLACK SMART WATCH</h2>
                            <h3 className="animated slideInUp">upto 50% Discount</h3>
                            <a href="#" className="btn btn-primary animated slideInUp">shop now <span className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>{/* /.row */}                                    
                    </div>{/* /.item-content */}                                
                  </div>{/* /.container */}
                </div>
              </div>{/* /.carousel-inner */}
              <ol className="carousel-indicators">
                <li data-bs-target="#hero-slider" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#hero-slider" data-bs-slide-to={1} />
                <li data-bs-target="#hero-slider" data-bs-slide-to={2} />
              </ol>
            </div>{/* /.hero-content */}                 
          </div>{/* /.hero-content */}
        </div>{/* /.hero-section */}
        <section className="offers-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="#" className="add-banner">
                  <img src="images/others/of1.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="#" className="add-banner">
                  <img src="images/others/of2.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="#" className="add-banner">
                  <img src="images/others/of3.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.section */}
        <section className="categories-section pt-0">
          <div className="container">
            <div className="title justify-content-between">
              <h1>Popular Categories</h1>
              <a href="#">All Categories <span className="icon fas fa-arrow-right" /></a>
            </div>
            <div className="category-content">
              <ul className="global-list grid-3">
                <li>
                  <a href="#">
                    <span className="icon"><img src="images/others/c1.png" alt="Image" className="img-fluid" /></span>
                    <span>Women Clothing &amp; Fashion</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"><img src="images/others/c2.png" alt="Image" className="img-fluid" /></span>
                    <span>Computer &amp; Accessories</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"><img src="images/others/c3.png" alt="Image" className="img-fluid" /></span>
                    <span>Home decoration &amp; Appliance</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <img src="images/others/c4.png" alt="Image" className="img-fluid" />
                    </span>
                    <span>Jewelry &amp; Watches</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <img src="images/others/c5.png" alt="Image" className="img-fluid" />
                    </span>
                    <span>Beauty, Health &amp; Hair</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon"><img src="images/others/c6.png" alt="Image" className="img-fluid" /></span>
                    <span>Sports &amp; outdoor</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>{/* /.container */}
        </section>{/* /.section */}
        <section className="products-section pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title">
                <h1>Today Deals</h1>
              </div>
              <ul className="products product-slider">
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/1.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$450.00</del> $320.00</span>
                      <h3><a href="#">Apple MacBook Air Retina Display...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>   
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/2.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$50.00</del> $25.00</span>
                      <h3><a href="#">Trendy Shoes For Man With High Quality...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>   
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/3.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$110.00</del> $30.00</span>
                      <h3><a href="#">Wireless Bluetooth Headphones...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>   
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/w1.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$1000.00</del> $700.00</span>
                      <h3><a href="#">Apple Watch Series 7 45mm Sports Band...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li> 
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/4.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$150.00</del> $85.00</span>
                      <h3><a href="#">Modern Sofa High Quality Living Room...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li> 
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/6.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$150.00</del> $85.00</span>
                      <h3><a href="#">Stylish Short Sleeve T-shirt for Men...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li> 
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/b1.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$250.00</del> $195.00</span>
                      <h3><a href="#">Calvin Klein Men's Slim Fit Suit...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li> 
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/7.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>                                     
                      <span className="price"><del>$900.00</del> $720.00</span>
                      <h3><a href="#">Women's Wedding Dress for Bride Lace...</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>                  
              </ul>  
              <div className="view-more">
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
            </div>{/* /.sa-box */}             
          </div>{/* /.container */}
        </section>{/* /.section */}     
        <section className="products-section pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Flash Sale</h1>
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
              <ul className="products grid-4">
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/9.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>                                  
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$59.00</del> $48.00</span>
                      <h3><a href="#">Sony SRS-XB13 Extra BASS Wireless Portable Compact Speaker</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li> 
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/10.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$445.00</del> $355.00</span>
                      <h3><a href="#">Withings ScanWatch - Hybrid Smartwatch with ECG</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li> 
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/8.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$150.00</del> $85.00</span>
                      <h3><a href="#">Ball Gowns White Ivory Tulle Bridal Dress For Wedding Dresses</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/11.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$150.00</del> $85.00</span>
                      <h3><a href="#">Traditional Crystal Wedding Temple Choker Jewelry Set</a></h3>  
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/12.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$110.00</del> $85.00</span>
                      <h3><a href="#">Amazon Brand - Goodthreads Women's Dress</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/13.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$2700.00</del> $2570.00</span>
                      <h3><a href="#">HDD IP NVR Video System - Remote Access via Smart Phone</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/5.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$400.00</del> $344.00</span>
                      <h3><a href="#">Modern minimalist living room leather small sofa set</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product style-1">
                    <div className="product-thumb">
                      <a href="details.html"><img src="images/product/14.png" alt="Image" className="img-fluid" /></a>
                      <div className="sg-countdown">
                        <ul className="countdown">
                          <li>                    
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>Hrs</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>Mins</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>Secs</p>
                          </li>               
                        </ul>{/* countdown */}                         
                      </div>   
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$1500.00</del> $1200.00</span>
                      <h3><a href="#">Apple 27 inch LCD Screen Black Computer Monitor</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>                     
              </ul>                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.products-section */}       
        <section className="products-section category-products pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Men's Shopping</h1>
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="products">
                    <div className="category-product">
                      <div className="text">
                        <h2>Trending House Utensil</h2>
                        <a href="#" className="btn btn-primary">shop now</a>
                      </div>
                      <div className="thumb">
                        <a href="#"><img src="images/product/2.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="products product-slider-2 arrow-style-2">
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <span className="base">50% OFF</span>
                          <a href="#"><img src="images/product/m1.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$140.00</del> $70.00</span>
                          <h3><a href="#">Trendy Shoes For Man With High Quality...</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                 
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/w1.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$1000.00</del> $700.00</span>
                          <h3><a href="#">Apple Watch Series 7 45mm Sports Band...</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                     
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/b1.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price">$195.00</span>
                          <h3><a href="#">Calvin Klein Men's Slim Fit Suit...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                        
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/m2.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price">$900.00</span>
                          <h3><a href="#">Manufactum Gentleman’s Wallet...</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                              
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/m3.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>  
                          <span className="price">$22.00</span>
                          <h3><a href="#">Men's Jogger Pants Drawstring Zipper...</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                      
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/6.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price">$75.00</span>
                          <h3><a href="#">Stylish Short Sleeve T-shirt for Men...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                      
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                  </ul> 
                </div>
              </div>{/* /.row */}                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.products-section */}       
        <section className="products-section category-products pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Womens Fashion</h1>
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="products">
                    <div className="category-product">
                      <div className="text">
                        <h2>Trending House Utensil</h2>
                        <a href="#" className="btn btn-primary">shop now</a>
                      </div>
                      <div className="thumb">
                        <a href="#"><img src="images/product/3.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="products product-slider-2 arrow-style-2">
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/wo1.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price"><del>$150.00</del> $85.00</span>
                          <h3><a href="#">Women Fashion Spring and Summer...</a></h3>  
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                  
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/wo3.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price">$85.00</span>
                          <h3><a href="#">Kids Cat Ear Decor Sunglasses...</a></h3>  
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                 
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <span className="base">50% OFF</span>
                          <a href="#"><img src="images/product/wo2.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>  
                          <span className="price"><del>$70.00</del> $35.00</span>
                          <h3><a href="#">Women's Classic Jersey Stripe Boy Tee</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/wo4.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>  
                          <span className="price"><del>$150.00</del> $122.00</span>
                          <h3><a href="#">Woman Fashion Ladies Heel Shoes...</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/wo5.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$3000.00</del> $2800.00</span>
                          <h3><a href="#">Woman Fashion Gold Jewellery...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                    
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/12.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$150.00</del> $85.00</span>
                          <h3><a href="#">Goodthreads Women's Dress...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                    
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                  </ul> 
                </div>
              </div>{/* /.row */}                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.products-section */}   
        <section className="offers-section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a href="#" className="add-banner">
                  <img src="images/others/of4.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="add-banner">
                  <img src="images/others/of9.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="add-banner">
                  <img src="images/others/of6.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="add-banner">
                  <img src="images/others/of7.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.offers-section */}       
        <section className="products-section category-products pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Gadget &amp; Electronics</h1>
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="products">
                    <div className="category-product">
                      <div className="text">
                        <h2>Trending House Utensil</h2>
                        <a href="#" className="btn btn-primary">shop now</a>
                      </div>
                      <div className="thumb">
                        <a href="#"><img src="images/product/1.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="products product-slider-2 arrow-style-2">
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/e1.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price">$1999.00</span>
                          <h3><a href="#">Apple iPhone 13 Pro Max Full...</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                              
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <span className="base">50% OFF</span>
                          <a href="#"><img src="images/product/e2.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price"><del>$1600.00</del> $800.00</span>
                          <h3><a href="#">Canon EOS M10 Mirrorless Camera...</a></h3>  
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                              
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/e3.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price"><del>$150.00</del> $85.00</span>
                          <h3><a href="#">Apacer AH360 32GB USB 3.1 Metal Body... </a></h3>  
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/e4.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$900.00</del> $799.00</span>
                          <h3><a href="#">HP OfficeJet 200 Mobile Printers...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                        
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/3.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$110.00</del> $30.00</span>
                          <h3><a href="#">Wireless Bluetooth Headphones...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/9.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$59.00</del> $48.00</span>
                          <h3><a href="#">Wireless Bluetooth Headphones...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                  </ul> 
                </div>
              </div>{/* /.row */}                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.products-section */}    
        <section className="products-section category-products pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Home &amp; Living</h1>
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="products">
                    <div className="category-product">
                      <div className="text">
                        <h2>Trending House Utensil</h2>
                        <a href="#" className="btn btn-primary">shop now</a>
                      </div>
                      <div className="thumb">
                        <a href="#"><img src="images/product/4.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="products product-slider-2 arrow-style-2">
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/hm1.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price">$210.00</span>
                          <h3><a href="#">Wooden round table isolated on white</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                     
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/hm2.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>  
                          <span className="price"><del>$330.00</del> $285.00</span>
                          <h3><a href="#">Simple folding single sofa bed furniture</a></h3>
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <span className="base">50% OFF</span>
                          <a href="#"><img src="images/product/hm3.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <span className="price"><del>$550.00</del> $225.00</span>
                          <h3><a href="#">Student Housing Desks - Made in...</a></h3>  
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                       
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/hm4.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$350.00</del> $285.00</span>
                          <h3><a href="#">Adesso Director Table Lamp, Black...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                     
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/hm5.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$700.00</del> $659.00</span>
                          <h3><a href="#">Le Klint 160 Carronade Large Pendant...</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                  
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                    <li>
                      <div className="sg-product">
                        <div className="product-thumb">
                          <a href="#"><img src="images/product/hm2.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="product-info">
                          <div className="sg-rating">
                            <ul className="global-list">
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li className="active"><span className="fa-solid fa-star" /></li>
                              <li><span className="fa-solid fa-star" /></li>
                            </ul>
                          </div> 
                          <span className="price"><del>$700.00</del> $659.00</span>
                          <h3><a href="#">Simple folding single sofa bed furniture</a></h3> 
                          <div className="icons">
                            <ul className="global-list">
                              <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                              <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                              <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                            </ul>
                          </div>                                                  
                        </div>
                      </div>{/* /.sg-product */}                                  
                    </li>
                  </ul> 
                </div>
              </div>{/* /.row */}                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.products-section */} 
        <section className="cta-section" style={{backgroundImage: 'url(images/bg/cta-bg.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-6">
                <div className="cta-text">
                  <h1>Big Sale Up To <span>70% Off</span></h1>
                  <p>Exclussive Offers For Limited Time</p>
                  <a href="#" className="btn btn-primary">Explore Your Order</a>
                </div>
              </div>
            </div>
          </div>{/* /.container */}
        </section>{/* /.cta-section */}
        <section className="products-section">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Best Selling Product</h1>
                <a href="#">View All <span className="icon fas fa-arrow-right" /></a>
              </div>
              <ul className="products grid-6">
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <span className="base">50% OFF</span>
                      <a href="#"><img src="images/product/wo6.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$150.00</del> $85.00</span>
                      <h3><a href="#">Classic T-shirt Sleeves and Formal...</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/e2.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$1500.00</del> $800.00</span>
                      <h3><a href="#">Canon EOS M10 Mirrorless Camera...</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/wo3.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>  
                      <span className="price"><del>$36.00</del> $30.00</span>
                      <h3><a href="#">Kids Cat Ear Decor Sunglasses...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/wo4.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>  
                      <span className="price"><del>$150.00</del> $122.00</span>
                      <h3><a href="#">Woman Fashion Ladies Heel Shoes...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <span className="base">50% OFF</span>
                      <a href="#"><img src="images/product/hm5.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$340.00</del> $170.00</span>
                      <h3><a href="#">Le Klint 160 Carronade Large...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/b1.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>
                      <span className="price">$195.00</span>
                      <h3><a href="#">Calvin Klein Men's Slim Fit Suit...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/m1.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price">$110.00</span>
                      <h3><a href="#">Trendy Shoes For Man With High Quality...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/wo5.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>  
                      <span className="price">$2800.00</span>
                      <h3><a href="#">Woman Fashion Gold Jewellery...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <span className="base">50% OFF</span>
                      <a href="#"><img src="images/product/wo7.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$300.00</del> $150.00</span>
                      <h3><a href="#">Self Grooming Tips for Aspiring Female...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/hm4.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>  
                      <span className="price"><del>$350.00</del> $285.00</span>
                      <h3><a href="#">Adesso Director Table Lamp, Black...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <a href="#"><img src="images/product/wo1.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div>  
                      <span className="price"><del>$150.00</del> $85.00</span>
                      <h3><a href="#">Women Fashion Spring and Summer...</a></h3>
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
                <li>
                  <div className="sg-product">
                    <div className="product-thumb">
                      <span className="base">50% OFF</span>
                      <a href="#"><img src="images/product/10.png" alt="Image" className="img-fluid" /></a>
                    </div>
                    <div className="product-info">
                      <div className="sg-rating">
                        <ul className="global-list">
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li className="active"><span className="fa-solid fa-star" /></li>
                          <li><span className="fa-solid fa-star" /></li>
                        </ul>
                      </div> 
                      <span className="price"><del>$700.00</del> $350.00</span>
                      <h3><a href="#">Withings ScanWatch Hybrid...</a></h3> 
                      <div className="icons">
                        <ul className="global-list">
                          <li><a href="#"><span><i className="far fa-heart" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-cart-plus" /></span></a></li>
                          <li><a href="#"><span><i className="fas fa-random" /></span></a></li>
                          <li><a href="#"><span><i className="far fa-eye" /></span></a></li>
                        </ul>
                      </div>                                                              
                    </div>
                  </div>{/* /.sg-product */}                                  
                </li>
              </ul>                    
            </div>{/* /.sa-box */}               
          </div>{/* /.container */}
        </section>{/* /.section */}
        <section className="sg-blog-section pt-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Latest News</h1>
                <a href="#">More Post <span className="icon fas fa-arrow-right" /></a>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="post">
                    <div className="entry-header">
                      <div className="entry-thumbnail">
                        <a href="#"><img src="images/blog/1.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                      <div className="entry-content">
                        <h2 className="entry-title"><a href="#">Fashion Trends In 2022 Styles,
                            Colors, Accessories</a></h2>
                        <p>passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="post">
                    <div className="entry-header">
                      <div className="entry-thumbnail">
                        <a href="#"><img src="images/blog/2.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                      <div className="entry-content">
                        <h2 className="entry-title"><a href="#">Objectively conceptualize value-added human...</a></h2>
                        <p>passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="post">
                    <div className="entry-header">
                      <div className="entry-thumbnail">
                        <a href="#"><img src="images/blog/3.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                      <div className="entry-content">
                        <h2 className="entry-title"><a href="#">Simple folding single sofa bed furniture</a></h2>
                        <p>passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="post">
                    <div className="entry-header">
                      <div className="entry-thumbnail">
                        <a href="#"><img src="images/blog/4.jpg" alt="Image" className="img-fluid" /></a>
                      </div>
                      <div className="entry-content">
                        <h2 className="entry-title"><a href="#">Consectetur adipisicing. magnam commodi doloribus.</a></h2>
                        <p>passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* /.row */}                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.sg-blog-section */}
        <section className="product-section p-0">
          <div className="container">
            <div className="sa-box">
              <div className="title justify-content-between">
                <h1>Recent Viewed Product</h1>
              </div>
              <div className="recent-product-slider">
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/wo1.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/w1.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/e2.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/hm5.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/m1.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/m2.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/wo4.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/hm2.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
                <div className="recent-product">
                  <div className="product-thumb">
                    <a href="#"><img src="images/product/hm3.png" alt="Image" className="img-fluid" /></a>
                  </div>
                  <div className="overlay">
                    <h2><a href="#"><i className="fa-solid fa-link" /></a></h2>
                  </div>
                </div>
              </div>                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.product-section */}
        <section className="sg-convenience mb-3">
          <div className="container">
            <div className="sa-box">
              <ul className="global-list convenience-slider">
                <li>
                  <div className="convenience">
                    <div className="icon">
                      <i className="fa-solid fa-truck" />
                    </div>
                    <div className="text">
                      <span>Free Delivery</span>
                      <p>For all orders over 5%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="convenience">
                    <div className="icon">
                      <i className="fa-solid fa-rotate-left" />
                    </div>
                    <div className="text">
                      <span>30 Days Return</span>
                      <p>If goods have problems</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="convenience">
                    <div className="icon">
                      <i className="fa-regular fa-credit-card" />
                    </div>
                    <div className="text">
                      <span>Secure Payment</span>
                      <p>100% secure payment</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="convenience">
                    <div className="icon">
                      <i className="fa-solid fa-headset" />
                    </div>
                    <div className="text">
                      <span>24/7 Support</span>
                      <p>Dedicated Support</p>
                    </div>
                  </div>
                </li>
              </ul>                    
            </div>{/* /.sa-box */}
          </div>{/* /.container */}
        </section>{/* /.sg-convenience */}
        <section className="subscribe-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="subscribe-text">
                  <div className="icon">
                    <span><i className="fa-regular fa-envelope" /></span>
                  </div>
                  <div className="text">
                    <p>Subscribe to our newsletter</p>
                    <span>Get all the latest information on Events, Sales and Offers.</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" placeholder="Enter Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.subscribe-section */}        
        <footer className="footer-section">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="footer-widget">
                    <h3>About</h3>                               
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum rem. Voluptas earum, aut ullam, vero officia consectetur dolores! Illum impedit distinctio, esse quae animi. Fugiat sequi libero temporibus.</p>
                    <div className="social">
                      <ul className="global-list">
                        <li><a href="#"><span><i className="fa-brands fa-facebook" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-twitter" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-linkedin" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-instagram" /></span></a></li>
                        <li><a href="#"><span><i className="fa-brands fa-pinterest" /></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-2">
                  <div className="footer-widget">
                    <h3>Useful Links</h3>
                    <ul className="global-list">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">All Categories</a></li>
                      <li><a href="#">All Brands</a></li>
                      <li><a href="#">All Products</a></li>
                      <li><a href="#">Offers</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-2">
                  <div className="footer-widget">
                    <h3>My Account</h3>
                    <ul className="global-list">
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Purchase History</a></li>
                      <li><a href="#">My Wishlist</a></li>
                      <li><a href="#">Track Order</a></li>
                      <li><a href="#">My Account</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="footer-widget">
                    <h3>Contact Us</h3>
                    <div className="address">
                      <ul className="global-list">
                        <li>
                          <h4><span><i className="fa-solid fa-house" /></span>Address</h4>
                          <p>Level 1, 244 Smith Street,<br /> Fitzroy Vic 3065 AU</p>
                        </li> 
                        <li>
                          <h4><span><i className="fa-solid fa-envelope" /></span>Email</h4>
                          <a href="#">support@ecomart.com</a>
                        </li> 
                        <li>
                          <h4><span><i className="fa-solid fa-phone" /></span>Phone</h4>
                          <a href="tel:012345678910">+0123 456 78910</a>
                        </li> 
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-2">
                  <div className="footer-widget">
                    <h3>Mobile Apps</h3>
                    <ul className="global-list">
                      <li><a href="#"><img src="images/others/footer1.png" alt="Image" className="img-fluid" /></a></li>
                      <li><a href="#"><img src="images/others/footer2.png" alt="Image" className="img-fluid" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>{/* /.row */}                    
            </div>{/* /.container */}
          </div>{/* /.footer-top */}        
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-content">
                <div className="copyright">
                  <p>Copyright © 2022 ChtStudio Varient - All Rights Reserved.</p>
                </div>
                <div className="payment-card">
                  <ul className="global-list">
                    <li><img src="images/others/card1.png" alt="Image" className="img-fluid" /></li>
                    <li><img src="images/others/card2.png" alt="Image" className="img-fluid" /></li>
                    <li><img src="images/others/card3.png" alt="Image" className="img-fluid" /></li>
                  </ul>
                </div>
              </div>
            </div>{/* /.container */}
          </div>{/* /.footer-bottom */}
        </footer>{/* /.footer-section */}
      </div>
    </>
  )
}

export default Home
