import { Authbanner } from "../components/Authbanner";
import { Authcredentials } from "../components/Authcredentials";
// okay over here we had to bring up or import comonents and link to our routes when we are routing
//toward the particular route whih we made in app.tsx file and here when we route to auth page we will get this as a 
//output now

function Auth(){
    return <div style={{display:"flex"}}>
        <div style={{flex:1}}>
           <Authbanner/> 
        </div>
        <div style={{flex:1}}>
             <Authcredentials/>
        </div>
        
       
    </div>
}

export default Auth
