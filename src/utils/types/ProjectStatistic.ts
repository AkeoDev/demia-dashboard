export interface ProjectStatisticPropsType {
  statistic: ProjectStatisticType;
}

export interface ProjectStatisticType {
  icon: string;
  amount: string;
  percentage?: string;
  text: string;
}