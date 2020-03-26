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
import {configs} from '../config.js'

export default function Index() {

  console.log(configs)
  return (
      <div>
       <Listing/>
      </div>
   
  )
}