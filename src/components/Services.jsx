import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="services_wrapper">
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div className="">
              <TbTruckDelivery className="icon" />
              <h3>Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
