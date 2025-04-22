"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ServiceType } from "../schemas";

const formSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  mobile: z.string().min(1, {
    message: "Mobile number is required",
  }),
  postcode: z.string().min(1, {
    message: "Post code is required",
  }),
  types: z.array(z.nativeEnum(ServiceType)).min(1, {
    message: "Select at least one service type",
  }),
});

const serviceTypeOptions = [
  { id: ServiceType.DELIVERY, label: "Delivery" },
  { id: ServiceType.PICK_UP, label: "Pick Up" },
  { id: ServiceType.PAYMENT, label: "Payment" },
];

export const LeadForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      postcode: "",
      types: [], // Initialize as empty array
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Code</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="types"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Service Types</FormLabel>
                <div className="mb-3 text-sm text-gray-500">
                  Select all that apply
                </div>
              </div>
              {serviceTypeOptions.map((option) => (
                <FormField
                  key={option.id}
                  control={form.control}
                  name="types"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={option.id}
                        className="mb-2 flex flex-row items-start space-y-0 space-x-3"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              const updatedValues = checked
                                ? [...field.value, option.id]
                                : field.value?.filter(
                                    (value) => value !== option.id
                                  );
                              field.onChange(updatedValues);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="cursor-pointer font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="cursor-pointer">
          Submit
        </Button>
      </form>
    </Form>
  );
};
