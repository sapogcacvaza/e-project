import { Image } from "react-bootstrap";

export default function Help() {
   return (
      <>
         <div className="help-header">
            <div className="container-fluid">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <h1 className="text-black help-name">Helping Communities</h1>
                     </div>
                  </div>
               </div>
            </div>
            <div className="help">
               <div className="container-fluid mb-5">
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-12">
                           <Image className="help-image" src="img/banner/helpBanner.webp" />
                           <p className="help-text">The Woodland Trust is one of the biggest charities in the UK that works to maintain and grow bio diverse areas of woodland. They help provide habitats for a wide range of wildlife, as well as providing local communities with cleaner and greener places to live. As a company that sells paper products we understand fully that we need to support our environment and be as helpful as we can be at giving back to our planet.

                              We make sure that all of the paper that we use is FSC certified. This means that every sheet of paper we buy and use comes from responsible and sustainable sources. By doing this, we are supporting the UK'S leading conservation charity and helping our environment.

                              Our paper is also Carbon Captured. This means that the amount of CO2 that is generated through the production and distribution of the paper is calculated and captured by planting trees with that Trust's Woodland Carbon Scheme. It has been calculated that 25m2 of native UK woodland will capture and store one tonne of CO2 and create new native woodland. Over time this will remove hundreds of thousands of tonnes of carbon dioxide from the atmosphere.

                              To become more environmentally conscious, we are providing our customers with the option to buy their calendars plastic free, which will help us produce less plastic waste.</p>
                        </div>
                     </div>
                  </div>


               </div>
            </div>
         </div>
      </>
   );
}