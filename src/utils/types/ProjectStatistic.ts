export interface ProjectStatisticPropsType {
  statistic: ProjectStatisticType;
}

export interface ProjectStatisticType {
  type: string;
  amount: string;
  percentage?: string;
  text: string;
}