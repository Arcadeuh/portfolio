export class NavItem {
    public name: String;
    public callback: Function | undefined;
    public childNav: NavItem[] | undefined;

    constructor(name: String, callback?: Function, ...childNav: NavItem[]){
        this.name = name;
        this.callback = callback;
        this.childNav = childNav;
    }
}