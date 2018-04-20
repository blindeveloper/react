class App extends React.Component {
    constructor(props) {
        super(props);
        this.allItems = [
            { id: 'a', value: 'apple' },
            { id: 'o', value: 'orange' },
            { id: 'g', value: 'grape' },
            { id: 'p', value: 'pear' }
        ]
    }

    render() {
        return (
            <div>
                {
                    this.allItems.map(item => (
                        <div key={item.id}>{item.value}</div>
                    ))
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)