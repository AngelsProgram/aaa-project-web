function FormEventBase() {
  return (
    <fieldset>
      <legend>Base</legend>
      <div>
        <label htmlFor="id">
          ID: <input type="number" name="id" id="id" />
        </label>
      </div>
      <div>
        <label htmlFor="groupId">
          GroupId: <input type="text" name="groupId" id="groupId" />
        </label>
      </div>
      <div>
        <label htmlFor="allDay">
          allDay: <input type="checkbox" name="allDay" id="allDay" />
          <select name="allDay" id="allDay">
            <option></option>
            <option>true</option>
            <option>false</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="title">
          title: <input type="text" name="title" id="title" />
        </label>
      </div>
      <div>
        <label htmlFor="url">
          url: <input type="text" name="url" id="url" />
        </label>
      </div>
      <div>
        <label htmlFor="display">
          Display:{" "}
          <select name="display" id="display">
            <option>auto</option>
            <option>auto</option>
            {/* When in daygrid, renders the event as a solid rectangle if it is all-day or multi-day. If a timed event, will render it with a dot. When in other views, will render normally. */}
            <option>block</option>
            {/*  When in daygrid, renders the event as a solid rectangle. When in other views, will render normally. */}
            <option>list-item</option>
            {/* When in daygrid, renders the event with a dot. When in other views, will render normally. */}
            <option>background</option>
            <option>inverse-background</option>
            <option>none</option>
          </select>
        </label>
      </div>
      <label htmlFor="color">
        Color: <input type="color" name="color" id="color" />
      </label>
    </fieldset>
  );
}

export { FormEventBase };
