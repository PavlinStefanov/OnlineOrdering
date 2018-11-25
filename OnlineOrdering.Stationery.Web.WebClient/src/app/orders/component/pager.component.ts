import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { retry } from "rxjs/operator/retry";

@Component({
    selector: 'pager',
    templateUrl: '../view/pager.component.html'
})
export class PagerComponent implements OnInit {

    @Input() isEmpltyList;
    pageNumber: number;
    selectedIndex: number;
    @Output() onSelectedPage: EventEmitter<any> = new EventEmitter<any>();
    active: string;
    notActive: string;
    isActive: number;
    start: number;
    end: number;

    constructor() {
        this.pageNumber = 0;
        this.selectedIndex = 1;
        this.active = 'btn active'
        this.notActive = 'btn';
        this.start = 1;
        this.end = 5;
        this.isActive = 1;
    }
    ngOnChanges() {
        console.log('Emplty List: ', this.isEmpltyList);
    }
    ngOnInit() {
        
    }

    getFirst(): void {
        this.start = 1;
        this.end = 5;
        this.pageNumber = 0;
        this.selectedIndex = 1;
        this.isActive = 1;
        this.onSelectedPage.emit(this.pageNumber);
    }

    getPageNumber(page: number): void {
        this.pageNumber = page;
        this.selectedIndex = page;
        this.isActive = this.selectedIndex;
        this.onSelectedPage.emit(this.pageNumber);
    }

    getPrevious(): void {
        if (this.selectedIndex === 1) {
            this.isActive = 1;
        }
        this.start -= 1;
        this.end -= 1;
        this.selectedIndex -= 1;
        this.isActive = this.selectedIndex;
        this.pageNumber -= 1;
        this.onSelectedPage.emit(this.pageNumber);
    }

    getCurrentFour() {
        return this.range(this.start, this.end, 1);
    }

    getNext(): void {
        this.start += 1;
        this.end += 1;
        this.selectedIndex += 1;
        this.isActive = this.selectedIndex;
        this.pageNumber += 1;
        this.onSelectedPage.emit(this.pageNumber);
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

        // Create the array of numbers, stopping befor the edge.
        for (var ret = []; (edge - start) * step > 0; start += step) {
            ret.push(start);
        }
        return ret;
    }
}