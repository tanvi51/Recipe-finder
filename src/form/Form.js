import React, {Component} from 'react';
import './form/Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searched: false,
            foodItem:"",
        };
    }
    getRecipe = (e) => {
        e.preventDefault;

        var Item = getElementById("text").value;

        this.setState({
            searched: true,
            foodItem: Item,
        });
    };

    render() {
        return (
            <div>
                <div className="App-header">
                    <h1 className="App-title">Recipe Finder</h1>
                    <form className="form">
                        <input type="text" placeholder="Enter the Name of your dish" id="text" />
                        <input type="submit" value="Get Ingredients" onclick={this.getRecipe} />
                        </form>
                </div>  
                {this.state.searched ?(
                    <Recipe foodItem={this.state.foodItem} />
                ) : (
                  <h2 className="body">Type a Dish name to search for it's ingredient</h2>                 
                )};
            </div>
        );
    }
}

export default Form;