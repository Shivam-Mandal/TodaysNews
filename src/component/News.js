// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import PropTypes from 'prop-types'
// export default class News extends Component {
//     static defaultProps = {
//         country: "in",
//         pageSize: 6
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         number: PropTypes.number,
//         category: PropTypes.string

//     }
//     constructor() {
//         super();
//         this.state = {
//             articles: [],
//             loading: true,
//             page: 1,
//             totalResults: 0,
//         };
//     }
//     async updateNews() {

//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27bef9b8b00b48dfb125eed296a894c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         const response = await fetch(url);
//         const data = await response.json();

//         this.setState({
//             articles: data.articles || [],
//             loading: false,
//             // page:1,
//             totalResults: data.totalResults || 0,
//         });

//     }
//     async componentDidMount() {
//         try {
//             const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27bef9b8b00b48dfb125eed296a894c6&page=1&pageSize=${this.props.pageSize}`;
//             const response = await fetch(url);
//             const data = await response.json();

//             this.setState({
//                 articles: data.articles || [], // Ensure articles is an array
//                 loading: false,
//                 totalResults: data.totalResults || 0,
//             });
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             this.setState({
//                 articles: [],
//                 loading: false,
//                 totalResults: 0,
//             });
//         }
//         //    await this.updateNews();
//     }

//     previousPage = async () => {
//         // try {
//         //     if (this.state.page > 1) {
//         //         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27bef9b8b00b48dfb125eed296a894c6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         //         const response = await fetch(url);
//         //         const data = await response.json();

//         //         this.setState({
//         //             articles: data.articles || [],
//         //             loading: false,
//         //             page: this.state.page - 1,
//         //             totalResults: data.totalResults || 0,
//         //         });
//         //     }
//         // } catch (error) {
//         //     console.error("Error fetching data:", error);
//         // }
//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();
//     }
//     nextPage = async () => {
//         // try {
//         //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//         //         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27bef9b8b00b48dfb125eed296a894c6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         //         const response = await fetch(url);
//         //         const data = await response.json();
//         //         this.setState({
//         //             articles: data.articles || [],
//         //             totalResults: data.totalResults || 0,
//         //             loading: false,
//         //             page: this.state.page + 1,
//         //         });
//         //     }
//         // } catch (error) {
//         //     console.error("Error fetching data:", error);
//         // }
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews();

//     }

//     render() {
//         return (
//             <>
//                 <div className='container'>
//                     <h2 className='mt-3 text-center'>Today's headline</h2>

//                     {this.state.loading ? (
//                         <h5>Loading...</h5>
//                     ) : (
//                         <div className="row">
//                             <h4 className='mt-3'>News related to {this.props.title}</h4>

//                             {this.state.articles.map((e) => (
//                                 e.title && (
//                                     <div className="col-md-4" key={e.url}>
//                                         <NewsItem title={e.title ? e.title : ""} desc={e.description ? e.description : ""} url={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
//                                     </div>
//                                 )
//                             ))}
//                         </div>
//                     )}
//                     <div className='d-flex justify-content-between my-5'>
//                         <button disabled={this.state.page <= 1} onClick={this.previousPage} type="button" id='prev' className="btn btn-primary ">&larr; Previous</button>
//                         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextPage} type="button" id='next' className="btn btn-primary ">Next &rarr;</button>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
    };

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };
        document.title = `${this.props.title}-NewsToday`;
    }

    async updateNews() {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27bef9b8b00b48dfb125eed296a894c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            const response = await fetch(url);
            const data = await response.json();

            this.setState({
                articles: data.articles || [],
                loading: false,
                totalResults: data.totalResults || 0,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({
                articles: [],
                loading: false,
                totalResults: 0,
            });
        }
    }

    async componentDidMount() {
        await this.updateNews();
    }

    previousPage = () => {
        this.setState({ page: this.state.page - 1 }, this.updateNews);
    };

    nextPage = () => {
        this.setState({ page: this.state.page + 1 }, this.updateNews);
    };

    render() {
        return (
            <>
                <div className='container'>
                    <h2 className='mt-3 text-center'>Today's headline</h2>

                    {this.state.loading ? (
                        <p className='text-secondary'>Loading...Please wait</p>
                    ) : (
                        <div className="row">
                            <h4 className='mt-3'>News related to {this.props.title}</h4>

                            {this.state.articles.map((e) => (
                                e.title && (
                                    <div className="col-md-4" key={e.url}>
                                        <NewsItem title={e.title || ''} desc={e.description || ''} url={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                    </div>
                                )
                            ))}
                        </div>
                    )}
                    <div className='d-flex justify-content-between my-5'>
                        <button disabled={this.state.page <= 1} onClick={this.previousPage} type="button" id='prev' className="btn btn-primary ">&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextPage} type="button" id='next' className="btn btn-primary ">Next &rarr;</button>
                    </div>
                </div>
            </>
        );
    }
}



