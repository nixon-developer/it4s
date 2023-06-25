// IMPORT PACKAGES
import React from "react";

// IMPORT COMPONENTS
import InfrastructureLabel from "./../../components/Label/ServicesLabel/InfrastructureLabel";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Services.scss";

function Infrastructure() {
  return (
    <>
      <MetaData
        title={
          "NO: 1 INFRASTRUCTURE MANAGEMENT SERVICE COMPANY IN INDIA AND UAE"
        }
      />

      <div className="__service">
        <div className="__servicesLabel">
          <InfrastructureLabel />
        </div>

        <div className="__content container py-5">
          <div className="pb-5">
            <h2>Infrastructure Management Service</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            Security and compliance evolve over time. Sales and customer support
            become critical touchpoints for your organization. Small costs,
            amplified over inefficient processes, can cost your business six or
            seven figures annually.
          </p>
          <p className="__bg px-2 py-5 mb-5">
            With&nbsp;<span>IT 4 Supports</span>, you get a consulting firm that
            can help you build and manage your infrastructure for the challenges
            of today and tomorrow. Optimize your business, make your people more
            productive, and keep all your data safe. Most importantly, keep the
            peace of mind you need to focus on your vision.
          </p>

          <p className="__bg px-2 py-5 mb-5">
            Through our IT infrastructure management services, we help our
            clients increase efficiency, reduce costs, and bring better
            flexibility and scalability. We help leverage growth and become more
            responsive to the ever-changing markets. Our IT infrastructure
            services are always ready and updated to support the strategic
            objectives of clients, whether local, regional or global.
          </p>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              <span className="__subhead">Mission Critical</span>IT 4 Supports
              offers complete management of IT services infrastructure, with
              activities aligned with the client's business objectives.
            </p>

            <p>
              <span className="__subhead">Flexibility</span>After
              comprehensively evaluating the client's environment, we design and
              implement a complete package of solutions adapted to the specific
              requirements and demands of each business. It allows our clients
              to consume and pay only for what they use. Moreover, this provides
              the much-needed flexibility in services, competitive advantage and
              cost savings.
            </p>

            <p>
              <span className="__subhead">High availability</span>Our IT
              infrastructure management services involve integrating
              technologies and various platforms, ensuring the adoption of best
              market practices, as per the international certifications. In
              addition, our infrastructure is designed to support critical
              environments, with availability levels of up to 99.999%.
            </p>
          </p>

          <div className="py-5">
            <h2>Our Solutions</h2>
          </div>

          <p className="__bg p-2 mb-5">
            <p>
              <span className="__subhead">Environment Management</span>
              IT 4 Supports environment management services are differentiated
              by understanding the criticality of IT services for our client's
              business. The environments can be hosted in the Data Centers of
              the client or third parties. Thanks to our extensive experience in
              mission-critical operations, we take a transparent and proactive
              stance, focusing on failure prevention, increased availability,
              and application performance assurance. We combine the experience
              of engineers who are experts in their field and know the
              inside-out of technologies with the best market practices in IT
              infrastructure services, always in accordance with the needs of
              each client and business unit.
            </p>

            <p>
              <span className="__subhead">Database management</span>
              At Atlas Systems, we understand the critical importance of the
              client's data. This is why we ensure the integrity, availability,
              and performance of access to this data by applications. With a
              lifecycle management approach, we help create an integrated
              solution for data storage, protection, and replications. The end
              goal is to minimize the impact on our client's business.
            </p>

            <p>
              <span className="__subhead">Network Management</span>
              As a part of network management, we ensure your network
              infrastructure remains intact and runs smoothly and efficiently.
              Our objective is to reduce network disruptions, enhance
              productivity and network security, and provide a comprehensive
              view of network performance.
            </p>

            <p>
              <span className="__subhead">IT Governance</span>
              At IT 4 Supports, we believe that a specific and personalized
              model is necessary for the success of IT infrastructure management
              and fully meet the expectation of our clients. To meet these
              requirements, we make use of the best market practices, such as
              ITIL and COBIT, while adapting the processes, control and
              decision-making rights to the reality of each client.
            </p>
          </p>

          <div className="py-5">
            <h2>Advantages</h2>
            <p className="__subtitle">
              Our primary advantages of the IT infrastructure management
              services are the following:
            </p>
          </div>

          <div className="row text-center">
            <div className="col-6">
              <h6>Knowledge base</h6>
              <h6>Knowledge</h6>
              <h6>Reduction of payroll costs</h6>
              <h6>IT infrastructure consultancy</h6>
              <h6>IT asset inventory management</h6>
              <h6>Our engineers are in constant training</h6>
              <h6>Proactive monitoring of your IT infrastructure</h6>
            </div>

            <div className="col-6">
              <h6>Systems available and in optimal operation</h6>
              <h6>Maintain an efficient and profitable administration</h6>
              <h6>Compliance with service level agreements (SLAs)</h6>
              <h6>Flexible hours according to your office hours</h6>
              <h6>Continuity in the operation of critical IT infrastructure</h6>
              <h6>
                Minimize the impact of incidents on your IT infrastructure
              </h6>
              <h6>
                Use of key personnel in critical functions of your company.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infrastructure;
