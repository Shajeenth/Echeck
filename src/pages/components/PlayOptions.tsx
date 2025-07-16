import "./index.css";
import {Link} from "react-router-dom";

function PlayOptions({ emoji, title, desc, goTo }: { emoji: string; title: string; desc: string; goTo: string }) {
    return (
        <Link to={goTo}>
            <div className="bg-gray-100 m-4 p-8 rounded-lg shadow-lg duration-300 hover:-translate-y-4">
                <div className="">
                    <h1 className="text-5xl mb-4">{emoji}</h1>
                    <h1 className="text-3xl mb-4 boldonse-regular">{title}</h1>
                    <p className="text-lg text-gray-700">{desc}</p>
                </div> 
            </div>
        </Link>
    )
}
  
export default PlayOptions