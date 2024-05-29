import { FormEventBase } from "./@form-event-base";
import { FormEventSingle } from "./@form-event-single";
import { FormEventRecursive } from "./@form-event-recursive";

export default function Page() {
  return (
    <form>
      <FormEventBase />
      <FormEventSingle />
      <FormEventRecursive />
      <div>
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
