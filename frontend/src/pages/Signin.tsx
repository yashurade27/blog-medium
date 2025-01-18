import Auth from "../components/Auth";
import Quote from "../components/Quote";

export default function Signin() {
    return <div className="flex flex-row">
        <div className="basis-1/2">
            <Auth type="signin"/>
        </div>
        <div className="invisible lg:visible basis-1/2">
            <Quote/>
        </div>
        
    </div>
}