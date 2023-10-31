import { FieldValues } from "./form";
import { IsFlatObject, Noop } from "./utils";

export type InternalFieldName = string;

export type FieldName<TFieldValues extends FieldValues> =
  IsFlatObject<TFieldValues> extends true
    ? Extract<keyof TFieldValues, string>
    : string;

export type CustomElement<TFieldValues extends FieldValues> = {
    name: FieldName<TFieldValues>;
    type?: string;
    value?: any;
    disabled?: boolean;
    checked?: boolean;
    options?: HTMLOptionsCollection;
    files?: FileList | null;
    focus?: Noop;
  };

export type FieldElement<TFieldValues extends FieldValues = FieldValues> =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | CustomElement<TFieldValues>;

export type Ref = FieldElement;

export type Field = {
    _f: {
      ref: Ref;
      name: InternalFieldName;
      refs?: HTMLInputElement[];
      mount?: boolean;
    }
    //  & RegisterOptions;
  };