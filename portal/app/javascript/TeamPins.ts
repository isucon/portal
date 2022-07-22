export type TeamPinsMap = Map<string, boolean>;

const loadPins = () => {
  const map: TeamPinsMap = new Map();
  const item = window.localStorage.getItem("isuxportal-dashboard-pins");
  if (item) {
    const teamIds: string[] = JSON.parse(item);
    for (const id of teamIds) {
      map.set(id, true);
    }
  }
  return map;
};

const savePins = (pins: TeamPinsMap) => {
  const data = JSON.stringify(Array.from(pins.keys()));
  try {
    window.localStorage.setItem("isuxportal-dashboard-pins", data);
  } catch (e) {
    console.warn(e);
  }
};

const CAPACITY = 20;

export class TeamPins {
  pins: TeamPinsMap;
  haveRemovedUnknownItems: boolean;
  public onChange?: (newMap: TeamPinsMap) => void;

  constructor() {
    this.pins = loadPins();
    this.haveRemovedUnknownItems = false;
    this.set = this.set.bind(this);
    this.setAndEnsureCapacity = this.setAndEnsureCapacity.bind(this);
  }

  public removeUnknownItems(allTeamIdsFn: () => string[]) {
    if (this.haveRemovedUnknownItems) return;
    const existingIds = new Map(allTeamIdsFn().map((v) => [v, true]));
    let changed = false;
    this.pins.forEach((_, k) => {
      if (!existingIds.get(k)) {
        console.log("Removing unexisting team ID from pins", k);
        this.pins.delete(k);
        changed = true;
      }
    });
    this.haveRemovedUnknownItems = true;
    if (changed) savePins(this.pins);
    if (changed && this.onChange) this.onChange(this.all());
  }

  public setAndEnsureCapacity(teamId: string, flag: boolean) {
    if (flag && !this.pins.get(teamId) && this.pins.size >= CAPACITY) {
      alert(`Maximum number of pinned team is limited to ${CAPACITY}`);
      return;
    }
    return this.set(teamId, flag);
  }

  public set(teamId: string, flag: boolean) {
    if (flag) {
      this.pins.set(teamId, true);
    } else {
      this.pins.delete(teamId);
    }
    savePins(this.pins);
    if (this.onChange) this.onChange(this.all());
  }

  public all(): TeamPinsMap {
    return new Map(this.pins);
  }
}
