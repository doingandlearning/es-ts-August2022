type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

let nextDay: Record<Weekday, Day> = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Mon",
};

// Object with a huge list
type ActivityEvent = {
  lastEvent: Date;
  avgHrRate: number;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  }[];
};

type ActivityLog = {
  [isoDate: string]: ActivityEvent;
};
