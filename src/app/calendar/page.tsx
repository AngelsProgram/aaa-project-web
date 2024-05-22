"use client";

import FullCalendar from "@fullcalendar/react";

import plugin_view_multimonth from "@fullcalendar/multimonth";
import plugin_view_daygrid from "@fullcalendar/daygrid";
import plugin_view_timegrid from "@fullcalendar/timegrid";
import plugin_view_list from "@fullcalendar/list";

const views = Object.freeze({
  multimonth: ["multiMonthYear"],
  daygrid: ["dayGridYear", "dayGridMonth", "dayGridWeek", "dayGridDay"],
  timegrid: ["timeGridWeek", "timeGridDay"],
  list: ["listYear", "listMonth", "listWeek", "listDay"],
});

const options_views = Object.entries(views)
  .map((item) => item[1])
  .flat()
  .join(",");

export default function Calendar() {
  const weekends = true;
  const selectable = true;
  const editable = true;

  return (
    <FullCalendar
      plugins={[
        plugin_view_multimonth,
        plugin_view_daygrid,
        plugin_view_timegrid,
        plugin_view_list,
      ]}
      initialView="dayGridMonth"
      headerToolbar={{
        center: "title",
        start: options_views,
        end: "today prevYear,prev,next,nextYear",
      }}
      // initialDate={}
      nowIndicator={true}
      navLinks={true}
      weekNumbers={true}
      weekends={weekends}
      selectable={selectable}
      unselectAuto={false}
      editable={editable}
      eventClick={(eventClickArgs) => {
        alert(JSON.stringify(eventClickArgs.event.extendedProps, null, 2));
      }}
    />
  );
}
