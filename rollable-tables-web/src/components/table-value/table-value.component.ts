import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { RollableTable } from 'src/models/rollabe-table.model';

@Component({
    selector: 'table-value',
    templateUrl: './table-value.component.html',
    styleUrls: ['./table-value.component.css']
})

export class TableValueComponent {
    @Input() table: RollableTable = {} as RollableTable;
    @Input() index: number = 0;
    @Input() childIndex?: number = undefined;
    @Input() value: string = '';
    @Input() isEditing: boolean = false;
    @Output() tableOutput = new EventEmitter<RollableTable>();

    constructor() {
    }

    updateList(event: any) {
        event.preventDefault();
        if (this.childIndex !== undefined) {
            let children = this.table.data[this.index]?.children ?? undefined;
            if (children && children[this.childIndex].value !== event.target.textContent.trim()) {
                children[this.childIndex].value = event.target.textContent.trim();
                this.tableOutput.emit(this.table);
            }
        }
        else {
            if (this.table.data[this.index].value !== event.target.textContent.trim()) {
                this.table.data[this.index].value = event.target.textContent.trim();
                this.tableOutput.emit(this.table);
            }
        }
    }

    removeItem() {
        if (this.childIndex !== undefined) {
            let children = this.table.data[this.index]?.children ?? undefined;
            children?.splice(this.childIndex, 1);
            this.tableOutput.emit(this.table);
        }
        else {
            this.table.data.splice(this.index, 1);
            this.tableOutput.emit(this.table);
        }
    }

    makeMainValue() {
        let children = this.table.data[this.index]?.children ?? undefined
        if (children) {
            let childIndex = this.childIndex ?? 0;
            this.table.data.push(children[childIndex]);
            children.splice(childIndex, 1);
            this.tableOutput.emit(this.table);
        }
    }

    makeSubValue() {
        let parentChildren = this.table.data[this.index - 1]?.children ?? undefined;
        let children = this.table.data[this.index].children ?? [];
        if (parentChildren) {
            parentChildren.push(this.table.data[this.index]);            
            children.forEach(child => {
                parentChildren?.push(child)
            });           
        }
        else {
            this.table.data[this.index - 1].children = [];
            this.table.data[this.index - 1].children?.push(this.table.data[this.index]);
            children.forEach(child => {
                this.table.data[this.index - 1].children?.push(child);
            });   
        }
        this.table.data.splice(this.index, 1);
        this.tableOutput.emit(this.table);
    }
}
