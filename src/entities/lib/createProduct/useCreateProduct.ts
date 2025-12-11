"use client";
import axios from "axios";
import { IProduct } from "../../productForm/ui/ProductForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProduct = () => {
  const queryClient  = useQueryClient()
  return useMutation({ 
    mutationKey: ["create-product"],
    mutationFn: async (newProduct: IProduct) => {
      const response = await axios.post(
        `https://api-crud.elcho.dev/api/v1/586f5-f3af4-ba027/online-shop`,
        newProduct
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["read-product"]})
    }
  });
};
