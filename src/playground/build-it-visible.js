class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) =>{
            return {
                visibility : !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            { this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.visibility && (
                <div>
                <p>This is the the hidden message!</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// const app = {
//     title: 'Visibility Toggle',
// };
// let Visibility =false;

// const toggleVisibility = () => {
//     Visibility = !Visibility
//     render();
// };

// const render = () => {
// const templateFive = (
//     <div>
//         <h1>{app.title.toUpperCase()}</h1>
//         <button onClick={toggleVisibility}>
//             {Visibility ? 'Hide Details' : 'Show Details'}
//         </button>
//         {Visibility && (
//             <div>
//                 <p>These are the details that you were waiting for!</p> 
//             </div>
//         )}
//     </div>

// );
// ReactDOM.render(templateFive, appRoot); 

// };
// render();
