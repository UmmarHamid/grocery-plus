import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import api from "../../api/groceries";

const Groceries = ({ data }: any) => {
  const router = useRouter();
  return (
    <div>
      <span
        className="relative text-xl hover:cursor-pointer top-4"
        onClick={() => router.back()}
      >
        Back
      </span>
      <h1 className="text-center py-16 text-3xl">Groceries Page</h1>
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
