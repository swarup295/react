 const heading1 = React.createElement("h1", {}, "hello")
        const heading2 = React.createElement("h2", {}, "bye")
        const heading3 = React.createElement("h3", {}, "come")
        const wrapper = React.createElement("div", {}, [heading1, heading2, heading3])
        // const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(wrapper)

        const test = React.createElement("h2", {
            id: "test",
            style: {
                color: "red", backgroundColor: "#000"
            }
        }, "you")
        const root =ReactDOM.createRoot(document.getElementById("root"))
        root.render(test)
        console.log(test);
