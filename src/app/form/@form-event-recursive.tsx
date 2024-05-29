function FormEventRecursive() {
  return (
    <fieldset>
      <legend>Recursive</legend>
      <div>
        <label>daysOfWeek: </label>
        <div>
          <input type="checkbox" name="daysOfWeek" /> Sunday
          <input type="checkbox" name="daysOfWeek" /> Monday
          <input type="checkbox" name="daysOfWeek" /> Tuesday
          <input type="checkbox" name="daysOfWeek" /> Wednesday
          <input type="checkbox" name="daysOfWeek" /> Thursday
          <input type="checkbox" name="daysOfWeek" /> Friday
          <input type="checkbox" name="daysOfWeek" /> Saturday
        </div>
      </div>
      <div>
        <label htmlFor="startRecur">
          startRecur:{" "}
          <input type="datetime-local" name="startRecur" id="startRecur" />
        </label>
      </div>
      <div>
        <label htmlFor="endRecur">
          endRecur:{" "}
          <input type="datetime-local" name="endRecur" id="endRecur" />
        </label>
      </div>
      <div>
        <label htmlFor="startTime">
          startTime: <input type="time" name="startTime" id="startTime" />
        </label>
      </div>
      <div>
        <label htmlFor="endTime">
          endTime: <input type="time" name="endTime" id="endTime" />
        </label>
      </div>
    </fieldset>
  );
}

export { FormEventRecursive };
