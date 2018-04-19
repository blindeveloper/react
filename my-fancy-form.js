class MyFancyForm extends React.Component {
  constructor() {
    super()
    this.availableOptions = ['apple','grape','cherry','orange','pear','peach']
    this.state = {multiline:'', commaSeparate:'', multiselect:[]}

    this.hadleCommaSeparateChange = event => {
      const {value} = event.target
      const allVall = value.split(',').map(v => v.trim()).filter(Boolean)
      this.setState({
        commaSeparate: value,
        multiline: allVall.join('\n'),
        multiselect: allVall
      })
    }
    this.hadleMultilineChange = event => {
      const {value} = event.target
      const allVall = value.split('\n').map(v => v.trim()).filter(Boolean)
      this.setState({
        commaSeparate: allVall.join(','),
        multiline: value,
        multiselect: allVall
      })
    }
    this.hadleMultiSelectChange = event => {
      const {value} = event.target
      const allVall = Array.from(event.target.selectedOptions).map(o=>o.value)
      this.setState({
        commaSeparate: allVall.join(','),
        multiline: allVall.join('\n'),
        multiselect: allVall
      })
    }
  }

  render(){
    const {commaSeparate,multiline, multiselect} = this.state
    return (
      <form>
        <label>
          Comma Separate Change:<br/>
          <input type="text" onChange={this.hadleCommaSeparateChange} value={commaSeparate}/><br/>
          Multiline Change:<br/>
          <textarea name="comment" cols="40" rows="3" onChange={this.hadleMultilineChange} value={multiline}></textarea><br/>
          Multiselect Change:<br/>
          <select multiple size={this.availableOptions.length} onChange={this.hadleMultiSelectChange} value={multiselect}>
            {this.availableOptions.map(v => <option value={v}>{v}</option>)}
          </select>
        </label>
      </form>
    )
  }
  
}

ReactDOM.render(
  <MyFancyForm/>,
  document.getElementById('root')
)