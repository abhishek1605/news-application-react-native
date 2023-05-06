export type configParamType = {
  duration: number;
  isAddScaling?: boolean;
};
export type initialType = {
  opacity: number;
  scale?: number;
};
export type transitionConfigType = {
  initial: initialType;
  animate: initialType & {
    transition: {
      duration: number;
    };
  };
};
