import { VALIDATION_MODE } from "../constants";
import { Resolver } from "./resolvers";
import { DeepPartial } from "./utils";

export type ValidationMode = typeof VALIDATION_MODE;
export type Mode = keyof ValidationMode;
export type CriteriaMode = "firstError" | "all";

export type FieldValues = Record<string, any>;

type AsyncDefaultValues<TFieldValues> = (
  payload?: unknown
) => Promise<TFieldValues>;

export type DefaultValues<TFieldValues> =
  TFieldValues extends AsyncDefaultValues<TFieldValues>
    ? DeepPartial<Awaited<TFieldValues>>
    : DeepPartial<TFieldValues>;

declare const $NestedValue: unique symbol;
export type NestedValue<TValue extends object = object> = {
  [$NestedValue]: never;
} & TValue;

type ResetAction<TFieldValues> = (formValues: TFieldValues) => TFieldValues;

export type KeepStateOptions = Partial<{
  keepDirtyValues: boolean;
  keepErrors: boolean;
  keepDirty: boolean;
  keepValues: boolean;
  keepDefaultValues: boolean;
  keepIsSubmitted: boolean;
  keepIsSubmitSuccessful: boolean;
  keepTouched: boolean;
  keepIsValid: boolean;
  keepSubmitCount: boolean;
}>;

export type UseFormReset<TFieldValues extends FieldValues> = (
  values?:
    | DefaultValues<TFieldValues>
    | TFieldValues
    | ResetAction<TFieldValues>,
  keepStateOptions?: KeepStateOptions
) => void;

export type UseFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = Partial<{
  defaultValues: DefaultValues<TFieldValues> | AsyncDefaultValues<TFieldValues>;
  values: TFieldValues;
  resetOptions: Parameters<UseFormReset<TFieldValues>>[1];
  resolver: Resolver<TFieldValues, TContext>;
}>;

export type UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> = {
  watch: TFieldValues;
  getValues: TFieldValues;
  getFieldState: TFieldValues;
  setError: TFieldValues;
  clearErrors: TFieldValues;
  setValue: TFieldValues;
  trigger: TFieldValues;
  formState: TFieldValues;
  resetField: TFieldValues;
  reset: TFieldValues;
  handleSubmit: TFieldValues | TTransformedValues;
  unregister: TFieldValues;
  control: TFieldValues | TContext;
  register: TFieldValues;
  setFocus: TFieldValues;
};
