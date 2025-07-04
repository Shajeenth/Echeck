import PlayOptions from "./components/PlayOptions";

function Play() {

    return (
        <div className="w-screen h-screen grid grid-cols-3 place-content-center p-20">
            <PlayOptions emoji="&#128187;" title="Online" desc="Send a link to a friend to play against them online. An account must be required in order to save your game."/>
            <PlayOptions emoji="&#128591;" title="Pass n' Play" desc="Play chess offline against a friend! Choose a specific time constraint and play chess on the same computer."/>
            <PlayOptions emoji="&#129302;" title="Bot" desc="Play against Echeck's own chess bot. Select a time constraint for yourself, while the bot has none."/>
        </div>
    )
  }
  
  export default Play