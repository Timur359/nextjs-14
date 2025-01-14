import Image from "next/image";
import s from "./home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h1 className={s.title}>Creative Thoughts Agency.</h1>
        <p className={s.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={s.buttons}>
          <button className={s.button}>Learn More</button>
          <button className={s.button}>Contact</button>
        </div>
        <div className={s.brands}>
          <Image src="/brands.png" alt="brands" fill className={s.brandImg} />
        </div>
      </div>
      <div className={s.imgContainer}>
        <Image src="/hero.gif" alt="brands" fill className={s.heroImg} />
      </div>
    </div>
  );
};

export default Home;
