import zod from "zod";

import { array_display } from "./display";
import { schema_color } from "./color";

const event_base = zod.z.object({
  id: zod.z.string().uuid(),
  title: zod.z.string().optional(),
  groupIp: zod.z.string().optional(),
  allDay: zod.z.boolean().optional(),
  display: zod.z.enum(array_display),
  constraint: zod.z.string().optional(),
  color: schema_color.optional(),
  extendedProps: zod.z.any().optional(),
});

const event_simple = zod.z.object({
  start: zod.z.date().optional(),
  end: zod.z.date().optional(),
});

const event_recursive = zod.z.object({
  daysOfWeek: zod.z.array(zod.z.number().min(0).max(6)).max(7),
  startRecur: zod.z.date().optional(),
  endRecur: zod.z.date().optional(),
  startTime: zod.z.string().time().optional(),
  endTime: zod.z.string().time().optional(),
});

const event = zod.z
  .object({})
  .merge(event_base)
  .merge(event_simple)
  .merge(event_recursive);

export { event };
