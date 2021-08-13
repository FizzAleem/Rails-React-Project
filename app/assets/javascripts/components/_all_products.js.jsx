class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/products.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ products: data }) });
  }

  render(){
    var products = this.state.products.map((product) => {
      return(
       <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
       </div>
      )
     })
     return(
      <div>
       {products}
      </div>
     )
  }
}
