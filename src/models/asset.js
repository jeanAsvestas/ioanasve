class Asset {
    constructor(active, name, type, building, floor, setupTime, teardownTime, defaultCapacity, groups, setups) {
        this.id;
        this.active = active;
        this.name = name;
        this.type = type;
        this.building = building;
        this.floor = floor;
        this.setupTime = setupTime;
        this.teardownTime = teardownTime;
        this.defaultCapacity = defaultCapacity;
        this.groups = groups;
        this.setups = setups;
    }

}

export default Asset;