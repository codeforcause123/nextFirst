import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { lists: data },
  };
};
const Alllist = ({ lists }) => {
  return (
    <div>
      <h1 className="text-5xl m-3 p-3">All Ninjas</h1>
      {lists.map((ele) => {
        return (
          <Link href={"/lists/" + ele.id} key={ele.id}>
            <div className={styles.single}>
              <h3>{ele.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Alllist;
