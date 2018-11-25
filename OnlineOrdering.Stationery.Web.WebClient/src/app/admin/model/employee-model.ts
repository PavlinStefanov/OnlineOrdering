
export class EmployeeSearch {
    name: string;
}

export class EmployeeModel {
    firstName: string;
    lastName: string;
    region: string;
    location: string;
    phoneNumber: string;
    unitName: string;
    email: string;
    address: string
    userName: string;
    jobTitle: string;
}


export class SearchWorkplaceCriteria {
    region: string;
    location: string;
    unitId: number;
}

export class WorkplaceModel {
    regionName: string;
    locations: LocationModel[];
}

export class LocationModel {
    locationName: string;
    units: UnitModel[];
}

export class UnitModel {
    id: number;
    name: string;
}