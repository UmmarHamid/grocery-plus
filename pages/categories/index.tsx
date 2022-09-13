import { GetStaticProps } from "next";
import api from "../../api/categories";
const Categories = ({ data }: any) => {
  return (
    <div>
      <h1 className="text3xl py-8">Groceries Page</h1>
      {data.map((category: any) => {
        return (
          <h2 key={category.id} className="text-lg">
            {category.title}
          </h2>
        );
      })}
    </div>
  );
};

export default Categories;

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get("/");
  return {
    props: {
      data: res.data,
    },
  };
};
