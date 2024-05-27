
const parent = React.createElement(
    "div",
    { id: "parent" }, 
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1",{},"I am H1 Tag of child1!"),
        React.createElement("h2",{},"I am H2 Tag of child1!")
    ]
    ),
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1",{},"I am H1 Tag of child2!"),
        React.createElement("h2",{},"I am H2 Tag of child2!")
    ])
    );
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
