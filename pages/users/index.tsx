import { GetStaticProps } from "next";
import api from "../../api/users";
import { useRouter } from "next/router";

const Users = ({ data }: any) => {
  const router = useRouter();
  return (
    <div>
      <span
        className="relative text-xl hover:cursor-pointer top-4"
        onClick={() => router.back()}
      >
        Back
      </span>
      <h1 className="text-center py-16 text-3xl">Users Page</h1>
      {data.map((user: any) => {
        return (
          <h2 key={user.id} className="text-lg">
            {user.name}
          </h2>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get("/");
  return {
    props: {
      data: res.data,
    },
  };
};

export default Users;
