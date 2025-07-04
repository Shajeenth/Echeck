import "./index.css";

function Title() {
  return (
    <div className="w-screen h-screen grid grid-flow-col grid-rows-5 place-content-center p-20">
      <div className="bg-amber-800 row-span-4">
        some image
      </div>
      <div>
        <p className="text-center mb-2">An online platform to play chess</p>
        <h1 className="text-6xl boldonse-regular"> ECHECK </h1>
      </div>
    </div>
  )
}

export default Title