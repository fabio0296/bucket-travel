import { createClient } from "./client";

export async function SignInWithGithub(){
  const client = createClient();
  const {data, error } =  await client.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  });
  console.log(`Data: ${data}, Error: ${error}`);
}

export async function SignoutWithGitHub(){
  const client = createClient();
  await client.auth.signOut();
}

export async function getUserInf(){
  const client = createClient();
  await client.auth.getUser();  
}