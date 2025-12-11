"use client"

import {  useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


export const useDeleteProduct = () => {
    const queryClient =  useQueryClient()
return useMutation({
    mutationKey: ["delete-prduct"],
    mutationFn: async (id: number) => {
await axios.delete(`https://api-crud.elcho.dev/api/v1/586f5-f3af4-ba027/online-shop/${id}`)
    }, 
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["read-product"]})
    }
})
}