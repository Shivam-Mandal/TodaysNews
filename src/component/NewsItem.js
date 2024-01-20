import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let { title, desc, newsUrl, url, author, date, source } = this.props;

        return (
            <>

                <div className="card my-3 shadow-lg">

                    <img src={url} className="card-img-top" alt="" />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%" }}>
                            {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className='text-body-secondary'>By {author ? author : ""} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}
