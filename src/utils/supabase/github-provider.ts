import { createClient } from "./client";

export async function SignInWithGithub(){
  const client = createClient();
  const {data, error } =  await client.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  });
}
