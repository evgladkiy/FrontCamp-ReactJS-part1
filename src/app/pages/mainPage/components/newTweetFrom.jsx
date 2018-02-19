import React, { Component } from 'react';

class NewTweetForm extends Component {
    static getTweetDate() {
        const date = new Date();
        return `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;
    }

    static getIntInRange(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    constructor() {
        super();
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }


    formSubmitHandler(e) {
        const author = this.authorInput.value.trim();
        const email = this.email.value.trim();
        const text = this.textarea.value.trim();

        e.preventDefault();

        if (author !== '' && email !== '' && text !== '') {
            const randomInt = NewTweetForm.getIntInRange(0, 100);
            const sex = NewTweetForm.getIntInRange(0, 100) % 2 === 0 ? 'men': 'women';
            const newTweet = {
                tweetAuthor: this.authorInput.value,
                email: this.email.value,
                tweetText: this.textarea.value,
                likes: 0,
                retweets: 0,
                comments: [],
                id: NewTweetForm.getIntInRange(0, 100000000000),
                tweetDate: NewTweetForm.getTweetDate(),
                avatar: `https://randomuser.me/api/portraits/${sex}/${randomInt}.jpg`,
            };

            this.authorInput.value = '';
            this.email.value = '';
            this.textarea.value = '';

            this.props.addTweet(newTweet);
        }
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <h3>Write new tweet</h3>
                <div className="input-container">
                    <label htmlFor="author">Author Name<span>*</span></label>
                    <input
                      id="author"
                      className="input"
                      type="text"
                      placeholder="Gregg Popovich"
                      required
                      ref={(input) => { this.authorInput = input; }}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input
                      id="email"
                      className="input"
                      type="email"
                      placeholder="mail@example.com"
                      required
                      ref={(input) => { this.email = input; }}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="textarea">Tweet text<span>*</span></label>
                    <textarea
                      id="textarea"
                      className="input"
                      placeholder="any tweet text"
                      required
                      ref={(textarea) => { this.textarea = textarea; }}>
                  </textarea>
                </div>
                <div className="btn-container">
                    <button
                      type="button" className="btn"
                      onClick={this.props.toggleForm}>
                        Close Form
                        <i className="fas fa-times"></i>
                    </button>
                    <button type="submit" className="btn">
                        Publish Tweet
                        <i className="fas fa-location-arrow"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default NewTweetForm;
