import { useState } from "react"




const Footer = () => {
let today = new Date()
let thisyear = today.getFullYear()
function thisyear_plus1(){ return thisyear += 1}

setTimeout(thisyear_plus1,100)
console.log(thisyear)

let {date,setDate} = useState("")


 return ( <div>


    
        

<h3>Copyright {thisyear}
</h3>


    </div> );
}
 
export default Footer;