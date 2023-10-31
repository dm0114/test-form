import { NestedValue } from "./form";

export type Noop = () => void;

export type IsFlatObject<T extends object> = Extract<
  Exclude<T[keyof T], NestedValue | Date | FileList>,
  any[] | object
> extends never
  ? true
  : false;

export type BrowserNativeObject = Date | FileList | File;

export type DeepPartial<T> = T extends BrowserNativeObject | NestedValue
  ? T
  : { [K in keyof T]?: DeepPartial<T[K]> };