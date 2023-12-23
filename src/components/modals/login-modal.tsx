import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Password is required" }),
});

const LoginModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isLoading = form.formState.isLoading;
  // const submit = form.handleSubmit;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      form.reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (!isMounted) {
    return null;
  }
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center text-center text-2xl font-bold mt-2 mb-1">
            <div className="w-3/4 mb-1">
              <img src="/logo.png" className="w-full" alt="logo" />
            </div>
          </DialogTitle>
          <DialogDescription className="text-center text-md">
            Sign in
          </DialogDescription>
        </DialogHeader>

        {/* Login Form*/}
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 px-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-gray-600">
                      email
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter your email"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-200/60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-gray-600">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="password"
                        placeholder="Enter your password"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-200/60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="mb-0 w-3/4 m-auto" />
            <div className="flex flex-col space-y-2">
              <Label>
                <Link
                  to="/register"
                  className="text-secondary-foreground hover:underline"
                >
                  Create a new account
                </Link>
              </Label>
            </div>
            <DialogFooter>
              <Button>Sign in</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
