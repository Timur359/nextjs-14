import Image from "next/image";
import s from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const ContactPage = () => {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image src="/contact.png" alt="" fill className={s.img} />
      </div>
      <div className={s.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={s.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
