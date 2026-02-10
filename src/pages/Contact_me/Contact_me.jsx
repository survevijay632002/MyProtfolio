import React from "react";
import "./Contact_me.css";
import { useForm } from "react-hook-form";
import axios from "axios";
function Contact_me() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // try {
    //   await axios.post("http://localhost:5000/api/contact", data);
    //   alert("Message sent successfully ");
    //   reset();
    // } catch (error) {
    //   alert("Error sending message ");
    // }
  };

  return (
    <div className="contact-conatiner">
      <form className="from" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="heading-contact">
          Contact <span className="text-me">ME</span>
        </div>
        <input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          type="email"
          name="email"
          id=""
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("phone", { required: "Phone number require" })}
          placeholder="Enter Phone"
          type="tel"
          name="phone"
          id=""
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        <textarea
          {...register("message")}
          placeholder="Any message for ME"
          cols={50}
          rows={5}
          name="message"
          id=""
        ></textarea>
        <input type="submit" onClick={(e) => handleSubmit(e)} name="" id="" />
      </form>
    </div>
  );
}

export default Contact_me;
