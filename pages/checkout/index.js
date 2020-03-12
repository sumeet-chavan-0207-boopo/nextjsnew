// import dynamic from "next/dynamic";

// const NoSSRComponent = dynamic(
//   () => import("../../components/checkoutcomp"),
//   {
//     ssr: false
//   }
// );

// const Checkout = () => {
 

//   return(
//   	<div>
//   	<NoSSRComponent/>
//   	</div>)
// }

// export default Checkout
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../src/molecules/Checkout/checkoutcomp'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />