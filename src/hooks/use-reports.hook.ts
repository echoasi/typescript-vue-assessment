interface ReportState {
  reports: unknown[];
  isLoadingReports: boolean;
  reportsError: string | null;
}

interface ReportStore {
  getReports(): Promise<unknown>;
  state: ReportState
}

export const useReports = (): ReportStore => {
  // TODO
}
