export class User {
    id: number;
    companyName: string;
    unitAddress: string;
    location: string;
    region: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    imgName: string;
    email: string;
    userName: string;
    createdOrders: number;
    orderedProducts: number;
    totalCosts: number;
    membersList: IMember[];
}

export interface IMember {
    memberId: number;
    memberName: string;
    memberUnit: string;
    imgName: string;
}

export class IUserSummary {
    userName: string;
    email: string;
    totalOrders: number;
    totalProducts: number;
    totalCosts: number;
    img: string;
}

export interface ITeamMember {
    name: string;
    unit: string;
    color: string;
    image: string;
}

export class UpdateUser {
    firstName: string;
    lastName: string;
    userName: string;
    jobId: number;
    unitId: number;
}

