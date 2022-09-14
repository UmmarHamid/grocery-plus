import { GetStaticProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import api from "../../api/categories";
import { setCategories } from "../../store/slices/categorySlice";

const Categories = ({ data }: any) => {
  const router = useRouter();
  const categories = useSelector((state: any) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(data));
  }, []);

  return (
    <div>
      <span
        className="relative text-xl hover:cursor-pointer top-4"
        onClick={() => router.back()}
      >
        Back
      </span>
      <h1 className="text-center py-16 text-3xl">Categories Page</h1>
      {categories.map((category: any) => {
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
    revalidate: 60,
  };
};
