export class IntroductionItem{
    private title: string|undefined;
    private text: string|undefined;

    constructor(title: string|undefined, text: string|undefined){
        this.title = title;
        this.text = text;
    }

    //====GETTERS====
    public getTitle(){
        return this.title;
    }
    public getText(){
        return this.text;
    }
}