import "./index.css";

function PlayOptions({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
    return (
        <div className="bg-gray-100 m-4 p-8 rounded-lg shadow-lg">
            <div className="">
                {emoji}
                <h1 className="text-3xl mb-4 boldonse-regular">{title}</h1>
                <p className="text-lg text-gray-700 mb-8">{desc}</p>
            </div> 
        </div>
    )
}
  
export default PlayOptions