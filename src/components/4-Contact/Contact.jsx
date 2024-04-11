import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import ani4 from "../../../public/animation/ani4.json";
import ani1 from "../../../public/animation/ani1.json";


export default function Contact() {
  const [state, handleSubmit] = useForm("xwkgwolg");


  return (
    <section className="contact">
      <h2 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h2>
      <p className="subtitle">
        contact us for more information and get notified when i publish somthing
        new.{" "}
      </p>
      <div className="flex" style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit} className="flex">
          <div className="flex email">
            {" "}
            <label htmlFor="email">Email Adress:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex message">
            <label htmlFor="message">Your message:</label>
            <textarea required id="message" name="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
         
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting .." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1rem" ,color:"rgb(27,172,135)"}}
            >
              <Lottie
                loop={true}
                style={{ height: 39, marginTop: "1rem" }}
                animationData={ani1}
              />
              Your message has been sent successfully 🥰
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355, marginLeft:"" }}
            animationData={ani4}
          />
        </div>
      </div>
    </section>
  );
}
