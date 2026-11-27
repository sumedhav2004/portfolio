
export interface Experience {
  organization: string;
  role: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    organization: "Upclass",
    role: "Web Development Intern",
    startDate: "2023-05",
    endDate: "2023-11",
    location: "Hybrid - Gurugram, India",
    description: "",
  },
  {
    organization: "Codsoft",
    role: "Web Development Intern",
    startDate: "2024-02",
    endDate: "2024-05",
    location: "Remote - India",
    description: "",
  },
  {
    organization: "Echo",
    role: "Full Stack Development Intern",
    startDate: "2024-05",
    endDate: "2024-07",
    location: "Remote - New Delhi, India",
    description: "",
  },
  {
    organization: "Aurelza",
    role: "Full Stack Development Intern",
    startDate: "2024-09",
    endDate: "2025-06",
    location: "Hybrid - Gurugram, India",
    description: "",
  },
  {
    organization: "Aurelza",
    role: "Full Stack Developer",
    startDate: "2025-06",
    endDate: "2026-02",
    location: "Hybrid - Gurugram, India",
    description: "",
  },
  {
    organization: "The Curious Bunny Studios",
    role: "Freelance Full Stack Developer",
    startDate: "2026-03",
    // No endDate means currently working here.
    location: "Remote - Amsterdam, Netherlands",
    description: "",
  },
];

/**
 * Calculates the number of completed calendar months.
 *
 * Accepts:
 * YYYY-MM
 * YYYY-MM-DD
 *
 * Missing start date means duration is unavailable.
 * Missing end date means the experience is ongoing.
 */
export function getExperienceDuration(
  item: Experience,
  today = new Date()
): string | null {
  if (!item.startDate) return null;

  const parseDate = (value: string): Date | null => {
    const match = value.match(
      /^(\d{4})-(\d{2})(?:-(\d{2}))?$/
    );

    if (!match) return null;

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3] ?? 1);

    const date = new Date(year, month - 1, day);

    // Reject invalid dates.
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }

    return date;
  };

  const start = parseDate(item.startDate);
  const end = item.endDate
    ? parseDate(item.endDate)
    : today;

  if (!start || !end || end < start) return null;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Only count completed months when exact days are supplied.
  if (
    item.startDate.length === 10 &&
    (item.endDate?.length === 10 || !item.endDate) &&
    end.getDate() < start.getDate()
  ) {
    months--;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  }

  if (remainingMonths > 0) {
    parts.push(
      `${remainingMonths} ${
        remainingMonths === 1 ? "month" : "months"
      }`
    );
  }

  return parts.length > 0 ? parts.join(" ") : "Less than a month";
}
