export type ButtonType = {
  entry:
    | "signin"
    | "signup"
    | "startworkout"
    | "finishworkout"
    | "addset"
    | "addexercises"
    | "cancelworkout"
    | "closeexerciselist";
  onClick?: () => void;
};
