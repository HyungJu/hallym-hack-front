export type Stats = {
  [date: string]: {
    [couponId: number]: {
      count: number;
    };
    totalCount: number;
  };
};
