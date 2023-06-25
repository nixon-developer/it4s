// IMPORT PACKAGES
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { toast } from "react-toastify";

// IMPORT SHARED COMPONENTS
import TextType from "../../shared/InputForm/TextType";
import EmailType from "../../shared/InputForm/EmailType";
import TextArea from "../../shared/InputForm/TextArea";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT REDUX SLICE
import { hideLoading, showLoading } from "../../redux/features/alertSlice";

// IMPORT SCSS
import "./ContactUs.scss";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState([]);
  const [message, setMessage] = useState("");

  const handleSelect = (selectedList) => {
    setService(selectedList);
  };

  // Prepare the selected values for submission
  const formattedData = service.map((item) => item.value);

  // HOOKS
  const dispatch = useDispatch();

  // FORM FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!fullName || !email || !contact) {
        return toast.warning("Please Provide Required (*) Fields");
      }
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/message/contact", {
        fullName,
        email,
        contact,
        service: formattedData,
        message,
      });
      dispatch(hideLoading());
      if (data.success) {
        toast.success("Message Send Successfully");
        // CLEAR FORM FIELDS
        setFullName("");
        setEmail("");
        setContact("");
        setService([]);
        setMessage("");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Entry Details Please Try Again!");
      console.log(error);
    }
  };

  return (
    <>
      <MetaData title={"NO:1 IT COMPANY IN INDIA AND UAE"} />

      <div className="__contact container text-center py-5">
        <div>
          <h2>Contact Us</h2>

          <h3>
            It does not matter where you are located. We do all the works from
            different locations.
          </h3>
        </div>

        <div className="row">
          <div className="col-6 __left">
            <form className="__form py-5" onSubmit={handleSubmit}>
              <p>let's connect</p>

              <div className="mb-3">
                <TextType
                  placeholder={"Full Name*"}
                  name={"fullName"}
                  value={fullName}
                  handleChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <EmailType
                  placeholder={"E-mail*"}
                  name={"email"}
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <TextType
                  placeholder={"Contact Number*"}
                  name={"contact"}
                  value={contact}
                  handleChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="mb-3 __formMultiSelect">
                <Multiselect
                  options={[
                    { value: "Infrastructure Management" },
                    { value: "Software Development" },
                    { value: "Web Development" },
                    { value: "Mobile App Development" },
                    { value: "Security Systems" },
                    { value: "Others" },
                  ]}
                  selectedValues={service}
                  onSelect={handleSelect}
                  onRemove={handleSelect}
                  displayValue="value"
                  closeIcon="cancel"
                  placeholder="Select Services"
                  style={{ width: "200px" }}
                />
              </div>

              <div className="mb-3">
                <TextArea
                  placeholder={"Message"}
                  rows={3}
                  name={"message"}
                  value={message}
                  handleChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" to="">
                Send
              </button>
            </form>
          </div>

          <div className="col-6">
            <div className="__address py-3">
              <h5>ADDRESS</h5>
              <div className="__sub__border py-2">
                <h4>Head Office</h4>

                <h6>
                  INDIA
                  <br />
                  MKM Building, Kanippayyur
                  <br />
                  Thrissur, Kerala, India
                </h6>
              </div>

              <div className="__sub__border py-2">
                <h4>Branch Office</h4>

                <h6>
                  INDIA
                  <br />
                  Thottupurathu Building, Koothattukulam
                  <br />
                  Ernakulam, Kerala, India
                </h6>

                <h6>
                  UAE
                  <br />
                  P.O.Box: 86153
                  <br />
                  Dubai, UAE
                </h6>
              </div>
            </div>

            <div className="pt-5">
              <div className="__contact py-3">
                <h5>CONTACT INFO</h5>

                <div className="__sub__border py-2">
                  <NavLink
                    className="pe-3"
                    to="tel:+917559962990"
                    target="_blank"
                  >
                    <span>INDIA: </span>
                    +91 755 99 62 990
                  </NavLink>
                  <br />

                  <NavLink
                    className="pe-3"
                    to="tel:+971566512619"
                    target="_blank"
                  >
                    <span>UAE: </span>
                    +97 156 65 12 619
                  </NavLink>
                  <br />
                  <NavLink to="mailto:enquiry.it4s@gmail.com" target="_blank">
                    <span>E-mail: </span>
                    enquiry.it4s@gmail.com
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="__hours py-3">
                <h5>BUSINESS HOURS</h5>

                <div className="__sub__border py-2">
                  <h6>Monday - Friday: 10 a.m. to 06 p.m.</h6>

                  <h6>Saturday: 10 a.m. to 04 p.m.</h6>

                  <h6>Sunday: closed</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
