import { useEffect, useState, type FC } from "react";
import Page from "../../components/layout/Page";
import UnderConstruction from "../../components/UnderConstruction";
import * as api from "../requests";
import { useAuthStore } from "../../hooks/useAuthStore";
import Box from "../../components/layout/Box";

import { InputText } from "primereact/inputtext";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../components/Button";
import { spacing } from "../../theme";
import { useNavigate } from "react-router-dom";


const Login: FC = () => {
  const loginForm = useForm<{ username: string; password: string }>({
    username: null,
    password: null,
  });

  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const [error, setError] = useState<NullOr<any>>(null);

  const login = async () =>
    api
      .login(loginForm.formContent)
      .then((data) => {
        setToken(data.token)
        navigate("/");
      })
      .catch((error) => setError(error));


  return (
    <Page centeredContent>
      <Box spacing={spacing.u}>

        <InputText
          value={loginForm.fields.username.value}
          onChange={(evt) => loginForm.fields.username.update(evt.target.value)}
        />

        <InputText
          type="password"
          value={loginForm.fields.password.value}
          onChange={(evt) => loginForm.fields.password.update(evt.target.value)}
        />

        <Button onClick={login}>Login</Button>

        {error  && <pre>{JSON.stringify(error, null, 2)}</pre>}
      </Box>
    </Page>
  );
};

export default Login;
