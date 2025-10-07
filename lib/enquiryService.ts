import axiosInstance from "./axiosInstance";
import { EnquiryFormData } from "@/types/enquiry";

export const createEnquiry = async (data: EnquiryFormData) => {
  try {
    const response = await axiosInstance.post("/enquiry", data);
    return response.data;
  } catch (error: any) {
    console.error("Error creating enquiry:", error.response?.data || error.message);
    throw error;
  }
};
