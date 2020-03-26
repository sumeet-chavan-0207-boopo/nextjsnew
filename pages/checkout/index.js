import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../src/components/molecules/Checkout/checkoutcomp'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />