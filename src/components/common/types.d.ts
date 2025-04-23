export type ButtonProps = {
  entry:
    | "signin"
    | "signup"
    | "startworkout"
    | "finishworkout"
    | "addset"
    | "addexercises"
    | "cancelworkout"
    | "closeexerciselist"
    | "edit"
    | "delete";
  onClick?: (e: any) => void;
};
