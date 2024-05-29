function FormEventSingle() {
  return (
    <fieldset>
      <legend>Simple</legend>
      <label htmlFor="start">
        start: <input type="datetime-local" name="start" id="start" />
      </label>
      <label htmlFor="end">
        end: <input type="datetime-local" name="end" id="end" />
      </label>
    </fieldset>
  );
}

export { FormEventSingle };
