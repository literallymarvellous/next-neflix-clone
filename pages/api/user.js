import { getSession } from "next-auth/client";

const user = async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send(session.user);
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};

export default user;
