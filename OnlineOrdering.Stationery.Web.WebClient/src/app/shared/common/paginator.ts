import { element } from "protractor";

export class Paginator {

    public start: number;
    public end: number;
    public step: number;
    public _objectList: any;

    set setObjectList(objectList: any) {
        this._objectList = objectList;
    }
    get getObjectList(): any {
        return this._objectList;
    }


    public constructor(objectList: any) {
        this.start = 0;
        this.end = 4;
        this.step = 1;
        this._objectList = objectList;
    }

    GetPrev() {
        this.start -= 1;
        this.end -= 1;
    }

    GetNext() {
        this.start += 1;
        this.end += 1;
    }

    getOrderListSequence() {
        return this.range(this.start, this.end, this.step);
    }

    checkForUndifined(): boolean {
        let undifinedOrder = false;
        this.getOrderListSequence().forEach(order => {
            if (order == undefined) {
                undifinedOrder = true;
            }
        });
        return undifinedOrder;
    }

    range(start, edge, step) {
        // If only one number was passed in make it the edge and 0 the start.
        if (arguments.length == 1) {
            edge = start;
            start = 0;
        }

        // Validate the edge and step numbers.
        edge = edge || 0;
        step = step || 1;

        for (var ret = []; (edge - start) * step > 0; start += step) {
            ret.push(this._objectList[start]);
        }
        return ret;
    }
}