import React from "react";
import { FieldValues, UseFormProps, UseFormReturn } from "./types";

/**
 * reslove initialValues Function
 */

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>(props: UseFormProps<TFieldValues, TContext> = {}) {
  /**
   * path management
   * formState
   * initialValues
   * updateFormValue
   * resetFormValue
   * validateForm
   * submitForm
   */
  const _formControl = React.useRef<
    UseFormReturn<TFieldValues, TContext, TTransformedValues> | undefined
  >();
  
}