import React, { Component } from 'react'
import superagent from 'superagent'

class EmailShare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shareToEmail: ''
    }
  }

  updateShareform(e) {
    this.setState({shareToEmail: e.target.value})
  }

  submit(e) {
    console.log('sfd')
    e.preventDefault()
    this.props.setLoading(true)
    superagent.post('https://v4-api.smilebooth.com/api/v4/sharers/email/share')
      .send({
        email: "jake.mchargue@gmail.com",
        uploadId: "17940",
        galleryId: "3"
      })
      .end(this.props.shareResponse)
  }

  render() {
    return (
      <div>
        <header><h2>Email</h2></header>
        <form onSubmit={this.submit.bind(this)}>
          <label>To Email</label>
          <fieldset>
            <input name="toEmail" type="text" placeholder="recipient email" value={this.state.shareToEmail} onChange={this.updateShareform.bind(this)} />
            </fieldset>
          <input type="submit" value="send!" />
        </form>
      </div>
    )
  }
}

export default EmailShare