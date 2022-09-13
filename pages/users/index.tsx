import { GetStaticProps } from "next";
import api from "../../api/users";

const Users = ({ data }: any) => {
  return (
    <div>
      <h1 className="text3xl py-8">Users Page</h1>
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
