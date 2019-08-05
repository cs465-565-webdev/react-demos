const Book = ( { name, isbn, pages, released } ) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, isbn),
        React.createElement("h2", {}, pages),
        React.createElement("h2", {}, released)
    ]);
};

const App = () => {
    return React.createElement("div", { id: "some-attr" }, [
            React.createElement("h1", {}, "Game of Thrones Library"),
            React.createElement(Book, {
                name: "A Game of Thrones",
                isbn: "978-0553103540",
                pages: 694,
                released: 1996
            }),
            React.createElement(Book, {
                name: "A Clash of Kings",
                isbn: "978-0553108033",
                pages: 768,
                released: 1999
            }),
            React.createElement(Book, {
                name: "A Storm of Swords",
                isbn: "978-0553106633",
                pages: 992,
                released: 2000
            })
        ]
    );
};

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);