import Title from "./Title";
import { services } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title word1="our" word2="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, title, icon, comment } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{comment}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
