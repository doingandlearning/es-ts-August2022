namespace Options_Verbose {
  interface Options {
    material: string;
    backlight: string;
  }

  // read-only version
  interface ManualReadOnlyOptions {
    readonly material: string;
    readonly background: boolean;
  }

  // optional version
  interface ManualOptionalOptions {
    material?: string;
    background?: string;
  }

  // nullable version
  interface ManualNullableOptions {
    material: string | null;
    background: string | null;
  }

  const brick: ManualReadOnlyOptions = {
    background: false,
    material: "brick",
  };

  const gauze: ManualNullableOptions = {
    material: "gauze",
    background: null,
  };
  gauze.background = "well lit";
}

namespace Options_Terse {
  interface Options {
    material: string;
    background: boolean;
  }
  // interface ManualReadOnlyOptions {
  //   readonly material: string;
  //   readonly background: boolean;
  // }
  type ReadOnlyOptions<T> = { readonly [k in keyof T]: T[k] };
  type ReadOnly = ReadOnlyOptions<{
    material: string;
    background: boolean;
  }>;

  // type OptionalOptions

  // type NullableOptions
}
