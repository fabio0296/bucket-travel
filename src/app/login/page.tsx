"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SignInWithGithub } from "@visit-it/utils/supabase/github-provider";


export const SignUpFormSchema = z.object({
  email: z.string().min(1, { message: 'This Field needs to be filled' }).email('Must be a valid email'),
  password: z.string().min(1, { message: 'Must enter a valid password' })
});

type SignUpFormType = z.infer<typeof SignUpFormSchema>;

export default function LoginPage() {
  const signupForm = useForm<SignUpFormType>({ resolver: zodResolver(SignUpFormSchema), defaultValues: { email: '', password: '' } });
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="w-full flex flex-row justify-center">
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle>Sign up / Login with socials</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-7">
            <Form {...signupForm}>
              <FormField control={signupForm.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} className=""/>
                  </FormControl>
                </FormItem>
              )} />
              <FormField control={signupForm.control} name="password" render={({ field}) =>(
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Password" {...field} className="" />
                  </FormControl>
                </FormItem>
              )}/>
            </Form>
          </CardContent>
          <CardFooter>
            <Button variant={"outline"} size={"icon"} onClick={async () => (SignInWithGithub())}>
              <Github />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}