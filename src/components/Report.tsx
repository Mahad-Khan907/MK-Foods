"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/sanity/lib/client";

// Zod schema for message field validation
const formSchema = z.object({
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
});

// Function to send report to Sanity
const sendReport = async (message: string) => {
  try {
    const result = await client.create({
      _type: "message",  // Ensure type is "message" to match the schema
      message: message,
    });

    console.log("Report submitted successfully:", result);
  } catch (error) {
    console.error("Error submitting report:", error);
    throw error; // Rethrow the error to handle it later
  }
};

const ReportForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await sendReport(data.message);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false); // Reset submission state after 3 seconds
      }, 3000);
    } catch (error) {
      // Handle any errors that occur during submission
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border border-gray-300 p-5">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Enter your message here"
                    {...field}
                    className="w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* Display alert after submission */}
      {submitted && (
        <div className="absolute bottom-96 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md">
          Your message has been submitted to MK Foods. Thank you for contacting us!
        </div>
      )}
    </div>
  );
};

export default ReportForm;
