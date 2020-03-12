import React, { Component } from 'react';
import Link from 'next/link';
//import {Link} from '../../../routes'

class Listing extends Component {

    constructor(props){
        super(props);
       
        this.state={
         
        }

        this.data = [{
        "productSize": "",
        "item": "DELUXE COOKED HAM",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "102",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "BAVARIAN SMOKED HAM ",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "166",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "BLACK FOREST BEECHWOOD HAM L/S",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "11005",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "TAVERN SMOKED HAM",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "158",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "ROSEMARY HAM",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "173",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "PESTO PARMESAN HAM",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "189",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "DELI SWEET SLICE SMOKED HAM",
        "plu_upc": "",
        "price": " $4.95 ",
        "productId": "11018",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "HABANERO HAM ",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "11044",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "ITALIAN RSTD HAM (PROSC COTTO)",
        "plu_upc": "",
        "price": " $5.79 ",
        "productId": "11022",
        "catId": "1",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "DELUXE ROAST BEEF TOP-ROUND",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "235",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "LONDONPORT ROAST BEEF",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "915",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "ITALIAN ROAST BEEF TOP-ROUND",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "232",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "SEASOND ROAST BEEF TOP-ROUND",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "246",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "CORNED BEEF TOP-ROUND",
        "plu_upc": "",
        "price": " $6.50 ",
        "productId": "197",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "PASTRAMI BEEF TOP-ROUND",
        "plu_upc": "",
        "price": " $6.50 ",
        "productId": "205",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "LONDON BROIL ROAST BEEF",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "12011",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "MESQUITE SMOKEHOUSE BRISKET ",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "12012",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "CAJUN ROAST BEEF TOP-ROUND",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "227",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "WELL DONE SEASONED ROAST BEEF",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "12004",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "1ST CUT CORNED BEEF BRISKET",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "206",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "1ST CUT PASTRAMI BRISKET",
        "plu_upc": "",
        "price": " $6.95 ",
        "productId": "210",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "NAVEL PASTRAMI FS serve hot",
        "plu_upc": "",
        "price": " $5.75 ",
        "productId": "341",
        "catId": "2",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "OVENGOLD TURKEY BREAST",
        "plu_upc": "",
        "price": " $5.00 ",
        "productId": "278",
        "catId": "3",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "CRACKED PEPPERMILL TURKEY",
        "plu_upc": "",
        "price": " $5.15 ",
        "productId": "276",
        "catId": "3",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "MAPLE GLAZED HONEY COAT TURKEY",
        "plu_upc": "",
        "price": " $5.30 ",
        "productId": "270",
        "catId": "3",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "MESQUITE SMOKED TURKEY",
        "plu_upc": "",
        "price": " $5.00 ",
        "productId": "294",
        "catId": "3",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "BLACK FOREST SMOKED TURKEY",
        "plu_upc": "",
        "price": " $5.00 ",
        "productId": "297",
        "catId": "3",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "HICKORY SMOKED CHICKEN",
        "plu_upc": "",
        "price": " $4.90 ",
        "productId": "419",
        "catId": "4",
        "uom": "LB"
    },
   
    {
        "productSize": "",
        "item": "A.N. SMOKED TURKEY",
        "plu_upc": "",
        "price": " $6.25 ",
        "productId": "338",
        "catId": "5",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "A.N. TUSCAN TURKEY BREAST",
        "plu_upc": "",
        "price": " $6.25 ",
        "productId": "13008",
        "catId": "5",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "A.N. LEMON & HERB TURKEY BREAST",
        "plu_upc": "",
        "price": " $6.25 ",
        "productId": "13009",
        "catId": "5",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "PURE BOLOGNA PORK & BEEF ",
        "plu_upc": "",
        "price": " $3.45 ",
        "productId": "320",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "LOW-SODIUM BOLOGNA ",
        "plu_upc": "",
        "price": " $3.50 ",
        "productId": "357",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "BEEF BOLOGNA",
        "plu_upc": "",
        "price": " $4.00 ",
        "productId": "358",
        "catId": "6",
        "uom": "LB"
    },
  
    {
        "productSize": "",
        "item": "OLIVE LOAF",
        "plu_upc": "",
        "price": " $3.75 ",
        "productId": "306",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "P&P LOAF (Pickle & Pimento)",
        "plu_upc": "",
        "price": " $3.75 ",
        "productId": "308",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "DUTCH \"OLD FASHION\" LOAF",
        "plu_upc": "",
        "price": " $3.65 ",
        "productId": "307",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "SPICED HAM OVAL",
        "plu_upc": "",
        "price": " $3.50 ",
        "productId": "360",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "CANADIAN BACON",
        "plu_upc": "",
        "price": " $6.35 ",
        "productId": "339",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "LEBANON BOLOGNA",
        "plu_upc": "",
        "price": " $5.75 ",
        "productId": "781",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "DELAFIELD SUMMER SAUSAGE",
        "plu_upc": "",
        "price": " $4.45 ",
        "productId": "DFSS",
        "catId": "6",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "DILANDRI AC GENOA SALAMI",
        "plu_upc": "",
        "price": " $3.75 ",
        "productId": "505",
        "catId": "6",
        "uom": "LB"
    },
    
    {
        "productSize": "",
        "item": "COLBY JACK CHEESE",
        "plu_upc": "",
        "price": " $4.00 ",
        "productId": "700",
        "catId": "8",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "SLICING COLBY CHEESE",
        "plu_upc": "",
        "price": " $4.00 ",
        "productId": "701",
        "catId": "8",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "SHARP WIS YELLOW CHEDDAR",
        "plu_upc": "",
        "price": " $4.80 ",
        "productId": "666",
        "catId": "8",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "SHARP WIS WHITE CHEDDAR",
        "plu_upc": "",
        "price": " $4.80 ",
        "productId": "680",
        "catId": "8",
        "uom": "LB"
    },
    {
        "productSize": "",
        "item": "VERMONT WHITE CHEDDAR",
        "plu_upc": "",
        "price": " $4.30 ",
        "productId": "628",
        "catId": "8",
        "uom": "LB"
    }]
    
}


    render(){

        console.log(process.env.customKey)
        return (
            <div>
               <div>
               <p><Link href="/checkload"><a>checkload</a></Link></p></div>
               <Link href='/blog/hello-world'>
                <a>Hello world</a>
               </Link>
               <div><Link href='/showredux'>
                <a>Redux</a>
               </Link></div>

               <table>
               <tbody>
               {this.data.map((ele,index)=>{
                   let productname = ele.item;
                   var res = productname.trim().split(" ");
                   let urlstr = res.join("-")
                   let abc = urlstr+`-`+ele.productId;
                 return <tr key={ele.productId} style={{'height':'30px'}}>
                      <td style={{'padding-right': '28px'}}>{ele.productId}</td>
                      <td>{ele.item}</td>
                      <td><Link href="/[vipinfo]" as={`/${abc}`}><a>First Post</a></Link></td>             
                    </tr>
                 })}    
               </tbody>
               </table>
            </div>
        )
    }
}
export default Listing;
