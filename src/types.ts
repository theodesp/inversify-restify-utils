namespace types {
    export type StrOrRegex = string | RegExp;
    export type Path = StrOrRegex | { path: StrOrRegex  } & { additionalOptions: Object, path: StrOrRegex };
}

export { types };
