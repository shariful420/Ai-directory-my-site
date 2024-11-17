export interface Ad {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  url: string;
  placement: string;
  showTitle?: boolean;
  badge?: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'paused' | 'ended';
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
  };
}