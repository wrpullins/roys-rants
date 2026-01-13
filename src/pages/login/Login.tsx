import type { FC } from "react";
import Page from "../../components/Page";
import UnderConstruction from "../../components/UnderConstruction";

const Login: FC = () => {
  return (
    <Page centeredContent>
      <UnderConstruction page="Login" />
    </Page>
  );
};

export default Login;
