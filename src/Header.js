import React from "react";

// Create a header component using arrow function...

const Header = () => (
    <header className="jumbotron">
        <h1>Tic-Tac-Toe</h1>
        <hr></hr>
        <h5>Tic-tac-toe is a two person strategy game, often played by children. The game is also known as “Noughts and Crosses” (Old English) or “Xs and Os” (Ireland).
        In the 1983 movie “WarGames”, Tic-tac-toe was used to teach a military Super Computer called (WOPR), that thermal nuclear war and Tic-tac-toe are a very similar game;
            when played more often than not, there are no winners and sometimes a stalemate really isn’t such a bad thing.</h5>
        <hr></hr>
        <div class="d-flex flex-row justify-content-around">
            <a href="https://en.wikipedia.org/wiki/Tic-tac-toe#:~:text=Games%20played%20on%20three%2Din,around%20the%20first%20century%20BC.&text=The%20game's%20grid%20markings%20have%20been%20found%20chalked%20all%20over%20Rome." target="_blank">Game History (Wiki)</a>
            <a href="https://www.imdb.com/title/tt0086567/" target="_blank">WarGames (IMDb)</a>
        </div>
    </header>
);

// Here is the same component using a class syntax..
/*
class Header extends React.Component {
    render() {
        return (
            <header className="jumbotron">
                <h1>Tic-Tac-Toe</h1>
                <hr></hr>
                <h5>Tic-tac-toe also known as "Noughts and Crosses" or 'Xs and Os', is a strategy game most often played by children.
                This game was used in the 1983 movie "WarGames" to teach a Super Computer (WOPR) that thermal nuculear war is a very  similar game;
                when played more often than not there is no winner and at best a stalemate is all you can hope for...</h5>
                <hr></hr>
                <a href="https://en.wikipedia.org/wiki/Tic-tac-toe#:~:text=Games%20played%20on%20three%2Din,around%20the%20first%20century%20BC.&text=The%20game's%20grid%20markings%20have%20been%20found%20chalked%20all%20over%20Rome.">Game History (Wiki)</a>
                <br></br>
                <a href="https://www.imdb.com/title/tt0086567/">WarGames (imdb)</a>
            </header>
        );
    }
}
*/
export default Header;