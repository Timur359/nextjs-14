import Link from "next/link";
import s from "./postCard.module.css";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.imgContainer}>
          <Image
            src={post.img || "/contact.png"}
            alt=""
            fill
            className={s.img}
          />
        </div>
        <span className={s.date}>Описание</span>
      </div>
      <div className={s.bottom}>
        <h1 className={s.title}>{post.title}</h1>
        <p className={s.desc}>{post.body}</p>
        <Link className={s.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
