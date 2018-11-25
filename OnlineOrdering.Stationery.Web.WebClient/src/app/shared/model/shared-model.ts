
export class ValueObjects {
    statusList: Status[];
    unitList: Unit[];
    jobsList: Job[];
}

export class Unit {
    unitId: number;
    name: string;
}

export class Status {
    statusId: number;
    name: string;
}

export class Job {
    jobId: number;
    jobName: string;
}


