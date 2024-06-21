import s from "./footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>lamadev</div>
      <div className={s.text}>
        Lama creative thoughts agency All rights reserved
      </div>
    </div>
  );
};

export default Footer;
