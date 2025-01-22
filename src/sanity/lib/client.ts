import { createClient } from "next-sanity";

// Ensure the following environment variables are properly set
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity Dataset
  apiVersion: "2023-01-01", // Adjust to match your Sanity API version
  token: process.env.SANITY_API_TOKEN, // Only required for private datasets
  useCdn: false, // Set to false for dynamic data
});
