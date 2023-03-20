import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";



export async function getServerSideProps(context: NextPageContext) {
  
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
  

export default function Home() {

  const { data: user} = useCurrentUser();

  return (
    <>
      <h1 className="text-4xl text-red-500 text-center">Projet Netflix</h1>
      <p className="text-white text-center text-2xl py-5"> Connecté en tant que : {user?.name} </p>
      <button className="h-10 w-full bg-white" onClick={ () => signOut()}> Se déconnecter</button>
    </>
  );
}