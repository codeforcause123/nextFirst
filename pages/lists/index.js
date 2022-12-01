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
      <h1 className="text-5xl">All Ninjas</h1>
      {lists.map((ele) => {
        return (
          <div key={ele.id}>
            <a className={styles.single}>
              <h3>{ele.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Alllist;
