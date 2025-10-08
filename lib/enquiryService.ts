import axiosInstance from "./axiosInstance";
import { EnquiryFormData } from "@/types/enquiry";
import { AxiosError } from "axios";

export const createEnquiry = async (data: EnquiryFormData) => {
  try {
    const response = await axiosInstance.post<{ success: boolean; message: string }>(
      "/enquiry",
      data
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(
        "Error creating enquiry:",
        error.response?.data || error.message
      );
    } else if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
    throw error;
  }
};
