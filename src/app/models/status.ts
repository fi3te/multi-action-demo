export enum Status {
    PENDING = 'pending',
    FAILED = 'failed',
    COMPLETED = 'completed',
}

export function reduce(statusValues: Status[]): Status {
    if (statusValues.some(status => status === Status.PENDING)) {
        return Status.PENDING;
    } else if (statusValues.some(status => status === Status.FAILED)) {
        return Status.FAILED;
    } else {
        return Status.COMPLETED;
    }
}