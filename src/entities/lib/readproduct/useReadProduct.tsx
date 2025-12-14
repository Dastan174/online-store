"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useReadProduct = () => {
  return useQuery({
    queryKey: ["read-product"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api-crud.elcho.dev/api/v1/586f5-f3af4-ba027/online-shop"
      );
      return data.data;
    },
  });
};