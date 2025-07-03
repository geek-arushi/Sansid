import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const DoctorDetails = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Michael l. Johnson"}
        pageName={"Doctor Details"}
        bgnone
      />
      {/* <!--====== Doctor Section Start ======--> */}
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="doctor-details-wrapper">
            <div className="doctor-info-box">
              <div className="doctor-photo">
                <img src="assets/img/doctors/doctor_details.jpg" alt="Image" />
              </div>
              <div className="doctor-description">
                <div className="description-header">
                  <div>
                    <h3 className="name">Michael I. Johnson </h3>
                    <span className="specialty">Family Care Specialist</span>
                  </div>
                  <div>
                    <a href="#" className="template-btn template-btn-primary">
                      Appointment Now <i className="far fa-plus"></i>
                    </a>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium demque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptate voluptas
                  esit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui rat ione voluptatem sequi nesciunt.
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam nis aliquid
                  ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ealuptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}
    </Layouts>
  );
};
export default DoctorDetails;
