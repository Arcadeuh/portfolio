export class NavItem {
    public name: String;
    public callback: Function | undefined;
    public childNav: NavItem[] | undefined;
    public selected: boolean;
    public mouseOver: boolean;

    constructor(name: String, callback?: Function, ...childNav: NavItem[]){
        this.name = name;
        this.callback = callback;
        this.childNav = childNav;
        this.selected = false;
        this.mouseOver = false;
    }
}