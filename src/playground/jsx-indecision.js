console.log('App is Running!');

// JSX - JavaScript XML
const textOne={
    title :'Some title',
    subtitle :'This is a subtitle',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        textOne.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const reset=() => {
    textOne.options=[];
    render();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * textOne.options.length);
    const option = textOne.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById('app');

//const numbers = [55, 101, 100];

const render = () => {
    const template = (
        <div>
            <h1>{textOne.title.toUpperCase()}</h1>
            {textOne.subtitle && <p>{textOne.subtitle}</p>}
            <p>{textOne.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={textOne.options.length === 0} onClick ={onMakeDecision}>What shuold I do?</button>
            <button onClick={reset}>Remove All</button>
                      
            <ol>
               {
                   textOne.options.map((option) => {
                       return <li key ={option}> Option: {option}</li>;
                   })
               }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot);   
};

render();