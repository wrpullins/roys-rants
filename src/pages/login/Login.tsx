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

const Login: FC = () => {
  const loginForm = useForm<{ username: string; password: string }>({
    username: null,
    password: null,
  });

  const setToken = useAuthStore((state) => state.setToken);
  const [error, setError] = useState<NullOr<any>>(null);

  const login = async () =>
    api
      .login(loginForm.formContent)
      .then((data) => setToken(data.token))
      .catch((error) => setError(error));

  /// need to delete just for testing
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    if (user) console.log(user);
  }, [user]);

  return (
    <Page centeredContent>
      <Box spacing={spacing.u}>
        <pre>{JSON.stringify(user, null, 2)}</pre>

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

        <pre>{JSON.stringify(error, null, 2)}</pre>
      </Box>
    </Page>
  );
};

export default Login;
