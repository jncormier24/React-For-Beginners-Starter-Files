import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  goToStore (e) {
    e.preventDefault()
    // grab the text from the box
    const storeID = this.storeInput.value
    // transition from '/' to '/store/:storeID' (using imperitive vs component)
    this.context.router.transitionTo(`/store/${storeID}`)
  }
  render () {
    return (
      <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
        <h2>Enter a Store Name</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button>Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
