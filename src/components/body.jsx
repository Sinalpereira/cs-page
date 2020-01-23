import React, { Component } from 'react';
import searchImage from '../Task File Icons/ct_search_large.svg';
import smallSearch from '../Task File Icons/entry_search_small.svg';
import dropdown from '../Task File Icons/grey_drop_down.svg';
import cascade from '../Task File Icons/cascade.svg';
import listView from '../Task File Icons/ct_list_view.svg';
import languageDropDown from '../Task File Icons/language_dropdown.svg';
import plusMore from '../Task File Icons/plus_more.svg';
import leftArrowOne from '../Task File Icons/pagination_1.svg';
import leftArrowTwo from '../Task File Icons/pagination_2.svg';
import rightArrowOne from '../Task File Icons/pagination_3.svg';
import rightArrowTwo from '../Task File Icons/pagination_4.svg';
import downArrow from '../Task File Icons/pagination_5.svg';



class MainSection extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main-section">
                    <div className="search-content-type-wrapper-div">
                        <section className="search-content-type">
                            <span className="content-type-title">content types</span>
                            <span className="search-image"><img src={searchImage} alt="search-image"></img></span>
                            <span className="list-view"><img src={listView} alt="list-view" className="list-view-image"></img></span>
                        </section>
                        <section className="display-all-content-types">
                            <p className="content-type-title">
                                <a>All Content Types</a>
                            </p>
                        </section>
                        <section className="all-content-types">
                            <div className="content-type"><a className="ct-link">Blog</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Categories</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Product</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Product Home</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Locations</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Reviews</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Inventry</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Payments</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Offers</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Rejects</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Returns</a></div>
                            <div className="content-type common-spacing-ct"><a className="ct-link">Imports</a></div>
                        </section>
                    </div>
                    <div className="main-wrapper">
                        <div className="entries-section">
                            <div className="entries-title">
                                <p className="title">Entries</p>
                            </div>
                            <div className="search-entries">
                                <span><img src={smallSearch} alt="search-image" className="search-image"></img></span>
                                <span
                                ><input type="text" name="search" placeholder="Search entries"
                                    /></span>
                            </div>
                            <div className="advanved-option">
                                <a className="adv-btn">Advanced</a>
                            </div>
                            <div className="dropdown-list-language">
                                <span className="language-selection">English-United States</span>
                                <span><img src={languageDropDown} alt="dropdown-icon" className="dropdown-for-language"></img></span>
                            </div>

                            <div className="button-for-new-entry">
                                <button className="entry-button">New Entry</button>
                            </div>
                        </div>
                        <div className="top-header">
                            <div className="filters">
                                <a className="filter-link">Filters</a></div>
                            <div className="publish-status-wrapper">
                                <a className="ps-link">Publish status</a>
                                <span><img src={dropdown} alt="dropdown" class="dropdown-list"></img></span></div>
                            <div className="tags">
                                <a className="tag-link">Tags</a>
                                <span class="dropdown-for-tags"><img src={dropdown} alt="dropdown" class="dropdown-list"></img></span></div>
                            <div className="more-options">
                                <span><img src={plusMore} className="plus-more-image"></img></span>
                                <a className="more-features">More</a>
                            </div>
                            <div className="show-entries">
                                <p className="total-entries">Showing 1-7 of 32 entries</p></div>
                        </div>
                        <div className="entry-wrapper">
                            <div className="show-ct">
                                <ul>
                                    <li className="row row-heading">
                                        <div className="row-title w-30 font-12 padding-14">
                                            <span>Title</span></div>
                                        <div className="row-title row-common w-20 ml-20 font-12 padding-14">Content type</div>
                                        <div className="row-title row-common font-12 w-20 padding-14">Modified by
                                        <span className="modified-by-dropdown font-12">
                                                <img src={dropdown} alt="drop-down"></img>
                                            </span>
                                        </div>
                                        <div className="row-title row-common font-12 w-20 padding-14">Publish status</div>
                                        <div className="row-title row-common font-12 w-20 padding-14">
                                            <div className="cascade-dropdown-wrapper">
                                                <img
                                                    src={cascade} alt="cascade"
                                                    className="cascade"
                                                />
                                                <span><img src={dropdown} alt="dropdown-icon" className="dropdown-list"></img></span>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="row br-5-top">
                                        <div className="row-title w-30"><a className="link-ct-title">How Content Localization</a></div>
                                        <div className="row-title w-20 ml-20"><a className="ct">Blog</a></div>
                                        <div className="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p class="row-description">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div class="row-title w-20">
                                            <p>Not Published</p>
                                            {/* <ul >
                                                <li className="publish-status">
                                                    Not Published
                                                </li>
                                            </ul> */}
                                        </div>
                                        <div class="row-title w-20"></div>
                                    </li>
                                    <li class="row">
                                        <div class="row-title w-30"><a className="link-ct-title">6 Technologies to Transform</a></div>
                                        <div class="row-title w-20 ml-20">Blog</div>
                                        <div class="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p class="row-description ">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div class="row-title w-20">
                                            <ul>
                                                <li className="staging color-green">Staging</li>
                                                <li className="production color-blue">Production</li>
                                            </ul>
                                        </div>
                                        <div className="row-title w-20"></div>
                                    </li>
                                    <li className="row">
                                        <div className="row-title w-30"><a className="link-ct-title">The Markers guide</a></div>
                                        <div className="row-title w-20 ml-20">Blog</div>
                                        <div className="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p className="row-description ">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div className="row-title w-20">
                                            <ul>
                                                <li className="publish-status color-green">Staging</li>
                                            </ul>
                                        </div>
                                        <div className="row-title w-20"></div>
                                    </li>
                                    <li className="row">
                                        <div className="row-title w-30"><a className="link-ct-title">Create Reusable Fields</a></div>
                                        <div className="row-title w-20 ml-20">Blog</div>
                                        <div className="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p className="row-description ">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div className="row-title w-20"><ul>
                                            <li className="staging color-green">Staging</li>
                                            <li className="production color-blue">Production</li>
                                        </ul>
                                        </div>
                                        <div className="row-title w-20"></div>
                                    </li>
                                    <li className="row">
                                        <div className="row-title w-30"><a className="link-ct-title">How Marketing will be transformed</a></div>
                                        <div className="row-title w-20 ml-20">Blog</div>
                                        <div className="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p className="row-description ">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div className="row-title w-20">
                                        <p>Not Published</p>
                                            {/* <ul >
                                                <li className="publish-status">
                                                    Not Published
                                                </li>
                                            </ul> */}
                                        </div>
                                        <div className="row-title w-20"></div>
                                    </li>
                                    <li className="row">
                                        <div className="row-title w-30"><a className="link-ct-title">Headless Ecommerce Architecture</a></div>
                                        <div className="row-title w-20 ml-20">Blog</div>
                                        <div className="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p className="row-description ">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div className="row-title w-20">
                                        <p>Not Published</p>
                                            {/* <ul >
                                                <li className="publish-status">
                                                    Not Published
                                                </li>
                                            </ul> */}
                                        </div>
                                        <div className="row-title w-20"></div>
                                    </li>
                                    <li className="row">
                                        <div className="row-title w-30"><a className="link-ct-title">Introducing Management Tokens</a></div>
                                        <div className="row-title w-20 ml-20">Blog</div>
                                        <div className="row-title w-20">
                                            <p className="modified-by-name"> Richton Wins</p>
                                            <p className="row-description ">Dec 25 2018,02;30 PM</p>
                                        </div>
                                        <div className="row-title w-20"><ul>
                                            <li className="staging color-green">Staging</li>
                                            <li className="production color-blue">Production</li>
                                        </ul>
                                        </div>
                                        <div className="row-title w-20"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <section className="pagination-wrapper">
                            <span className="pagination-arrow left-arrow-one"><img src={leftArrowOne} alt="left-arrow-one" className="pagination-icon"></img></span>
                            <span className="pagination-arrow left-arrow-two" ><img src={leftArrowTwo} alt="left-arrow-two" className="pagination-icon"></img></span>
                            <span className="pagination-arrow">Page 1</span>
                            <span className="pagination-arrow down-arrow"><img src={rightArrowOne} alt="dropdown-arrow" className="pagination-icon"></img></span>
                            <span className="pagination-arrow right-arrow-one"><img src={rightArrowTwo} alt="right-arrow-one" className="pagination-icon"></img></span>
                            <span className="pagination-arrow right-arrow-two"><img src={downArrow} alt="right-arrow-two" className="pagination-icon"></img></span>
                        </section>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default MainSection;
