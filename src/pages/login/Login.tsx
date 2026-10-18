import { useState, type FC } from "react";
import Page from "../../components/layout/Page";
import { useLogin } from "../../api/generated/hooks/useLogin";
import { useAuthStore } from "../../hooks/useAuthStore";
import Box from "../../components/layout/Box";

import { TextInput } from "../../components/inputs/InputText";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../components/Button";
import { spacing } from "../../theme";
import { useNavigate } from "react-router-dom";
import { Error } from "../../components/errors/Error";


const Login: FC = () => {
  const loginForm = useForm<{ username: string; password: string }>({
    username: null,
    password: null,
  }, {
    username: {
      required: true
    },
    password: {
      required: true
    }
  });

  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const [error, setError] = useState<unknown>(null);
  const { mutateAsync, isPending } = useLogin();

  const login = async () => {
    if (isPending) return;
    if (loginForm.validateForm()) {
      setError(null);
      mutateAsync({ body: loginForm.formContent })
        .then((data) => {
          if (!data.token) {
            throw new globalThis.Error("Login response is missing a token");
          }
          setToken(data.token)
          navigate("/");
        })
        .catch((error) => setError(error));
    }
  }

  return (
    <Page centeredContent>
      <Box spacing={spacing.hu}>

        <TextInput
          placeholder="Username"
          value={loginForm.fields.username.value}
          onChange={(evt) => loginForm.fields.username.update(evt.target.value)}
          invalid={!!loginForm.fields.username.error}
          disabled={isPending}
        />

        <TextInput
          type="password"
          placeholder="Password"
          value={loginForm.fields.password.value}
          onChange={(evt) => loginForm.fields.password.update(evt.target.value)}
          invalid={!!loginForm.fields.password.error}
          disabled={isPending}
        />

        <Button onClick={login} loading={isPending}>Login</Button>

        {!!error && <Error message="Invalid login credentials" />}
        {/* {error && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
      </Box>
    </Page>
  );
};

export default Login;
