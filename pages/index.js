// import Link from 'next/link';
// export default function Index() {

//   let abc = 6;
//   //let link = `/post/`+abc;

//   let link = `/post/4?title=sumeet`
//   return (
//       <div>
//       <p>Hello Next.js</p>
//       <div>
//       </div>
//       <Link href={link}>
//         <a>post</a>
//       </Link>
//       </div>
   
//   )
// }

import Link from 'next/link';
import Listing from '../src/components/molecules/Listing/listing'
import Login from '../src/components/molecules/Login'
import {configs} from '../config.js'

export default function Index() {

 
  return (
      <div>
       <Login/>
       <Listing/>
      </div>
   
  )
}