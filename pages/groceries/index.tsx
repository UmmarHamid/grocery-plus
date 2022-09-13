import { GetStaticProps } from "next";
import api from "../../api/groceries";
const Groceries = ({ data }: any) => {
  return (
    <div>
      <h1 className="text3xl py-8">Groceries Page</h1>
      {data.map((grocery: any) => {
        return (
          <h2 key={grocery.id} className="text-lg">
            {grocery.title}
          </h2>
        );
      })}
    </div>
  );
};

export default Groceries;

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get("/");
  return {
    props: {
      data: res.data,
    },
  };
};
