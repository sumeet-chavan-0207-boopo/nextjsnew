import dynamic from "next/dynamic";
const DynamicComponet = dynamic(import("../components/Dynamic"));
export default () => (
  <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello World!</p>
    <DynamicComponet />
  </div>
);
