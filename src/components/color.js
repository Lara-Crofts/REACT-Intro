// state and props example



import React, {useState} from "react"
const ColorChanger = (props) => {
    //change the color
    const [currentColor, setCurrentColor] = useState(0)
    const changeColor = () => {
        setCurrentColor((prevColor) => (prevColor + 1) % props.colors.length)
    };

    return(
        <div>
            <button onClick={changeColor}>change color</button>
            <div
        style={{
          backgroundColor: props.colors[currentColor],
          width: "200px",
          height: "200px",
          margin: "auto",
          padding: "auto",
        }}
      ></div>
        </div>
    );
};

const App = () => {



    const colors = ["red", "green", "blue", "yellow"]
        return (

            <div>

                <h1>
                    Color changer appppppp!!!! 
                </h1>

                <ColorChanger colors = {colors}/>
            </div>
        );
};

//export to app.js file 
export default App; 