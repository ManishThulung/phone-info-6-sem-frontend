import Accordion from "@/components/client/Accordion";

function Phones() {
  return (
    <section className="relative z-10 overflow-hidden  pt-10">
      <div className="container ">
        <div className="">
          <Accordion title="Apple" />
        </div>
        <div className="py-10">
          <Accordion title="Apple" />
        </div>
        <div className="py-10">
          <Accordion title="Apple" />
        </div>
        <div className="py-10">
          <Accordion title="Apple" />
        </div>
      </div>
    </section>
  );
}

export default Phones;
